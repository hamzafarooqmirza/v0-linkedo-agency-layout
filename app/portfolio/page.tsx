"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { ProjectCard } from "@/components/ui/project-card"
import { FilterBar } from "@/components/ui/filter-bar"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const filters = ["All", "Websites", "Web Apps", "SEO", "Ads", "Security"]

const projects = [
  {
    title: "TechFlow SaaS Platform",
    image: "/saas-platform-dashboard-dark.jpg",
    tags: ["Web App", "SEO"],
    href: "/case-studies/techflow",
    category: "Web Apps",
  },
  {
    title: "Legal Partners Website",
    image: "/law-firm-website-professional.png",
    tags: ["Website", "SEO"],
    href: "/case-studies/legal-partners",
    category: "Websites",
  },
  {
    title: "Manufacturing Co. Ads Campaign",
    image: "/manufacturing-google-ads-dashboard.jpg",
    tags: ["Google Ads", "Lead Gen"],
    href: "/case-studies/manufacturing-co",
    category: "Ads",
  },
  {
    title: "FinServ Security Overhaul",
    image: "/cybersecurity-dashboard.png",
    tags: ["Security", "Audit"],
    href: "/case-studies/finserv-security",
    category: "Security",
  },
  {
    title: "E-Commerce Fashion Store",
    image: "/ecommerce-fashion-store-dark.jpg",
    tags: ["Website", "E-Commerce"],
    href: "/case-studies/fashion-store",
    category: "Websites",
  },
  {
    title: "Healthcare Booking App",
    image: "/healthcare-booking-app-mobile.jpg",
    tags: ["Web App", "UX Design"],
    href: "/case-studies/healthcare-app",
    category: "Web Apps",
  },
  {
    title: "B2B SaaS SEO Campaign",
    image: "/seo-analytics-growth-chart.jpg",
    tags: ["SEO", "Content"],
    href: "/case-studies/b2b-seo",
    category: "SEO",
  },
  {
    title: "Real Estate Platform",
    image: "/real-estate-website-listing.jpg",
    tags: ["Website", "Web App"],
    href: "/case-studies/real-estate",
    category: "Web Apps",
  },
  {
    title: "Meta Ads for Retail",
    image: "/facebook-ads-dashboard-ecommerce.jpg",
    tags: ["Meta Ads", "E-Commerce"],
    href: "/case-studies/retail-meta",
    category: "Ads",
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter))

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Work
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Projects That <span className="text-gradient-primary">Drive Results</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of websites, applications, and marketing campaigns that have helped businesses grow.
            </p>
          </div>
        </Section>

        {/* Filter + Grid */}
        <Section>
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            className="justify-center mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        {/* Project Types */}
        <Section eyebrow="What We Build" title="Types of Projects We Deliver" gradient>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Corporate Websites</div>
              <p className="text-muted-foreground">
                Professional websites that establish credibility and generate leads for B2B companies.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Web Applications</div>
              <p className="text-muted-foreground">
                Custom SaaS platforms, dashboards, and internal tools built for scale.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Marketing Campaigns</div>
              <p className="text-muted-foreground">
                SEO, Google Ads, and social media campaigns that deliver measurable ROI.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Want to See Your Project Here?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
