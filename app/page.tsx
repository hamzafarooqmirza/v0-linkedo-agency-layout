"use client"

import { useState } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { Section } from "@/components/ui/section"
import { StatCard } from "@/components/ui/stat-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { ToolCard } from "@/components/ui/tool-card"
import { LocationCard } from "@/components/ui/location-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { ContactModal } from "@/components/ui/contact-modal"
import { AnimatedButton } from "@/components/ui/animated-button"
import { MainShell } from "@/components/layout/main-shell"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

const caseStudies = [
  {
    title: "300% Increase in Organic Traffic",
    client: "TechFlow SaaS",
    description: "How we helped a B2B SaaS company triple their organic traffic in 6 months through strategic SEO.",
    image: "/saas-dashboard-analytics-dark-theme.jpg",
    tags: ["SEO", "Content Marketing"],
    href: "/case-studies/techflow",
  },
  {
    title: "5x ROAS on Google Ads",
    client: "Manufacturing Co.",
    description: "Achieving exceptional return on ad spend for a manufacturing company entering new markets.",
    image: "/manufacturing-industrial-modern.jpg",
    tags: ["Google Ads", "Lead Generation"],
    href: "/case-studies/manufacturing-co",
  },
  {
    title: "Complete Digital Transformation",
    client: "Legal Partners LLP",
    description: "Redesigning the digital presence of a law firm to generate 200+ qualified leads monthly.",
    image: "/legal-office-professional-modern.jpg",
    tags: ["Web Development", "SEO", "Ads"],
    href: "/case-studies/legal-partners",
  },
]

const processSteps = [
  {
    iconName: "FileSearch",
    title: "Discovery",
    description: "We analyze your business, competitors, and target market to build a solid strategy foundation.",
  },
  {
    iconName: "PenTool",
    title: "Strategy",
    description: "Custom roadmap with clear milestones, KPIs, and timelines tailored to your goals.",
  },
  {
    iconName: "Rocket",
    title: "Execution",
    description: "Our team implements the strategy with precision, keeping you informed every step of the way.",
  },
  {
    iconName: "TrendingUp",
    title: "Optimization",
    description: "Continuous monitoring and optimization to maximize results and ROI over time.",
  },
]

const aiTools = [
  {
    iconName: "Search",
    title: "SEO Analyzer",
    description: "Get a comprehensive SEO audit of your website in seconds.",
    href: "/tools/seo-analyzer",
    badge: "Free",
  },
  {
    iconName: "FileText",
    title: "Meta Tag Generator",
    description: "Generate optimized meta titles and descriptions for any page.",
    href: "/tools/meta-generator",
    badge: "Free",
  },
  {
    iconName: "BarChart3",
    title: "Keyword Research Tool",
    description: "Discover high-value keywords for your content strategy.",
    href: "/tools/keyword-research",
    badge: "Free",
  },
]

const blogPosts = [
  {
    title: "The Ultimate Guide to B2B SEO in 2024",
    category: "SEO",
    href: "/blog/b2b-seo-guide-2024",
  },
  {
    title: "How to Reduce Google Ads Cost Per Lead by 50%",
    category: "Ads",
    href: "/blog/reduce-google-ads-cpl",
  },
  {
    title: "Website Speed Optimization Checklist",
    category: "Development",
    href: "/blog/website-speed-optimization",
  },
]

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection onBookCall={() => setIsModalOpen(true)} />

        <ServicesSection />

        {/* Stats Section */}
        <Section gradient>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="150" suffix="+" label="Projects Completed" />
            <StatCard value="98" suffix="%" label="Client Retention" />
            <StatCard value="$50M" suffix="+" label="Revenue Generated" />
            <StatCard value="15" suffix="+" label="Industry Awards" />
          </div>
        </Section>

        {/* Process Section */}
        <Section
          eyebrow="Our Process"
          title="How We Drive Results"
          description="A proven methodology refined over hundreds of successful projects."
        >
          <ProcessTimeline steps={processSteps} />
        </Section>

        {/* Locations Section */}
        <Section
          eyebrow="Where We Operate"
          title="Global Reach, Local Expertise"
          description="Serving clients worldwide from our offices in the UK and Pakistan."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <LocationCard
              city="London"
              country="United Kingdom"
              flag="🇬🇧"
              href="/uk/london"
              description="Our UK headquarters, serving European and North American clients."
            />
            <LocationCard
              city="Mirpur"
              country="AJK, Pakistan"
              flag="🇵🇰"
              href="/pk/mirpur"
              description="Our development and operations hub with 24/7 support capability."
            />
          </div>
        </Section>

        {/* AI Tools Teaser */}
        <Section
          eyebrow="Free AI Tools"
          title="Power Up Your Marketing"
          description="Try our free AI-powered tools to get instant insights for your business."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiTools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tools">
              <AnimatedButton variant="secondary">
                View All Tools
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        {/* Case Studies */}
        <Section
          eyebrow="Case Studies"
          title="Real Results for Real Businesses"
          description="See how we've helped companies like yours achieve their growth goals."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies">
              <AnimatedButton variant="secondary">
                View All Case Studies
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        {/* Mini Blog Strip */}
        <Section eyebrow="From Our Blog" title="Latest Insights">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={post.href}
                  className="block p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xs text-primary uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog">
              <AnimatedButton variant="ghost">
                Read More Articles
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>

        {/* Final CTA Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-cyan-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

          <MainShell className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Book a free strategy call with our experts and discover how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton size="lg" onClick={() => setIsModalOpen(true)}>
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
                <Link href="/contact">
                  <AnimatedButton variant="secondary" size="lg">
                    Contact Us
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </MainShell>
        </section>
      </main>
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
