import type React from "react"
import { cn } from "@/lib/utils"

interface ChipProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary" | "accent"
  className?: string
}

export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mx-2.5 my-0 mt-[]",
        variant === "default" && "bg-secondary/50 text-foreground border-border",
        variant === "primary" && "bg-primary/10 text-primary border-primary/30",
        variant === "secondary" && "bg-secondary text-secondary-foreground border-border",
        variant === "accent" && "bg-accent/10 text-accent border-accent/30",
        className,
      )}
    >
      {children}
    </span>
  )
}
