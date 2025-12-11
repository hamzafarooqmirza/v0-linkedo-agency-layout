"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  image?: string
  className?: string
}

export function TestimonialCard({ quote, author, role, company, image, className }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("relative rounded-2xl p-6 lg:p-8", "bg-card/50 border border-border/50", className)}
    >
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      <p className="text-lg text-foreground mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
