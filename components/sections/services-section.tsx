"use client"

import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { Code, Search, BarChart3, Megaphone, Palette, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for performance and scalability.",
    href: "/web-development",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that improve your search rankings and drive organic traffic.",
    href: "/seo",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    description: "Strategic PPC campaigns that maximize your advertising ROI and generate qualified leads.",
    href: "/google-ads",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "Targeted social media advertising on Facebook and Instagram to reach your ideal customers.",
    href: "/meta-ads",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Compelling brand identities that differentiate your business and resonate with your audience.",
    href: "/branding",
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Expert digital marketing consultation to help you develop and execute winning strategies.",
    href: "/consulting",
  },
]

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title="Everything You Need to Grow Online"
      description="From strategy to execution, we provide comprehensive digital marketing solutions tailored to your business goals."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
