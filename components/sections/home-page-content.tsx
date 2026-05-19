"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

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
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { MainShell } from "@/components/layout/main-shell"

const caseStudies = [
  {
    title: "300% Increase in Organic Traffic",
    client: "TechFlow SaaS",
    description:
      "Helping a UK-based SaaS company triple organic traffic and improve lead generation through advanced SEO and content marketing strategies.",
    image: "/saas-dashboard-analytics-dark-theme.jpg",
    tags: ["SEO", "Content Marketing"],
    href: "/case-studies/techflow",
  },
  {
    title: "5x ROAS on Google Ads",
    client: "Manufacturing Co.",
    description:
      "Launching high-converting Google Ads campaigns that helped a manufacturing business expand into competitive UK markets with profitable ROI.",
    image: "/manufacturing-industrial-modern.jpg",
    tags: ["Google Ads", "Lead Generation"],
    href: "/case-studies/manufacturing-co",
  },
  {
    title: "Complete Digital Transformation",
    client: "Legal Partners LLP",
    description:
      "Redesigning a law firm's digital presence with SEO, web development, and paid advertising to generate 200+ qualified leads every month.",
    image: "/legal-office-professional-modern.jpg",
    tags: ["Web Development", "SEO", "Paid Ads"],
    href: "/case-studies/legal-partners",
  },
]

const processSteps = [
  {
    iconName: "FileSearch",
    title: "Discovery & Research",
    description:
      "We analyse your business, competitors, industry trends, and target audience to create a strong foundation for long-term digital success.",
  },
  {
    iconName: "PenTool",
    title: "Strategy & Planning",
    description:
      "Our team develops a customised SEO and digital marketing strategy with clear goals, KPIs, timelines, and scalable growth opportunities.",
  },
  {
    iconName: "Rocket",
    title: "Campaign Execution",
    description:
      "We launch and manage your SEO, web development, Google Ads, and social media campaigns with precision and performance tracking.",
  },
  {
    iconName: "TrendingUp",
    title: "Optimisation & Growth",
    description:
      "Through continuous monitoring, testing, and data analysis, we optimise campaigns to improve conversions, ROI, and overall business performance.",
  },
]

const aiTools = [
  {
    iconName: "Search",
    title: "AI Meta Title Generator",
    description:
      "Generate SEO-optimised meta titles designed to improve rankings and increase click-through rates on Google.",
    href: "/meta-title-generator",
    badge: "Free",
  },
  {
    iconName: "FileText",
    title: "AI Meta Description Generator",
    description:
      "Create compelling meta descriptions that attract more clicks and improve your website visibility in search results.",
    href: "/meta-description-generator",
    badge: "Free",
  },
  {
    iconName: "BarChart3",
    title: "AI Blog Outline Generator",
    description:
      "Build structured blog outlines designed for SEO, user intent, and higher engagement across search engines.",
    href: "/blog-outline-generator",
    badge: "Free",
  },
]

const blogPosts = [
  {
    title: "Best B2B SEO Strategies for UK Businesses in 2026",
    description:
      "Learn how modern SEO strategies help UK businesses increase rankings, traffic, and qualified lead generation.",
    category: "SEO",
    href: "/blog/b2b-seo-guide-2024",
  },
  {
    title: "How to Reduce Google Ads Cost Per Lead Without Losing Conversions",
    description:
      "Discover proven Google Ads optimisation techniques that improve campaign performance and lower acquisition costs.",
    category: "Ads",
    href: "/blog/reduce-google-ads-cpl",
  },
  {
    title: "Website Speed Optimisation Checklist for Better SEO & User Experience",
    description:
      "Improve website performance, search rankings, and conversion rates with this complete website speed optimisation guide.",
    category: "Development",
    href: "/blog/website-speed-optimization",
  },
]

const faqs = [
  {
    question: "What digital marketing services does Linkedo offer?",
    answer:
      "Linkedo offers SEO, Google Ads management, Meta Ads, web development, branding, and digital marketing consulting — all focused on driving leads, sales, and long-term ROI for UK businesses.",
  },
  {
    question: "Does Linkedo work with both B2B and B2C businesses?",
    answer:
      "Yes. Linkedo works with both B2B and B2C companies across the UK, tailoring strategies to match each business model, target audience, and growth objective.",
  },
  {
    question: "Which areas of the UK does Linkedo serve?",
    answer:
      "Linkedo serves businesses across the entire United Kingdom, including London, Manchester, Birmingham, Leeds, Liverpool, Glasgow, and surrounding regions.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing measurable improvements in rankings and organic traffic within 3 to 6 months, depending on competition, website authority, and strategy execution.",
  },
  {
    question: "Can Linkedo manage my Google Ads campaigns?",
    answer:
      "Yes. Linkedo builds and manages strategic Google Ads campaigns focused on maximising conversions, reducing cost per acquisition, and delivering a strong return on investment.",
  },
  {
    question: "What makes Linkedo different from other UK digital marketing agencies?",
    answer:
      "Linkedo combines data-driven strategy, performance tracking, and tailored execution across SEO, paid ads, and web development — with a clear focus on measurable business growth rather than vanity metrics.",
  },
  {
    question: "Does Linkedo build websites as well as run marketing campaigns?",
    answer:
      "Yes. Linkedo offers custom web development services, building fast, SEO-optimised websites designed for user experience, lead generation, and long-term business growth.",
  },
  {
    question: "How does Linkedo's process work?",
    answer:
      "Linkedo follows a four-step process: Discovery & Research, Strategy & Planning, Campaign Execution, and Optimisation & Growth — ensuring every campaign is built on solid data and continuously improved.",
  },
  {
    question: "Are there any free tools available on the Linkedo website?",
    answer:
      "Yes. Linkedo offers free AI-powered marketing tools including an AI Meta Title Generator, AI Meta Description Generator, and AI Blog Outline Generator to help businesses improve their SEO quickly.",
  },
  {
    question: "How do I get started with Linkedo?",
    answer:
      "You can get started by reaching out through the Linkedo website to book a consultation. The team will analyse your business, discuss your goals, and recommend a customised digital marketing strategy.",
  },
]

export function HomePageContent() {
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
          title="How We Generate Consistent Results"
          description="A proven digital marketing process built to help UK businesses increase visibility, generate qualified leads, and achieve sustainable online growth."
        >
          <ProcessTimeline steps={processSteps} />
        </Section>

        {/* Locations Section */}
        <Section
          eyebrow="Where We Operate"
          title="UK-Wide Digital Marketing Services"
          description="Linkedo provides SEO, web design, Google Ads, and digital marketing services for businesses across the United Kingdom."
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            <LocationCard
              city="London"
              country="United Kingdom"
              flag="🇬🇧"
              href="/london"
              description="Serving businesses across London, Manchester, Birmingham, Leeds, Liverpool, Glasgow, and surrounding UK regions with performance-focused digital marketing solutions."
            />
          </div>
        </Section>

        {/* AI Tools Teaser */}
        <Section
          eyebrow="Free AI Marketing Tools"
          title="Smart AI Tools for Faster Marketing Growth"
          description="Use our free AI-powered SEO and digital marketing tools to generate content ideas, improve search visibility, and optimise your website performance instantly."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiTools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/free-ai-tools-online">
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
          title="Real Results for UK Businesses"
          description="Discover how Linkedo helps B2B and B2C companies across the UK increase traffic, generate leads, and scale revenue through strategic digital marketing."
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
        <Section
          eyebrow="From Our Blog"
          title="Latest SEO & Digital Marketing Insights"
          description="Explore expert insights, SEO strategies, Google Ads tips, and web development guides designed to help UK businesses grow online."
        >
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
                  className="block h-full p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <span className="text-xs text-primary uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
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

        {/* FAQ Section */}
        <Section
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Answers to common questions about Linkedo's digital marketing services for UK businesses."
        >
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* Final CTA Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
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
                Ready to Grow Your UK Business Online?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Book a free strategy call with our experts and discover how Linkedo can help you generate leads, sales,
                and long-term ROI.
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
