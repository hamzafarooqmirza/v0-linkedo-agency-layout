"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  suffix?: string
  className?: string
}

export function StatCard({ value, label, suffix, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative p-6 rounded-xl text-center",
        "bg-card/50 backdrop-blur-sm border border-border/50",
        "hover:border-primary/30 transition-colors duration-300",
        className,
      )}
    >
      <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
        <span className="text-gradient-primary">{value}</span>
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
