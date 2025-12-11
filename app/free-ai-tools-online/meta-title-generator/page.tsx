"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, FileSearch, ListTree, ArrowRight, Lightbulb, Check } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolPanel } from "@/components/ui/ai-tool-panel"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { CodeBox } from "@/components/ui/code-box"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "bold", label: "Bold" },
  { value: "urgent", label: "Urgent" },
  { value: "informative", label: "Informative" },
]

const exampleTitles = [
  "Best SEO Services in London | Grow Organic Traffic | Linkedo",
  "London SEO Agency - Proven Results, Transparent Pricing",
  "Top-Rated SEO Experts in London | Free Audit | Linkedo Agency",
  "SEO Services London: Boost Rankings & Drive Leads",
]

const relatedTools = [
  {
    icon: FileSearch,
    title: "Meta Description Generator",
    description: "Create compelling meta descriptions that boost CTR.",
    href: "/free-ai-tools-online/meta-description-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    icon: ListTree,
    title: "Blog Outline Generator",
    description: "Structure your content for maximum engagement.",
    href: "/free-ai-tools-online/blog-outline-generator",
    categories: [
      { label: "Content", variant: "default" as const },
      { label: "SEO", variant: "primary" as const },
    ],
  },
]

const bestPractices = [
  "Keep titles between 50-60 characters to avoid truncation",
  "Include your primary keyword near the beginning",
  "Add your brand name at the end for recognition",
  "Use power words to create emotional appeal",
  "Make each title unique across your site",
  "Include numbers or dates when relevant",
]

export default function MetaTitleGeneratorPage() {
  const [keyword, setKeyword] = useState("")
  const [brand, setBrand] = useState("")
  const [tone, setTone] = useState("professional")
  const [results, setResults] = useState<string[]>([])

  const handleGenerate = () => {
    // Mock generation - in real app, this would call an AI API
    const mockResults = [
      `${keyword} | Expert Solutions | ${brand || "Your Brand"}`,
      `Best ${keyword} Services - Proven Results | ${brand || "Your Brand"}`,
      `${keyword}: Complete Guide & Tips | ${brand || "Your Brand"}`,
      `Top-Rated ${keyword} Solutions | Free Quote | ${brand || "Your Brand"}`,
      `${keyword} Made Simple - Get Started Today | ${brand || "Your Brand"}`,
    ]
    setResults(keyword ? mockResults : [])
  }

  const handleClear = () => {
    setKeyword("")
    setBrand("")
    setTone("professional")
    setResults([])
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <ParticleBackground className="opacity-40" />

        <MainShell className="relative z-10">
          <Breadcrumbs
            items={[{ label: "Free AI Tools", href: "/free-ai-tools-online" }, { label: "Meta Title Generator" }]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free Meta Title <span className="text-gradient-primary">Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate SEO-optimized meta titles that improve click-through rates. Follow best practices for length,
              keywords, and click appeal.
            </p>
          </div>
        </MainShell>
      </section>

      {/* Tool Panel */}
      <Section className="pt-8">
        <AIToolPanel results={results} onRegenerate={handleGenerate} onClear={handleClear}>
          <div className="space-y-5">
            <FormInput
              label="Page Topic / Main Keyword"
              placeholder="e.g., SEO Services London"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <FormInput
              label="Brand Name (optional)"
              placeholder="e.g., Linkedo Agency"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <FormSelect label="Tone" options={toneOptions} value={tone} onChange={(e) => setTone(e.target.value)} />
            <AnimatedButton onClick={handleGenerate} className="w-full mt-2">
              Generate Titles
            </AnimatedButton>
          </div>
        </AIToolPanel>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="How to Write Great Meta Titles"
        description="Follow these guidelines to create meta titles that rank and convert."
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Example Titles</h3>
            </div>
            {exampleTitles.map((title, index) => (
              <CodeBox key={index} label={`Example ${index + 1}`}>
                {title}
              </CodeBox>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Continue Optimizing" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need a Full SEO Strategy?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Meta titles are just the beginning. Get a comprehensive SEO audit and strategy from our experts.
          </p>
          <Link href="/services/seo">
            <AnimatedButton size="lg">
              <span>Explore SEO Services</span>
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>
    </main>
  )
}
