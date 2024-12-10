"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Services",
      href: "/#services",
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[110] flex justify-between items-center px-5 py-3 bg-zinc-900 text-white",
          className
        )}
      >
        <div className="flex items-center">
         <Image src="/images/logo.png" alt="Redwood Digital" width={40} height={40} priority />
          <span className="text-xl font-bold">Redwood Digital</span>
        </div>

        <button
          className="z-[120] w-8 h-8 flex items-center justify-center relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <div className="w-6 flex flex-col items-center justify-center">
            <span
              className={cn(
                "w-full h-0.5 bg-white block transition-all duration-300 ease-out",
                isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
              )}
            />
            <span
              className={cn(
                "w-full h-0.5 bg-white block transition-all duration-300 ease-out my-[6px]",
                isMenuOpen ? "rotate-45 translate-y-[1px] " : ""
              )}
            />
            <span
              className={cn(
                "w-full h-0.5 bg-white block transition-all duration-300 ease-out",
                isMenuOpen ? "-rotate-45 -translate-y-[7px] " : ""
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-zinc-900/95 z-[100] backdrop-blur-sm"
          >
            <motion.div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-medium hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
