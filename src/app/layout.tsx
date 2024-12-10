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
  title: "Firm Name | Professional Services",
  description: "Professional services and consulting for businesses",
  keywords: ["consulting", "professional services", "business"],
  openGraph: {
    title: "Firm Name",
    description: "Professional services and consulting for businesses",
    images: [
      // {
      //   url: "/og-image.jpg",
      //   width: 1200,
      //   height: 630,
      //   alt: "Firm Name",
      // },
    ],
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
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
