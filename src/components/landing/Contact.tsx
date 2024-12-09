import Image from "next/image";
import { LinkButton } from "./LinkButton";

export function Contact() {
    return (
      <section className="min-h-screen w-full flex justify-center items-center p-4">
        <div
          className="relative flex flex-col justify-center items-start space-y-8 md:space-y-12 
          bg-gradient-to-br from-red-600 to-red-700 
          min-h-[500px] w-full 
          p-6 md:p-20 rounded-xl 
          shadow-2xl transition-all duration-300 hover:shadow-red-600/20 overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 md:w-80">
            <Image
              src="/images/atom-sphere.png"
              alt="Technology sphere"
              width={320}
              height={320}
              className="object-contain opacity-50 md:opacity-80 
                transition-all duration-500 hover:opacity-100"
            />
          </div>
          <h1
            className="text-white text-3xl md:text-5xl font-semibold max-w-xl leading-relaxed
            animate-fade-in"
          >
            Transform Your Digital Vision into Reality
          </h1>

          <div
            className="flex flex-col md:flex-row justify-between items-start w-full 
            space-y-6 md:space-y-0 md:space-x-20"
          >
            <div className="flex flex-col space-y-6 w-full md:w-auto">
              <LinkButton
                href="#contact"
                variant="dark"
                className="w-full md:w-auto text-lg transition-all duration-300 
                  hover:scale-105 hover:shadow-lg"
              >
                Schedule Free Consultation
              </LinkButton>

              <p className="text-xl md:text-3xl text-red-100 font-medium md:max-w-2xl">
                Our expert developers build scalable, modern web solutions that
                drive real business results. Let&apos;s discuss your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}