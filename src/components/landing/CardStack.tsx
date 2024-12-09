import Card from "./Card";
import { CardProps } from "./Card";

const stackedCards: CardProps[] = [
  {
    title: "Digital Innovation",
    description:
      "Building next-generation digital solutions that transform businesses. Our expertise in emerging technologies drives growth and creates competitive advantages in today's digital landscape.",
    imageUrl: "/images/man-smiling-min.png",
    className: "bg-indigo-600",
    index: 0,
  },
  {
    title: "Cloud Solutions",
    description:
      "Enterprise-grade cloud architecture and implementation. We help businesses scale securely with optimized infrastructure and cloud-native applications.",
    imageUrl: "/images/woman-white-blazer-min.png",
    className: "bg-slate-800",
    linkButtonVariant: "light",
    index: 1,
  },
  {
    title: "Strategic Consulting",
    description:
      "Data-driven insights and expert guidance to navigate digital transformation. Our consultants help you make informed decisions that drive measurable business outcomes.",
    imageUrl: "/images/woman-gray-blazer.png",
    className: "bg-slate-200 text-black",
    linkButtonVariant: "dark",
    index: 2,
  },
];

export function CardStack() {
  return (
    <div className="p-4 mb-40">
      {stackedCards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
}
