"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Send } from "lucide-react"
import { FormInput } from "@/components/ui/form-input"
import { AnimatedButton } from "@/components/ui/animated-button"

interface WebsiteAuditModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WebsiteAuditModal({ isOpen, onClose }: WebsiteAuditModalProps) {
  const [loading, setLoading] = useState(false)
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!websiteUrl) {
      setError("Please enter your website URL")
      return
    }

    if (!name || !email) {
      setError("Please fill in all fields")
      return
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)

    // Create WhatsApp message
    const message = encodeURIComponent(
      `🌐 *Free Website Audit Request*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `🔗 *Website:* ${websiteUrl}\n\n` +
        `_Sent from Linkedo Website_`
    )

    const whatsappNumber = "923175980459"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    // Reset form after short delay
    setTimeout(() => {
      setLoading(false)
      setWebsiteUrl("")
      setName("")
      setEmail("")
      onClose()
    }, 1000)
  }

  if (!isOpen) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[200]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[201]"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl mx-4">
              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-border">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Free Website Audit</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get a comprehensive analysis of your website's performance, SEO, and conversion potential.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <FormInput
                  label="Website URL"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  required
                />
                <FormInput
                  label="Your Name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive"
                  >
                    {error}
                  </motion.div>
                )}

                <AnimatedButton type="submit" loading={loading} className="w-full">
                  <Send className="w-4 h-4" />
                  Request Free Audit
                </AnimatedButton>

                <p className="text-xs text-muted-foreground text-center">
                  We'll review your website and send you a detailed audit report within 24-48 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
