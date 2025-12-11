"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface FormCardProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export function FormCard({ children, className, title, description }: FormCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 lg:p-8",
        "bg-card/60 backdrop-blur-xl border border-border/50",
        "shadow-xl shadow-background/50",
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
