import { Aperture } from "lucide-react";
import Image from "next/image";
import { AuroraBackground } from "../ui/aurora-background";
import { LinkButton } from "./LinkButton";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section>
      <AuroraBackground className="hidden md:block h-[70vh] rounded-b-3xl p-20 pt-40 z-20">
        <HeroContent variant="light" />
      </AuroraBackground>

      <div className="h-[100vh] pt-10 md:-mt-32 min-h-[900px] relative w-full overflow-x-clip overflow-y-clip md:overflow-y-visible">
        {/* HeroContent with proper positioning */}
        <div className="relative z-50 px-6 md:px-20">
          <HeroContent variant="dark" className="md:hidden" />
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-10" />
        <Image
          src="/images/office.jpg"
          alt="Office image"
          className="h-full w-full object-cover blur-sm"
          priority
          fill
        />

        <div className="absolute bottom-0 right-0 w-full h-[600] bg-gradient-to-t from-black to-transparent z-40" />

        <Image
          src="/images/woman-standing.png"
          alt="Office image"
          className="object-cover absolute -bottom-40 md:bottom-0 lg:-right-48 -right-72 z-30 scale-x-[-1] min-w-[660px] min-h-[990px]"
          height={1200}
          width={800}
          priority
        />
      </div>
    </section>
  );
}

function HeroContent({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-full items-start justify-end space-y-16 h-full",
        variant === "dark" ? "text-white" : "text-gray-900",
        className
      )}
    >
      <div className="hidden md:flex lg:absolute top-12 left-15 items-center gap-4">
        <Aperture className="w-14 h-14 text-red-500" />
        <h1 className="text-4xl font-semibold">DevForge</h1>
      </div>

      <p
        className={cn(
          "max-w-lg lg:max-w-3xl text-lg md:text-3xl font-semibold leading-relaxed",
          variant === "dark" ? "text-gray-300" : "text-gray-600"
        )}
      >
        We build powerful software solutions that drive 
        <span className={cn(
          "mx-2",
          variant === "dark" ? "text-white font-bold" : "text-black font-bold"
        )}>
          business transformation and growth
        </span>
        through innovative engineering and design excellence.
      </p>
      <LinkButton
        href="/contact"
        variant={variant === "dark" ? "light" : "dark"}
      >
        Get In Touch
      </LinkButton>
    </div>
  );
}