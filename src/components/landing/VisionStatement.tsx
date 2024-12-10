import Image from "next/image";
import { LinkButton } from "./LinkButton";

export function VisionStatement() {
  return (
    <section className="flex flex-col md:flex-row  items-start justify-between mb-20 p-6 md:p-20 pt-20 md:pt-40 gap-8 md:gap-16">
      <Image
        src="/images/block-cross.png"
        alt="3d block cross"
        width={300}
        height={300}
        className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover"
        priority
      />

      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <div className="flex flex-col max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-semibold max-w-sm leading-relaxed mb-8 md:mb-16">
            Shaping Tomorrow&apos;s Digital Landscape
          </h1>
          <p className="text-xl md:text-3xl leading-relaxed mb-6">
            We envision a future where technology empowers every business to reach its full potential.
            Our innovative solutions transform challenges into opportunities.
          </p>
          <p className="text-xl md:text-3xl leading-relaxed text-gray-500 mb-8 md:mb-16">
            Through strategic partnerships and cutting-edge expertise, we&apos;re building the digital
            infrastructure that will define the next generation of business success.
          </p>
          <LinkButton href="#services" variant="dark" className="self-start">
            Our Services
          </LinkButton>
        </div>
      </div>
    </section>
  );
}