import Image from "next/image";
import { LinkButton } from "./LinkButton";

export function ServiceHighlight() {
  return (
    <section className="px-2 md:px-4">
      <div className="relative h-[500px] md:h-[600px]">
        <Image
          src="/images/workers.jpg"
          alt="Team collaboration"
          className="h-full w-full object-cover rounded-2xl md:rounded-3xl"
          loading="lazy"
          fill
        />
        <div className="absolute inset-x-0 bottom-0 md:inset-0 flex h-1/2 md:h-full w-full p-2 md:p-4">
          <div className="flex flex-col justify-center md:justify-between bg-gradient-to-r from-black/80 to-transparent md:to-gray backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-10 w-full md:w-1/2 h-full">
            <div className="space-y-2 md:space-y-6">
              <h1 className="text-white text-2xl md:text-4xl font-bold leading-relaxed">
                Transform Your Business Through Technology
              </h1>
              <p className="text-white/80 text-base md:text-xl">
                Partner with us to leverage cutting-edge solutions that drive
                growth and innovation.
              </p>
            </div>
            <LinkButton href="#services" variant="light" className="mt-4 md:mt-0 mb-0 md:mb-10">
              Explore Our Services
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}