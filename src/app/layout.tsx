import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/util/navItems";
import "./globals.css";
import MobileNavbar from "@/components/ui/mobile-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        
      </body>
    </html>
  );
}
