"use client"

import { useState } from "react"
import Link from "next/link"
import { Link2, Megaphone, FileText, ArrowRight, Check, Copy, Lightbulb } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { motion } from "framer-motion"

const sourceOptions = [
  { value: "google", label: "Google" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter", label: "Twitter" },
  { value: "email", label: "Email" },
  { value: "newsletter", label: "Newsletter" },
  { value: "other", label: "Other" },
]

const mediumOptions = [
  { value: "cpc", label: "CPC (Paid Search)" },
  { value: "social", label: "Social" },
  { value: "email", label: "Email" },
  { value: "referral", label: "Referral" },
  { value: "display", label: "Display" },
  { value: "affiliate", label: "Affiliate" },
  { value: "organic", label: "Organic" },
]

const relatedTools = [
  {
    icon: Megaphone,
    title: "Google Ads Headline Generator",
    description: "Create high-converting ad headlines.",
    href: "/free-ai-tools-online",
    categories: [
      { label: "Ads", variant: "accent" as const },
      { label: "PPC", variant: "default" as const },
    ],
  },
  {
    icon: FileText,
    title: "Meta Title Generator",
    description: "Generate SEO-optimized page titles.",
    href: "/meta-title-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
]

const bestPractices = [
  "Use lowercase letters to avoid duplicate tracking",
  "Replace spaces with hyphens or underscores",
  "Keep parameters descriptive but concise",
  "Be consistent with naming conventions",
  "Document your UTM strategy for team alignment",
  "Test your links before launching campaigns",
]

export default function UTMBuilderPage() {
  const [url, setUrl] = useState("")
  const [source, setSource] = useState("google")
  const [medium, setMedium] = useState("cpc")
  const [campaign, setCampaign] = useState("")
  const [term, setTerm] = useState("")
  const [content, setContent] = useState("")
  const [copied, setCopied] = useState(false)

  const generateUTM = () => {
    if (!url) return ""
    const params = new URLSearchParams()
    if (source) params.set("utm_source", source.toLowerCase())
    if (medium) params.set("utm_medium", medium.toLowerCase())
    if (campaign) params.set("utm_campaign", campaign.toLowerCase().replace(/\s+/g, "-"))
    if (term) params.set("utm_term", term.toLowerCase().replace(/\s+/g, "-"))
    if (content) params.set("utm_content", content.toLowerCase().replace(/\s+/g, "-"))

    const separator = url.includes("?") ? "&" : "?"
    return `${url}${separator}${params.toString()}`
  }

  const handleCopy = async () => {
    const utmUrl = generateUTM()
    if (utmUrl) {
      await navigator.clipboard.writeText(utmUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleClear = () => {
    setUrl("")
    setSource("google")
    setMedium("cpc")
    setCampaign("")
    setTerm("")
    setContent("")
  }

  const utmUrl = generateUTM()

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-40" />

        <MainShell className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free UTM <span className="text-gradient-primary">Builder</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Build properly formatted UTM parameters to track your marketing campaigns accurately in Google Analytics.
            </p>
          </div>
        </MainShell>
      </section>

      {/* Tool Panel */}
      <Section className="pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden bg-card/60 backdrop-blur-xl"
        >
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-2xl">
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/40 via-cyan-400/40 to-primary/40" />
            <div className="absolute inset-[1px] rounded-xl bg-card" />
          </div>

          <div className="relative z-10 p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Side */}
              <div className="space-y-5">
                <FormInput
                  label="Website URL *"
                  placeholder="https://linkedo.co.uk/seo"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormSelect
                    label="Campaign Source *"
                    options={sourceOptions}
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                  <FormSelect
                    label="Campaign Medium *"
                    options={mediumOptions}
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  />
                </div>
                <FormInput
                  label="Campaign Name *"
                  placeholder="e.g., spring-sale-2024"
                  value={campaign}
                  onChange={(e) => setCampaign(e.target.value)}
                />
                <FormInput
                  label="Campaign Term (optional)"
                  placeholder="e.g., seo-services"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <FormInput
                  label="Campaign Content (optional)"
                  placeholder="e.g., banner-ad-1"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* Output Side */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4">Generated URL</h3>
                <div className="flex-grow p-4 rounded-lg bg-background/50 border border-border/50 mb-4 overflow-hidden">
                  {utmUrl ? (
                    <code className="text-sm font-mono text-primary break-all">{utmUrl}</code>
                  ) : (
                    <p className="text-muted-foreground text-sm">Enter a URL to generate your UTM link</p>
                  )}
                </div>
                <div className="flex gap-3">
                  <AnimatedButton onClick={handleCopy} disabled={!utmUrl} className="flex-1">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied!" : "Copy URL"}</span>
                  </AnimatedButton>
                  <AnimatedButton variant="secondary" onClick={handleClear}>
                    Clear
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="UTM Parameter Guidelines"
        description="Follow these rules for accurate campaign tracking."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-muted-foreground">{practice}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Parameter Reference</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-mono text-primary">utm_source</span>
                <span className="text-muted-foreground"> - Where traffic comes from (google, facebook)</span>
              </div>
              <div>
                <span className="font-mono text-primary">utm_medium</span>
                <span className="text-muted-foreground"> - Marketing medium (cpc, email, social)</span>
              </div>
              <div>
                <span className="font-mono text-primary">utm_campaign</span>
                <span className="text-muted-foreground"> - Campaign identifier (spring-sale)</span>
              </div>
              <div>
                <span className="font-mono text-primary">utm_term</span>
                <span className="text-muted-foreground"> - Paid keywords (optional)</span>
              </div>
              <div>
                <span className="font-mono text-primary">utm_content</span>
                <span className="text-muted-foreground"> - Ad/link variant (optional)</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="More Marketing Tools" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Help With Campaign Tracking?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let our analytics experts set up comprehensive tracking for all your marketing campaigns.
          </p>
            <Link href="/google-ads">
            <AnimatedButton size="lg">
              <span>Explore Ads Services</span>
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>
    </main>
  )
}
