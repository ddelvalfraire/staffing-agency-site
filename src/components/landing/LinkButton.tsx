import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  variant: "dark" | "light" | "text";
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkButton({
  variant,
  href,
  children,
  className,
}: LinkButtonProps) {
  return (
    <Link href={href} className={cn("group", className)}>
      {variant === "text" ? (
        <span className="flex items-center gap-2 text-2xl">
          {children}
          <ArrowRight className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-2" />
        </span>
      ) : (
        <Button
          className={cn(
            "relative rounded-lg py-6 px-4 shadow-xl",
            variant === "dark"
              ? "bg-black hover:bg-black text-white"
              : "bg-white hover:bg-white text-black"
          )}
        >
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
      )}
    </Link>
  );
}
