import { Aperture } from "lucide-react";
import { LinkButton } from "./LinkButton";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function Hero() {
  return (
    <div>
      <AuroraBackground className="h-[80vh] rounded-b-3xl p-20 pt-40 z-20">
        <div className="flex flex-col w-full items-start justify-end space-y-16 h-full">
          <div className="lg:absolute top-12 left-15 flex items-center gap-4">
            <Aperture className="w-14 h-14 text-red-500" />
            <h1 className="text-4xl font-semibold">Firm</h1>
          </div>

          <p className="max-w-3xl text-3xl font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum
            nesciunt unde hic laboriosam cupiditate voluptatibus, quae esse
            quasi
          </p>

          <LinkButton href="#services" variant="dark">
            View our services
          </LinkButton>
        </div>
      </AuroraBackground>
      <AspectRatio ratio={16 / 9} className="-mt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black z-10" />
        <Image
          src="/images/office.jpg"
          alt="Office image"
          className="h-full w-full object-cover blur-sm"
          fill
        />
      </AspectRatio>
    </div>
  );
}
