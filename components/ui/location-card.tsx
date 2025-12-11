"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MapPin, ArrowRight } from "lucide-react"

interface LocationCardProps {
  city: string
  country: string
  flag: string
  href: string
  description?: string
  className?: string
}

export function LocationCard({ city, country, flag, href, description, className }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative rounded-xl overflow-hidden",
        "bg-card/50 border border-border/50",
        "hover:border-primary/30",
        "transition-all duration-300",
        className,
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <Link href={href} className="block p-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{flag}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{country}</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {city}
            </h3>
            {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              View Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
