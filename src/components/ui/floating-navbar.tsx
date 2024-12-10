"use client";

import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aperture } from "lucide-react";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      const threshold = 0.1; // 1.5% of scroll progress
      const isPastThreshold = current > threshold;

      setShowLogo(isPastThreshold);

      // Keep navbar visible at top, otherwise show on scroll up
      if (current < 0.01) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const pathname = usePathname();
  const isNotHomepage = pathname !== "/";


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-gray-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <AnimatePresence mode="wait">
          {(showLogo || isNotHomepage) &&  (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/">
                <Aperture className="w-6 h-6 text-red-500" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link key={`link=${idx}`} href={navItem.link}>
            <motion.div
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600",
                "hover:font-bold dark:hover:text-white",
                "transition-all duration-200"
              )}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </motion.div>
          </Link>
        ))}
        {/* Replace the button with this */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className={cn(
            "border text-sm font-medium relative",
            "border-neutral-200 dark:border-white/[0.2]",
            "text-black dark:text-white px-4 py-2 rounded-full",
            "transition-all duration-300",
            "hover:border-blue-500 dark:hover:border-blue-400",
            "hover:bg-blue-500/10 dark:hover:bg-blue-400/10",
            "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]"
          )}
        >
          <Link href="/contact">Get in Touch</Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
