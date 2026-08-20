"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  iconName?: string
  icon?: LucideIcon | string
  title: string
  description: string
  href?: string
  className?: string
}

export function ServiceCard({ iconName, icon, title, description, href, className }: ServiceCardProps) {
  const Component = href ? motion.a : motion.div
  const iconKey = iconName || (typeof icon === "string" ? icon : undefined)
  const Icon =
    (typeof icon === "function" ? icon : undefined) ||
    (iconKey ? (Icons as unknown as Record<string, LucideIcon>)[iconKey] : undefined) ||
    Icons.Circle

  return (
    <Component
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative block p-5 sm:p-6 lg:p-8 rounded-xl",
        "bg-card/50 backdrop-blur-sm border border-border/50",
        "hover:border-primary/30 hover:bg-card/80",
        "transition-all duration-300",
        href && "cursor-pointer",
        className,
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{description}</p>
      </div>
    </Component>
  )
}
