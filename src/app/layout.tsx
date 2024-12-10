import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/util/navItems";
import { Toaster } from "@/components/ui/sonner";
import MobileNavbar from "@/components/ui/mobile-navbar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Redwood Digital | Technical Staffing & Software Solutions",
  description: "Premier technical staffing and custom software development. Specializing in web applications, SaaS solutions, and engineering talent placement.",
  keywords: [
    "technical staffing",
    "software engineering",
    "web development",
    "SaaS",
    "talent acquisition",
    "custom software",
    "engineering recruitment",
    "software consulting",
    "tech talent",
    "application development"
  ],
  openGraph: {
    title: "Redwood Digital | Technical Staffing & Software Solutions",
    description: "Premier technical staffing and custom software development. Specializing in web applications, SaaS solutions, and engineering talent placement.",
    images: [
      {
        url: "/og-image.png",
        width: 2916,
        height: 1422,
        alt: "Redwood Digital - Technical Staffing & Software Solutions",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MobileNavbar className="md:hidden" />
        <FloatingNav navItems={navItems} className="hidden md:flex"/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
