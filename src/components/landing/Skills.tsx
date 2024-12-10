import { Brain, Cloud, Layout, Shield, Smartphone } from "lucide-react";
import Image from "next/image";
import { SectionLabel } from "../ui/section-label";
import { AspectRatio } from "../ui/aspect-ratio";

export function Skills({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) {
  const skills = [
    {
      icon: <Layout className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      title: "Web Development",
      description: "Full-stack expertise in React, Node.js, and modern frameworks"
    },
    {
      icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      title: "Cloud Architecture",
      description: "AWS and Azure solutions for scalable applications"
    },
    {
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      title: "Cybersecurity",
      description: "Enterprise-grade security implementations"
    }
  ];

  return (
    <section id="services" ref={ref} className="w-full py-10 md:py-20">
      <div className="mx-auto px-2 md:px-4">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
          <AspectRatio ratio={16 / 10} className="h-full w-full absolute inset-0">
                       <Image
              src="/images/meeting.jpg"
              alt="People in a meeting"
              className="h-full w-full object-cover rounded-t-2xl md:rounded-3xl"
              loading="lazy"
              fill
            />
            <div className="absolute inset-0 bg-black/70" />
          </AspectRatio>

               
        <div className="relative md:absolute mx-0 md:mx-2 mt-0 md:mt-20 mb-0 md:mb-2 
          inset-y-0 right-0 w-full lg:w-1/2 
          bg-black md:backdrop-blur-md md:bg-gradient-to-bl md:from-black/70 md:to-slate-900/70 
          rounded-b-2xl md:rounded-3xl">
            <div className="h-full p-6 md:p-12 flex flex-col justify-center">
              <SectionLabel
                icon={<Brain className="w-3 h-3 md:w-4 md:h-4 text-red-600" />}
                label="Skills"
                sublabel="Our Expertise"
                className="mb-8 md:mb-16"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2 md:space-y-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      {skill.icon}
                      <h3 className="text-lg md:text-xl text-white font-semibold">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}