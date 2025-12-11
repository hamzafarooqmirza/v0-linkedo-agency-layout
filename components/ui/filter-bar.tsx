"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface FilterBarProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
  className?: string
}

export function FilterBar({ filters, activeFilter, onFilterChange, className }: FilterBarProps) {
  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
            activeFilter === filter ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {activeFilter === filter && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{filter}</span>
        </button>
      ))}
    </div>
  )
}
