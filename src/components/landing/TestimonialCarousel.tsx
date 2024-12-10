import { Testimonials, Testimonial } from "../ui/testimonials";

const quotes: Testimonial[] = [
  {
    name: "Michael Anderson",
    quote:
      "This service has been outstanding! It completely transformed our business operations.",
    title: "CEO",
    imageUrl: "/images/man-1.jpg",
  },
  {
    name: "Jennifer Thompson",
    title: "Marketing Director",
    quote:
      "The results have exceeded all our expectations. Their strategic approach is remarkable.",
    imageUrl: "/images/woman-1.jpg",
  },
  {
    name: "Robert Mitchell",
    title: "Product Manager",
    quote:
      "A game-changer for our product development process. Highly efficient and reliable.",
    imageUrl: "/images/man-2.jpg",
  },
  {
    name: "Sarah Williams",
    title: "Chief Technology Officer",
    quote:
      "The innovation and expertise this team brings is truly exceptional.",
    imageUrl: "/images/woman-2.jpg",
  },
  {
    name: "David Harrison",
    title: "Operations Manager",
    quote:
      "Their professionalism and commitment are truly remarkable. Outstanding results.",
    imageUrl: "/images/man-3.jpg",
  },
  {
    name: "Emily Parker",
    title: "HR Specialist",
    quote:
      "An exceptional experience. The team's innovative approach sets them apart.",
    imageUrl: "/images/woman-3.jpg",
  },
  {
    name: "James Wilson",
    title: "Sales Lead",
    quote:
      "The results have exceeded our expectations. Truly outstanding partnership.",
    imageUrl: "/images/man-4.jpg",
  },
  {
    name: "Rachel Stevens",
    title: "Digital Strategist",
    quote:
      "Their innovative solutions have revolutionized how we approach digital challenges.",
    imageUrl: "/images/woman-4.jpg",
  },
];
export function TestimonialCarousel() {
  return (
    <section className="flex justify-center items-center mt-40 ">
      <Testimonials className="w-full" items={quotes} speed="normal" />
    </section>
  );
}
