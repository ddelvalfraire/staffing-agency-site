import { Quote } from "lucide-react";
import Image from "next/image";

export type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
};

export function TestimonialCard({
  quote,
  name,
  title,
  imageUrl,
}: TestimonialProps) {
  return (
    <div
      className="group relative w-[300px] md:w-96 bg-white rounded-2xl md:rounded-3xl p-3 md:p-4
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-xl"
    >
      <div className="absolute top-0 right-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="object-cover rounded-bl-2xl md:rounded-bl-3xl rounded-tr-2xl md:rounded-tr-3xl
            transition-transform duration-300
            group-hover:scale-110 md:w-[125px] md:h-[125px]"
            loading="lazy"
        />
      </div>

      <blockquote className="flex h-full flex-col justify-center items-start m-4 md:m-8">
        <div className="relative">
          <Quote
            className="w-8 h-8 md:w-12 md:h-12 fill-current text-red-500
            transition-all duration-300
            group-hover:rotate-12 group-hover:scale-110"
          />
          <p
            className="pt-4 md:pt-6 text-lg md:text-xl font-semibold 
            leading-relaxed tracking-wide
            transition-colors duration-300
            group-hover:text-gray-800"
          >
            {quote}
          </p>
        </div>

        <footer className="mt-3 md:mt-4 pt-3 md:pt-4">
          <div className="flex flex-col">
            <span
              className="font-medium text-xs md:text-sm
              transition-colors duration-300
              group-hover:text-gray-800"
            >
              {name}
            </span>
            <span
              className="mt-0.5 md:mt-1 text-[10px] md:text-xs text-black/50
              transition-colors duration-300
              group-hover:text-gray-600"
            >
              {title}
            </span>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}