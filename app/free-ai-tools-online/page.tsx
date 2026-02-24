import type { Metadata } from "next"
import Link from "next/link"
import { FileSearch, Megaphone, ArrowRight } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"

export const metadata: Metadata = {
  title: "Free AI Tools Online | Linkedo Agency",
  description:
    "Free AI-powered tools for SEOs, marketers, and business owners. Generate meta titles, descriptions, blog outlines, UTM links, and more.",
}

const tools = [
  {
    iconName: "FileText",
    title: "Meta Title Generator",
    description: "Generate compelling, SEO-optimized meta titles that improve click-through rates and rankings.",
    href: "/meta-title-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    iconName: "FileSearch",
    title: "Meta Description Generator",
    description: "Create persuasive meta descriptions that entice users to click through from search results.",
    href: "/meta-description-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    iconName: "ListTree",
    title: "Blog Outline Generator",
    description: "Structure your blog posts with AI-generated outlines optimized for readability and SEO.",
    href: "/blog-outline-generator",
    categories: [
      { label: "Content", variant: "default" as const },
      { label: "SEO", variant: "primary" as const },
    ],
  },
  {
    iconName: "MapPin",
    title: "Local Landing Page Outline",
    description: "Generate optimized outlines for local landing pages that rank in geo-specific searches.",
    href: "/free-ai-tools-online/local-landing-page-outline-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Local", variant: "accent" as const },
    ],
  },
  {
    iconName: "Megaphone",
    title: "Google Ads Headline Generator",
    description: "Create high-converting Google Ads headlines that maximize your ad performance.",
    href: "/free-ai-tools-online/google-ads-headline-generator",
    categories: [
      { label: "Ads", variant: "accent" as const },
      { label: "PPC", variant: "default" as const },
    ],
  },
  {
    iconName: "Link2",
    title: "UTM Builder",
    description: "Build properly formatted UTM parameters to track your marketing campaigns accurately.",
    href: "/utm-builder",
    categories: [
      { label: "Analytics", variant: "default" as const },
      { label: "Technical", variant: "primary" as const },
    ],
  },
  {
    iconName: "Bot",
    title: "Robots.txt Generator",
    description: "Generate a properly configured robots.txt file to control how search engines crawl your site.",
    href: "/free-ai-tools-online/robots-txt-generator",
    categories: [
      { label: "Technical", variant: "primary" as const },
      { label: "SEO", variant: "primary" as const },
    ],
  },
  {
    iconName: "FileCode",
    title: "XML Sitemap Generator",
    description: "Create XML sitemaps that help search engines discover and index your pages efficiently.",
    href: "/free-ai-tools-online/xml-sitemap-generator",
    categories: [
      { label: "Technical", variant: "primary" as const },
      { label: "SEO", variant: "primary" as const },
    ],
  },
]

export default function FreeAIToolsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-60" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <MainShell className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Free Tools
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Free AI Tools <span className="text-gradient-primary">Online</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Powerful AI-powered tools built for SEOs, marketers, and business owners. Generate meta tags, content
              outlines, ad copy, and technical files in seconds.
            </p>
          </div>
        </MainShell>
      </section>

      {/* Tools Grid */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* How to Use Section */}
      <Section
        eyebrow="Real World Applications"
        title="How to Use These Tools in Real Campaigns"
        description="These tools integrate seamlessly into your existing marketing workflows."
        gradient
      >
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Link
            href="/seo"
            className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileSearch className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  SEO Campaigns
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Use our meta generators and content tools to optimize your pages for search engines and drive organic
                  traffic.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn about SEO services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/google-ads"
            className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Megaphone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Google Ads Campaigns
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate high-converting ad headlines and track campaigns with UTM parameters for better ROI.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn about Ads services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-cyan-400/5 border border-primary/20 text-center">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Too Busy to Implement?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let Linkedo handle your SEO, ads, and web development while you focus on running your business.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">Get a Free Consultation</AnimatedButton>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
