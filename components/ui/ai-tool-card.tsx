"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Chip } from "./chip"
import {
  ArrowRight,
  FileText,
  FileSearch,
  ListTree,
  MapPin,
  Megaphone,
  Link2,
  Bot,
  FileCode,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  FileText,
  FileSearch,
  ListTree,
  MapPin,
  Megaphone,
  Link2,
  Bot,
  FileCode,
}

interface AIToolCardProps {
  iconName: string
  title: string
  description: string
  href: string
  categories: Array<{ label: string; variant: "default" | "primary" | "accent" }>
  className?: string
}

export function AIToolCard({ iconName, title, description, href, categories, className }: AIToolCardProps) {
  const Icon = iconMap[iconName] || FileText

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn("group relative", className)}
    >
      <Link href={href} className="block h-full">
        <div
          className={cn(
            "relative h-full p-6 rounded-xl overflow-hidden",
            "bg-card/50 backdrop-blur-sm border border-border/50",
            "hover:border-primary/50 transition-all duration-300",
          )}
        >
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-primary/50 via-cyan-400/50 to-primary/50 blur-sm" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
              <Icon className="w-6 h-6 text-primary" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((cat, index) => (
                <Chip key={index} variant={cat.variant} className="text-[10px] px-2 py-0.5">
                  {cat.label}
                </Chip>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{description}</p>

            {/* CTA */}
            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-primary">
              <span>Use Tool</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
