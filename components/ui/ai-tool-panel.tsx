"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, RefreshCw, Trash2, Sparkles, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface AIToolPanelProps {
  children: React.ReactNode
  results: string[]
  onRegenerate?: () => void
  onClear?: () => void
  className?: string
}

export function AIToolPanel({ children, results, onRegenerate, onClear, className }: AIToolPanelProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("relative rounded-2xl overflow-hidden", "bg-card/60 backdrop-blur-xl", className)}
    >
      {/* Glowing border */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/40 via-cyan-400/40 to-primary/40" />
        <div className="absolute inset-[1px] rounded-xl bg-card" />
      </div>

      {/* Inner glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-0">
        {/* Input Side */}
        <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border/50">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Input</h3>
          </div>
          {children}
        </div>

        {/* Results Side */}
        <div className="p-6 lg:p-8 bg-surface/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Generated Results</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={onRegenerate}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                title="Regenerate"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={onClear}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                title="Clear"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {results.length > 0 ? (
            <div className="space-y-3">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm text-foreground pr-10">{result}</p>
                  <button
                    onClick={() => handleCopy(result, index)}
                    className="absolute top-3 right-3 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    title="Copy"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary/50" />
              </div>
              <p className="text-muted-foreground">Your generated results will appear here</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
