"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  eyebrow?: string
  title?: string
  description?: string
  fullWidth?: boolean
  gradient?: boolean
  id?: string
}

export function Section({
  children,
  className,
  eyebrow,
  title,
  description,
  fullWidth = false,
  gradient = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24 relative",
        gradient && "bg-gradient-to-b from-transparent via-primary/5 to-transparent",
        className,
      )}
    >
      <div className={cn("w-full", !fullWidth && "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}>
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto"
          >
            {eyebrow && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 text-balance">{title}</h2>
            )}
            {description && <p className="text-lg text-muted-foreground text-pretty">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
