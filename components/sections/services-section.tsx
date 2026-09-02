"use client"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    iconName: "Code",
    title: "Web Development",
    description:
      "Custom websites and high-performing web applications designed for speed, SEO, user experience, and long-term business growth.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description:
      "Results-driven SEO services that improve Google rankings, increase organic traffic, and generate qualified leads for your business.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description:
      "Strategic Google Ads campaigns built to maximise conversions, lower acquisition costs, and deliver measurable return on investment.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram advertising campaigns designed to increase brand awareness, engagement, and online sales.",
    href: "/meta-ads",
  },
  {
    iconName: "Palette",
    title: "Branding",
    description:
      "Professional branding solutions that help businesses build trust, stand out in competitive markets, and create lasting impressions.",
    href: "/branding",
  },
  {
    iconName: "MessageSquare",
    title: "Digital Marketing Consulting",
    description:
      "Expert digital marketing consultation to help you plan scalable growth strategies backed by real market data and analytics.",
    href: "/consulting",
  },
]

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title="Everything Your Business Needs to Grow Online"
      description="From SEO and paid advertising to web development and branding, Linkedo delivers performance-focused digital marketing services for B2B and B2C businesses across the UK."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
