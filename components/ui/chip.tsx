import type React from "react"
import { cn } from "@/lib/utils"

interface ChipProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "accent"
  className?: string
}

export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        variant === "default" && "bg-secondary/50 text-foreground border-border",
        variant === "primary" && "bg-primary/10 text-primary border-primary/30",
        variant === "accent" && "bg-accent/10 text-accent border-accent/30",
        className,
      )}
    >
      {children}
    </span>
  )
}
