"use client"

import type * as React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  href?: string
  children: React.ReactNode
}

const variantStyles = {
  primary: "bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:shadow-lg hover:shadow-primary/25",
  secondary: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50",
}

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
}

export function AnimatedButton({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  href,
  ...props
}: AnimatedButtonProps) {
  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={styles}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={styles}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  )
}
