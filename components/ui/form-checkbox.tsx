"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface FormCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string
}

export const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
          <div
            className={cn(
              "w-5 h-5 rounded border border-border bg-input",
              "peer-checked:bg-primary peer-checked:border-primary",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary/50",
              "transition-all duration-200",
              className,
            )}
          />
          <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
        <span className="text-sm text-foreground group-hover:text-foreground/80 transition-colors">{label}</span>
      </label>
    )
  },
)
FormCheckbox.displayName = "FormCheckbox"
