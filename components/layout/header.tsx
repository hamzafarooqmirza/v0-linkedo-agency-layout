"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { MainShell } from "./main-shell"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/free-ai-tools-online", label: "Free AI Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent",
      )}
    >
      <MainShell>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-foreground">Linkedo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button className="relative overflow-hidden bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-medium px-6 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <span className="relative z-10">Book a Call</span>
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </nav>
      </MainShell>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-2xl lg:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-card/95 via-card/90 to-background/95 backdrop-blur-2xl lg:hidden z-40 border-l border-border/50 shadow-2xl"
            >
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
                {/* Menu Header */}
                <div className="mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Navigation</span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl font-bold text-foreground"
                  >
                    Explore Linkedo
                  </motion.h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between px-5 py-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                      >
                        <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-border/50"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full relative overflow-hidden bg-gradient-to-r from-primary via-cyan-400 to-primary text-primary-foreground font-semibold py-6 rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 bg-[length:200%] hover:bg-right group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Book a Call
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>

                  <p className="text-center text-sm text-muted-foreground mt-4">Ready to grow your business?</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
