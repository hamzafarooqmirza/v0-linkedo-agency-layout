"use client"

import { useState } from "react"
import Link from "next/link"
import { ListTree, FileText, FileSearch, ArrowRight, Lightbulb, Check } from "lucide-react"
import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { AIToolPanel } from "@/components/ui/ai-tool-panel"
import { AIToolCard } from "@/components/ui/ai-tool-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import { FormTextarea } from "@/components/ui/form-textarea"

const contentTypeOptions = [
  { value: "how-to", label: "How-To Guide" },
  { value: "listicle", label: "Listicle" },
  { value: "comparison", label: "Comparison" },
  { value: "ultimate-guide", label: "Ultimate Guide" },
  { value: "case-study", label: "Case Study" },
]

const relatedTools = [
  {
    icon: FileText,
    title: "Meta Title Generator",
    description: "Create click-worthy meta titles for your blog posts.",
    href: "/free-ai-tools-online/meta-title-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
  {
    icon: FileSearch,
    title: "Meta Description Generator",
    description: "Write compelling descriptions for search results.",
    href: "/free-ai-tools-online/meta-description-generator",
    categories: [
      { label: "SEO", variant: "primary" as const },
      { label: "Content", variant: "default" as const },
    ],
  },
]

const bestPractices = [
  "Start with a compelling introduction that hooks readers",
  "Use H2 and H3 headers to organize content logically",
  "Include relevant keywords in your headings naturally",
  "Add actionable takeaways in each section",
  "End with a strong conclusion and call-to-action",
  "Consider adding FAQs for featured snippet opportunities",
]

export default function BlogOutlineGeneratorPage() {
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [contentType, setContentType] = useState("how-to")
  const [results, setResults] = useState<string[]>([])

  const handleGenerate = () => {
    const mockResults = [
      `H1: ${topic}\n\nIntroduction\n- Hook the reader with a problem/question\n- Explain what they'll learn\n- Brief overview of key points\n\nH2: What is ${topic}?\n- Definition and context\n- Why it matters\n\nH2: Key Benefits of ${topic}\n- Benefit 1 with explanation\n- Benefit 2 with explanation\n- Benefit 3 with explanation\n\nH2: How to Get Started with ${topic}\n- Step 1: [Action]\n- Step 2: [Action]\n- Step 3: [Action]\n\nH2: Common Mistakes to Avoid\n- Mistake 1 and how to prevent it\n- Mistake 2 and how to prevent it\n\nH2: FAQs About ${topic}\n- Q1: [Common question]\n- Q2: [Common question]\n\nConclusion\n- Summarize key points\n- Call-to-action`,
      `H1: The Ultimate Guide to ${topic}\n\nIntro: Why ${topic} Matters in 2024\n\nH2: Understanding the Basics\nH3: Core Concepts\nH3: Key Terminology\n\nH2: Step-by-Step Implementation\nH3: Planning Phase\nH3: Execution Phase\nH3: Optimization Phase\n\nH2: Expert Tips and Best Practices\n\nH2: Real-World Examples\n\nH2: Measuring Success\n\nConclusion + Next Steps`,
    ]
    setResults(topic ? mockResults : [])
  }

  const handleClear = () => {
    setTopic("")
    setKeywords("")
    setContentType("how-to")
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
            items={[{ label: "Free AI Tools", href: "/free-ai-tools-online" }, { label: "Blog Outline Generator" }]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 flex items-center justify-center">
                <ListTree className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Free Blog Outline <span className="text-gradient-primary">Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Structure your blog posts with AI-generated outlines optimized for readability, SEO, and reader
              engagement.
            </p>
          </div>
        </MainShell>
      </section>

      {/* Tool Panel */}
      <Section className="pt-8">
        <AIToolPanel results={results} onRegenerate={handleGenerate} onClear={handleClear}>
          <div className="space-y-5">
            <FormInput
              label="Blog Topic"
              placeholder="e.g., How to Improve Website SEO"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <FormTextarea
              label="Target Keywords (optional)"
              placeholder="Enter keywords separated by commas..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              rows={2}
            />
            <FormSelect
              label="Content Type"
              options={contentTypeOptions}
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
            />
            <AnimatedButton onClick={handleGenerate} className="w-full mt-2">
              Generate Outline
            </AnimatedButton>
          </div>
        </AIToolPanel>
      </Section>

      {/* Best Practices Section */}
      <Section
        eyebrow="Best Practices"
        title="How to Structure Great Blog Posts"
        description="Follow these guidelines to create content that ranks and engages."
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
              <h3 className="font-semibold text-foreground">Pro Tip</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Use your generated outline as a starting point, then customize it based on your unique expertise and
              audience needs. Add personal anecdotes, case studies, and data points to make your content stand out from
              competitors.
            </p>
          </div>
        </div>
      </Section>

      {/* Related Tools */}
      <Section eyebrow="Related Tools" title="Continue Creating" gradient>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {relatedTools.map((tool) => (
            <AIToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-24">
        <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need Professional Content?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let our content experts create high-quality blog posts that drive traffic and conversions.
          </p>
          <Link href="/services/seo">
            <AnimatedButton size="lg">
              <span>Explore Content Services</span>
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </Link>
        </div>
      </Section>
    </main>
  )
}
