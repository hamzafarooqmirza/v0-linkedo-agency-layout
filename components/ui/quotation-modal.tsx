"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { QuotationForm } from "@/components/forms/quotation-form"

interface QuotationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuotationModal({ open, onOpenChange }: QuotationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-card/95 backdrop-blur-xl border-border/50 p-0 overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">Get Your Custom Quote</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your project and we'll provide a tailored quote within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-4 overflow-y-auto">
          <QuotationForm onClose={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
