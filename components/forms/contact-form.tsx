"use client"

import type React from "react"

import { useState } from "react"
import { FormCard } from "@/components/ui/form-card"
import { FormInput } from "@/components/ui/form-input"
import { FormTextarea } from "@/components/ui/form-textarea"
import { FormSelect } from "@/components/ui/form-select"
import { FormCheckbox } from "@/components/ui/form-checkbox"
import { AnimatedButton } from "@/components/ui/animated-button"

const budgetOptions = [
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
]

const services = [
  { id: "web", label: "Web Development" },
  { id: "seo", label: "SEO Optimization" },
  { id: "google-ads", label: "Google Ads" },
  { id: "meta-ads", label: "Meta Ads" },
  { id: "branding", label: "Branding" },
  { id: "consulting", label: "Consulting" },
]

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
  }

  return (
    <FormCard title="Get in Touch" description="Tell us about your project and we'll get back to you within 24 hours.">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput label="Name" placeholder="John Doe" required />
          <FormInput label="Email" type="email" placeholder="john@company.com" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
          <FormInput label="Company" placeholder="Acme Inc." />
        </div>

        <FormSelect label="Budget Range" placeholder="Select your budget" options={budgetOptions} />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Services Interested In</label>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <FormCheckbox key={service.id} label={service.label} name="services" value={service.id} />
            ))}
          </div>
        </div>

        <FormTextarea label="Message" placeholder="Tell us about your project goals and requirements..." rows={4} />

        <AnimatedButton type="submit" loading={loading} className="w-full">
          Send Message
        </AnimatedButton>
      </form>
    </FormCard>
  )
}
