import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const services = [
  {
    iconName: "Lightbulb",
    title: "Digital Strategy",
    description: "Comprehensive digital marketing strategies aligned with your business goals.",
  },
  {
    iconName: "Search",
    title: "SEO Audits",
    description: "In-depth technical and content audits with actionable recommendations.",
  },
  {
    iconName: "BarChart",
    title: "Analytics Setup",
    description: "Implement tracking and analytics to measure what matters to your business.",
  },
  {
    iconName: "Users",
    title: "Training & Workshops",
    description: "Empower your team with digital marketing knowledge and best practices.",
  },
]

export default function ConsultingPage() {
  return (
    <MainShell>
      <Section
        eyebrow="Consulting Services"
        title="Expert Digital Marketing Guidance"
        description="Strategic consulting to help you make informed decisions and accelerate your digital growth."
        className="mb-16"
      />

      <Section title="What We Offer" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need Strategic Guidance?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Book a consultation to discuss your digital marketing challenges and opportunities.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Book a Consultation
          </AnimatedButton>
        </div>
      </Section>
    </MainShell>
  )
}
