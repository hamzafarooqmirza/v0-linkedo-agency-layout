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
  { value: "150-300", label: "£150 – £300" },
  { value: "300-500", label: "£300 – £500" },
  { value: "500-1000", label: "£500 – £1,000" },
  { value: "1000-2000", label: "£1,000 – £2,000" },
  { value: "2000-5000", label: "£2,000 – £5,000" },
  { value: "5000-10000", label: "£5,000 – £10,000" },
  { value: "10000+", label: "£10,000+" },
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

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const budget = formData.get("budget") as string
    const services = formData.getAll("services") as string[]
    const message = formData.get("message") as string

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `📞 *Contact Form Submission*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Phone:* ${phone || "Not provided"}\n` +
        `🏢 *Company:* ${company || "Not provided"}\n` +
        `💰 *Budget:* ${budget || "Not provided"}\n` +
        `🛠️ *Services:* ${services.join(", ") || "Not provided"}\n` +
        `💬 *Message:* ${message || "Not provided"}\n\n` +
        `_Sent from Linkedo Contact Form_`
    )

    const whatsappNumber = "923175980459"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <FormCard title="Get in Touch" description="Tell us about your project and we'll get back to you within 24 hours.">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput label="Name" name="name" placeholder="John Doe" required />
          <FormInput label="Email" name="email" type="email" placeholder="john@company.com" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput label="Phone" name="phone" type="tel" placeholder="+92 317 5980459" />
          <FormInput label="Company" name="company" placeholder="Acme Inc." />
        </div>

        <FormSelect label="Budget Range" name="budget" placeholder="Select your budget" options={budgetOptions} />

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Services Interested In</label>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <FormCheckbox key={service.id} label={service.label} name="services" value={service.id} />
            ))}
          </div>
        </div>

        <FormTextarea label="Message" name="message" placeholder="Tell us about your project goals and requirements..." rows={4} />

        <AnimatedButton type="submit" loading={loading} className="w-full">
          Send Message
        </AnimatedButton>
      </form>
    </FormCard>
  )
}
