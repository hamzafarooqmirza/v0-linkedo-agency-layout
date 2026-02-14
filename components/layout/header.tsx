"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { MainShell } from "./main-shell"
import { Button } from "@/components/ui/button"
import { WebsiteAuditModal } from "@/components/ui/website-audit-modal"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/free-ai-tools-online", label: "Free AI Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
      document.body.style.paddingRight = "0px"
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isMobileMenuOpen])

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent",
        )}
      >
        <MainShell>
          <nav className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedo%20Logo-2ktZ7qcYVdGvooWw3nwry3bnN2kV5C.png"
                alt="Linkedo - Connect, Grow, Succeed"
                className="h-8 sm:h-10 lg:h-12 w-auto transition-opacity group-hover:opacity-80"
              />
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
              <Button
                onClick={() => setIsAuditModalOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-medium px-6 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <span className="relative z-10">Free Website Audit</span>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-foreground relative z-[110] hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </MainShell>
      </header>

      {isMounted &&
        createPortal(
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <>
                {/* Backdrop with blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="fixed inset-0 bg-background/95 backdrop-blur-2xl lg:hidden z-[105]"
                  onClick={handleLinkClick}
                />

                {/* Menu content */}
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                    mass: 0.8,
                    opacity: { duration: 0.2 },
                  }}
                  className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-card/95 via-card/90 to-background/95 backdrop-blur-2xl lg:hidden z-[105] border-l border-border/50 shadow-2xl"
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
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="flex items-center gap-2 mb-2"
                      >
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">Navigation</span>
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
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
                          transition={{
                            delay: 0.1 + index * 0.04,
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={handleLinkClick}
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
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="mt-8 pt-6 border-t border-border/50"
                    >
                      <Button
                        onClick={() => {
                          setIsAuditModalOpen(true)
                          handleLinkClick()
                        }}
                        className="w-full relative overflow-hidden bg-gradient-to-r from-primary via-cyan-400 to-primary text-primary-foreground font-semibold py-6 rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 bg-[length:200%] hover:bg-right group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Free Website Audit
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>

                      <p className="text-center text-sm text-muted-foreground mt-4">Get your free website analysis</p>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}

      {/* Website Audit Modal */}
      <WebsiteAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </>
  )
}
