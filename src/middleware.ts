// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Duration, Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Configuration
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const TRUSTED_IPS = (process.env.TRUSTED_IPS || "").split(",");
const RATE_LIMIT_REQUESTS = parseInt(process.env.RATE_LIMIT_REQUESTS || "20");
const RATE_LIMIT_WINDOW = process.env.RATE_LIMIT_WINDOW || "10 s";

// Validate config
if (!REDIS_URL || !REDIS_TOKEN) {
  throw new Error("Required Redis environment variables are not set");
}

// Initialize Redis
const redis = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
  retry: {
    retries: 3,
    backoff: (retryCount) => Math.min(Math.exp(retryCount) * 100, 3000),
  },
});

// Configure rate limiters
const defaultLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW as Duration),
  analytics: true,
});

const apiLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "1 m"), // Stricter for API
  analytics: true,
});

// Endpoints to skip rate limiting
const whitelist = [
  '/_next',
  '/static',
  '/images',
  '/favicon.ico',
];

export async function middleware(request: NextRequest) {
  try {
    // Skip static assets and whitelisted paths
    if (whitelist.some(path => request.nextUrl.pathname.startsWith(path))) {
      return NextResponse.next();
    }

    // Get real IP with fallbacks
    const ip = request.headers.get("x-real-ip") || 
               request.headers.get("x-forwarded-for");

    if (!ip) {
        console.error("IP address not found");
        return NextResponse.json({ error: "IP address not found" }, { status: 400 });
    }
    // Skip trusted IPs
    if (TRUSTED_IPS.includes(ip)) {
      return NextResponse.next();
    }

    // Select limiter based on path
    const isApi = request.nextUrl.pathname.startsWith('/api');
    const limiter = isApi ? apiLimiter : defaultLimiter;
    
    // Generate unique key based on IP and path
    const key = `ratelimit_${ip}_${isApi ? 'api' : 'default'}`;

    const { success, limit, reset, remaining } = await limiter.limit(key);

    if (!success) {
      return new NextResponse(
        JSON.stringify({
          error: "Too many requests",
          retryAfter: reset - Date.now(),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
            'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    return NextResponse.next();
  }
}

// Configure which routes to apply middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};