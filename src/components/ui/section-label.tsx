import { JSX } from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  icon: JSX.Element;
  label: string;
  sublabel: string;
  className?: string;
};

export function SectionLabel({
  icon,
  label,
  sublabel,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center space-x-2 rounded-full bg-transparent",
        className
      )}
    >
      <div className="flex items-center">{icon}</div>
      <div className="flex space-x-2">
        <p className="text-red-500 font-medium text-sm">{label}</p>
        <p className="text-gray-100 text-sm">{sublabel}</p>
      </div>
    </div>
  );
}
