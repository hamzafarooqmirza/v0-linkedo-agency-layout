"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ContactForm } from "@/components/forms/contact-form"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-card/95 backdrop-blur-xl border-border/50 p-0 overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        <DialogHeader className="sr-only">
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form to get in touch with our team.</DialogDescription>
        </DialogHeader>
        <div className="p-6 overflow-y-auto">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
