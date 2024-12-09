"use client";

import { Footer } from "./Footer";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Contact } from "./Contact";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { Skills } from "./Skills";
import { CardStack } from "./CardStack";
import { MissionStatement } from "./MissionStatement";
import { ServiceHighlight } from "./ServiceHighlight";
import { VisionStatement } from "./VisionStatement";
import { ProblemStatement } from "./ProblemStatement";
import { Hero } from "./Hero";

export function Landing() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!overlayRef.current) return;

      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const quarterViewport = viewportHeight * 0.25;
      const elementTop =
        overlayRef.current.getBoundingClientRect().top +
        window.scrollY -
        quarterViewport;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (isScrollingDown && currentScrollY > elementTop) {
        setScrolledPast(true);
      } else if (!isScrollingDown && currentScrollY < elementTop) {
        setScrolledPast(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "transition-colors duration-700 ease-in-out",
        scrolledPast ? "bg-black" : "bg-white"
      )}
    >
      <Hero />
      <ProblemStatement />
      <VisionStatement />
      <ServiceHighlight />
      <MissionStatement />
      <CardStack />
      <Skills ref={overlayRef} />
      <TestimonialCarousel />
      <Contact />
      <Footer />
    </div>
  );
}
