"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import * as Icons from "lucide-react"

interface ProcessStep {
  iconName: string
  title: string
  description: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
  className?: string
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Connection line */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon =
            (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[step.iconName] || Icons.Circle
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-10">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-card/50 border border-border/50 flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                <Icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
