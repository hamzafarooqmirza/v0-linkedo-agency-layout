"use client"

import { useState } from "react"
import Link from "next/link"
import { FileSearch, FileText, ListTree, ArrowRight, Lightbulb, Check } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolPanel } from "@/components/ui/ai-tool-panel"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { CodeBox } from "@/components/ui/code-box"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { FormTextarea } from "@/components/ui/form-textarea"

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "persuasive", label: "Persuasive" },
  { value: "informative", label: "Informative" },
]

const exampleDescriptions = [
  "Looking for expert SEO services in London? Linkedo delivers proven results with transparent pricing. Get your free audit today and start ranking higher.",
  "Boost your organic traffic with our award-winning London SEO agency. 10+ years of experience, 500+ happy clients. Request a free consultation now.",
  "Transform your online visibility with professional SEO services. We help London businesses rank higher, drive traffic, and generate more leads.",
]

const relatedTools = [
  {
    icon: FileText,
    title: "Meta Title Generator",
    description: "Create click-worthy meta titles for better rankings.",
    href: "/free-ai-tools-online/meta-title-generator",
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
  "Keep descriptions between 150-160 characters",
  "Include your primary keyword naturally",
  "Add a clear call-to-action",
  "Highlight unique selling points or benefits",
  "Match the search intent of your target audience",
  "Make it compelling enough to click",
]

export default function MetaDescriptionGeneratorPage() {
  const [keyword, setKeyword] = useState("")
  const [pageContent, setPageContent] = useState("")
  const [tone, setTone] = useState("professional")
  const [results, setResults] = useState<string[]>([])

  const handleGenerate = () => {
    const mockResults = [
      `Discover the best ${keyword} solutions. ${pageContent ? pageContent.slice(0, 50) + "..." : "Expert guidance and proven results."} Get started today with a free consultation.`,
      `Looking for ${keyword}? Our experts deliver exceptional results with transparent pricing. 500+ happy clients. Request your free quote now.`,
      `Transform your business with professional ${keyword} services. Proven strategies, measurable results. Book your free consultation today.`,
      `Expert ${keyword} services tailored to your needs. Increase visibility, drive traffic, and grow revenue. Free audit available.`,
    ]
    setResults(keyword ? mockResults : [])
  }

  const handleClear = () => {
    setKeyword("")
    setPageContent("")
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                <FileSearch className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free Meta Description <span className="text-gradient-primary">Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Create persuasive meta descriptions that entice users to click through from search results and improve
              your CTR.
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
            <FormTextarea
              label="Page Content Summary (optional)"
              placeholder="Briefly describe what the page is about..."
              value={pageContent}
              onChange={(e) => setPageContent(e.target.value)}
              rows={3}
            />
            <FormSelect label="Tone" options={toneOptions} value={tone} onChange={(e) => setTone(e.target.value)} />
            <AnimatedButton onClick={handleGenerate} className="w-full mt-2">
              Generate Descriptions
            </AnimatedButton>
          </div>
        </AIToolPanel>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="How to Write Great Meta Descriptions"
        description="Follow these guidelines to create descriptions that drive clicks."
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
              <h3 className="font-semibold text-foreground">Example Descriptions</h3>
            </div>
            {exampleDescriptions.map((desc, index) => (
              <CodeBox key={index} label={`Example ${index + 1}`}>
                {desc}
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
            Meta descriptions are just the start. Get a comprehensive SEO audit and strategy from our experts.
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
