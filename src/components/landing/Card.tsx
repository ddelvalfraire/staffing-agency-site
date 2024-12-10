import { cn } from "@/lib/utils";
import { LinkButton } from "./LinkButton";
import Image from "next/image";

export type CardProps = {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  linkButtonVariant?: "dark" | "light";
};

const Card: React.FC<CardProps> = ({
  index,
  title,
  description,
  className,
  linkButtonVariant = "dark",
  imageUrl,
}) => {
  const topOffset = index === 0 ? 0 : index * 2; // Adjust the multiplier as needed

  return (
    <div className="min-h-[50vh] md:min-h-[100vh] flex justify-center items-center md:sticky md:top-0">
      <div
        className={cn(
          "relative -top-8 flex flex-col text-white items-start p-6 pb-48 md:pb-16 md:p-16 space-y-8 md:space-y-16 justify-center w-full h-auto md:h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden",
          className
        )}
        style={{ top: `${topOffset}rem` }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="max-w-xl md:max-w-xl text-base md:text-lg">
          {description}
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <LinkButton href="/contact" variant={linkButtonVariant}>
            Contact us
          </LinkButton>
        </div>
        <div className="absolute bottom-10 right-0 md:right-10 object-cover w-[200px] md:w-[350px] h-[200px] md:h-[350px]">
          <Image src={imageUrl} alt={title} width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Card;
