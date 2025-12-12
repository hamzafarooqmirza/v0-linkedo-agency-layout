import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const services = [
  {
    iconName: "Palette",
    title: "Brand Identity",
    description: "Logo design, color palettes, and visual identity systems that represent your brand.",
  },
  {
    iconName: "FileText",
    title: "Brand Strategy",
    description: "Define your brand positioning, messaging, and unique value proposition.",
  },
  {
    iconName: "Package",
    title: "Brand Guidelines",
    description: "Comprehensive brand books that ensure consistency across all touchpoints.",
  },
  {
    iconName: "Sparkles",
    title: "Brand Refresh",
    description: "Modernize your existing brand while maintaining recognition and equity.",
  },
]

export default function BrandingPage() {
  return (
    <MainShell>
      <Section
        eyebrow="Branding Services"
        title="Build a Brand That Stands Out"
        description="Strategic branding that creates memorable impressions and builds lasting connections with your audience."
        className="mb-16"
      />

      <Section title="Our Branding Services" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Your Brand?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's create a brand identity that captures your essence and resonates with your audience.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Start Your Brand Project
          </AnimatedButton>
        </div>
      </Section>
    </MainShell>
  )
}
