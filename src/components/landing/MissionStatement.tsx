import Image from "next/image";
import { Separator } from "../ui/separator";

export function MissionStatement() {
  return (
    <section className="flex flex-col justify-center items-start p-6 md:p-14 min-h-screen">
        <Image
          src="/images/block-stack.png"
          alt="3d block stack"
          width={300}
          height={300}
          className="object-cover"
          priority
        />
      <Separator className="bg-black mb-4 md:mb-10" />
      <p className="text-xl md:text-3xl font-semibold leading-relaxed text-slate-500">
        We empower businesses to thrive in the digital age through innovative
        technology solutions and strategic excellence.
        <span className="text-black">
          {" "}
          Our mission is to bridge the gap between ambitious ideas and
          transformative digital realities,{" "}
        </span>
        delivering solutions that drive growth, efficiency, and lasting success
        for our clients across the globe.
      </p>
    </section>
  );
}