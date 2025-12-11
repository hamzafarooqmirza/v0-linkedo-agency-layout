import type React from "react"
import { cn } from "@/lib/utils"

interface MainShellProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function MainShell({ children, className, fullWidth = false }: MainShellProps) {
  return (
    <div className={cn("w-full", !fullWidth && "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  )
}
