"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import * as Icons from "lucide-react"
import { Badge } from "./badge"

interface ToolCardProps {
  iconName: string
  title: string
  description: string
  href: string
  badge?: string
  className?: string
}

export function ToolCard({ iconName, title, description, href, badge, className }: ToolCardProps) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName] || Icons.Circle

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
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
      <Link href={href} className="block p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {badge && (
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              {badge}
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Try Now
          <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </motion.div>
  )
}
