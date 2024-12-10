import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        autoComplete="off"
        className={cn(
          "flex h-11 w-full rounded-xl border-[0.5px] border-zinc-800/20 bg-zinc-800/50 px-4 py-3 text-base transition-colors duration-300 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-500/50 focus-visible:bg-zinc-700/50 ring-0 ring-offset-0 focus-visible:ring-[0.5px] focus-visible:ring-purple-500/50 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }