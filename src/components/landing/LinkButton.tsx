import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  variant: "dark" | "light";
  href: string;
  children: React.ReactNode;
};

export function LinkButton({ variant, href, children }: LinkButtonProps) {
  return (
    <Link href={href} className="group">
      <Button className="relative rounded-lg hover:bg-primary py-6 px-4">
        <span className="flex items-center gap-6">
          {children}
          <span
            className={cn(
              "p-0.5 rounded-full transition-all duration-300 ease-in-out",
              "group-hover:translate-x-2 group-hover:animate-blink",
              variant === "dark"
                ? "bg-white/20 dark:bg-black/20"
                : "bg-black/20 dark:bg-white/20"
            )}
          >
            <ArrowRight />
          </span>
        </span>
      </Button>
    </Link>
  );
}
