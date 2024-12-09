import { Testimonials, Testimonial } from "../ui/testimonials";

const quotes: Testimonial[] = [
  {
    name: "John Doe",
    quote:
      "This service is amazing! It has completely transformed our business.",
    title: "CEO",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director",
    quote:
      "I can't recommend this enough. The team is fantastic and the results speak for themselves.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Sam Wilson",
    title: "Product Manager",
    quote:
      "A game-changer for our product development process. Highly efficient and reliable.",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Lisa Taylor",
    title: "Chief Technology Officer",
    quote:
      "The innovation and expertise this team brings to the table is unmatched. We've seen remarkable growth.",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Michael Brown",
    title: "Operations Manager",
    quote:
      "The level of professionalism and dedication is truly commendable. A seamless experience from start to finish.",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emily Davis",
    title: "HR Specialist",
    quote:
      "It's refreshing to work with a team that truly understands the value of collaboration and innovation.",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Chris Johnson",
    title: "Sales Lead",
    quote:
      "The results have exceeded our expectations. Our team productivity has never been better.",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];
export function TestimonialCarousel() {
  return (
    <section className="flex justify-center items-center mt-40 ">
      <Testimonials className="w-full" items={quotes} speed="normal" />
    </section>
  );
}
