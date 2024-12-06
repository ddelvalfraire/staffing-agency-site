import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
 const navItems = [
   {
     name: "Home",
     link: "/",

   },
   {
     name: "About",
     link: "/about",

   },
   {
     name: "Contact",
     link: "/contact",

   },
 ];
 export default function Home() {
  return (
    <div className="min-h-[200vh] grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav navItems={navItems} />
      
      {/* First Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Add multiple sections for scrolling */}
        {[1, 2, 3, 4].map((section) => (
          <section key={section} className="min-h-screen flex flex-col items-center justify-center gap-8 py-20">
            <h2 className="text-3xl font-bold">Section {section}</h2>
            <p className="max-w-2xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="h-40 w-full bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
          </section>
        ))}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
        </div>
      </main>
    </div>
  );
}