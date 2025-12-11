"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { StatCard } from "@/components/ui/stat-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Chip } from "@/components/ui/chip"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const challenges = [
  {
    title: "High Competition",
    description: "London's market is saturated. Stand out from thousands of competitors in your industry.",
  },
  {
    title: "Local vs National",
    description: "Balance local London visibility with national UK reach for maximum impact.",
  },
  {
    title: "Multi-Location Targeting",
    description: "Reach customers across different London boroughs and surrounding areas.",
  },
  {
    title: "Trust Building",
    description: "Establish credibility with London's discerning B2B buyers and decision-makers.",
  },
]

const localSeoServices = [
  {
    iconName: "MapPin",
    title: "Google Business Profile",
    description: "Optimize your GBP listing for London-specific searches and local pack rankings.",
    href: "#",
  },
  {
    iconName: "Building2",
    title: "Local Citations",
    description: "Build consistent NAP citations across UK directories and London business listings.",
    href: "#",
  },
  {
    iconName: "FileText",
    title: "London-Focused Content",
    description: "Create location-specific content that resonates with London audiences.",
    href: "#",
  },
  {
    iconName: "Star",
    title: "Review Management",
    description: "Build and manage reviews on Google, Trustpilot, and industry-specific platforms.",
    href: "#",
  },
]

const processSteps = [
  {
    iconName: "FileSearch",
    title: "London Market Analysis",
    description: "Analyze your local competition and identify London-specific keyword opportunities.",
  },
  {
    iconName: "PenTool",
    title: "Local Strategy",
    description: "Develop a customized SEO plan targeting London boroughs and surrounding areas.",
  },
  {
    iconName: "Rocket",
    title: "Implementation",
    description: "Optimize your Google Business Profile, local citations, and on-page SEO.",
  },
  {
    iconName: "TrendingUp",
    title: "Track & Refine",
    description: "Monitor local rankings and continuously improve your London visibility.",
  },
]

const faqs = [
  {
    question: "How is London SEO different from general SEO?",
    answer:
      "London SEO focuses on local search optimization, including Google Business Profile management, local keyword targeting (e.g., 'digital agency London'), and building citations in UK-specific directories. It also requires understanding London's competitive landscape and buyer behavior.",
  },
  {
    question: "Which London areas can you target?",
    answer:
      "We can target any London borough or area, including Central London, City of London, Westminster, Camden, Islington, Shoreditch, Canary Wharf, and all surrounding areas. We can also target specific postcodes if needed.",
  },
  {
    question: "How long until I see local ranking improvements?",
    answer:
      "Local SEO typically shows faster results than traditional SEO. You can expect to see improvements in Google Maps and local pack rankings within 2-3 months, with more significant gains in 4-6 months.",
  },
  {
    question: "Do you help with Google Business Profile management?",
    answer:
      "Yes! GBP optimization is a core part of our London SEO service. We handle profile setup and optimization, regular posts, Q&A management, review response, and photo optimization.",
  },
]

export default function LondonSEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-8">
          <Breadcrumbs items={[{ label: "London", href: "/uk/london" }, { label: "SEO" }]} />
          <div className="max-w-4xl mt-8">
            <Chip variant="primary" className="mb-4">
              <MapPin className="w-3 h-3 mr-1" />
              London, UK
            </Chip>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              SEO Services in <span className="text-gradient-primary">London</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Dominate London search results with our local SEO expertise. We help businesses rank higher in Google Maps
              and organic search across all London boroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Get a Free London SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/case-studies">
                <AnimatedButton variant="secondary" size="lg">
                  View London Results
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* Challenges */}
        <Section eyebrow="London Challenges" title="Problems We Solve for London Businesses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Local SEO Services */}
        <Section
          eyebrow="Local SEO"
          title="London-Focused SEO Services"
          description="Specialized strategies for ranking in London's competitive market."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localSeoServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section eyebrow="Results" title="What London Clients Achieve">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="Top 3" label="Google Maps Rankings" />
            <StatCard value="250" suffix="%" label="Local Traffic Increase" />
            <StatCard value="40" suffix="+" label="London Keywords Page 1" />
            <StatCard value="3x" label="Local Lead Generation" />
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="Our Approach"
          title="How We Dominate London Search"
          description="A tailored process for London's unique market."
        >
          <ProcessTimeline steps={processSteps} />
        </Section>

        {/* FAQ */}
        <Section eyebrow="FAQ" title="London SEO Questions">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Dominate London Search?</h2>
            <p className="text-muted-foreground mb-8">
              Get a free SEO audit and discover how to outrank your London competitors.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                Get Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
