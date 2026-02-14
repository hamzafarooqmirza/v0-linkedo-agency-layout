"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainShell } from "@/components/layout/main-shell"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Chip } from "@/components/ui/chip"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { QuotationModal } from "@/components/ui/quotation-modal"

interface HeroSectionProps {
  onBookCall?: () => void
}

export function HeroSection({ onBookCall }: HeroSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Animated floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-1/3 right-[15%] w-20 h-20 border border-primary/20 rounded-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-[10%] w-16 h-16 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-1/2 left-[20%] w-3 h-3 bg-primary/40 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-2/3 right-[25%] w-2 h-2 bg-cyan-400/40 rounded-full"
          />
        </div>

        <MainShell className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Chip variant="primary" className="mb-6">
                  Trusted by 100+ B2B Companies
                </Chip>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance font-[family-name:var(--font-montserrat)]"
              >
                Web, SEO & Ads That <span className="text-gradient-primary">Actually Bring Leads</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
              >
                We help B2B businesses grow with data-driven digital marketing strategies that deliver measurable
                results and real ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <AnimatedButton size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
                <Link href="/services">
                  <AnimatedButton variant="secondary" size="lg">
                    View Services
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>

            {/* Right content - Dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card/50 border border-border/50 p-4 backdrop-blur-sm">
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-transparent to-cyan-500/20 rounded-2xl blur-sm" />

                <div className="relative rounded-xl bg-background/80 p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">Analytics Dashboard</div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-card/80 border border-border/50">
                      <div className="text-2xl font-bold text-primary">+156%</div>
                      <div className="text-xs text-muted-foreground">Traffic Growth</div>
                    </div>
                    <div className="p-4 rounded-lg bg-card/80 border border-border/50">
                      <div className="text-2xl font-bold text-green-400">847</div>
                      <div className="text-xs text-muted-foreground">Leads This Month</div>
                    </div>
                    <div className="p-4 rounded-lg bg-card/80 border border-border/50">
                      <div className="text-2xl font-bold text-accent">5.2x</div>
                      <div className="text-xs text-muted-foreground">ROAS</div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-32 rounded-lg bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-end justify-around px-4 pb-4">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                        className="w-4 rounded-t bg-gradient-to-t from-primary to-cyan-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "10M+", label: "Leads Generated" },
                { value: "5x", label: "Average ROI" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </MainShell>
      </section>

      <QuotationModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </>
  )
}
