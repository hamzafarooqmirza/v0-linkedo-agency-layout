import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FAQAccordion } from "@/components/ui/faq-accordion"

const services = [
  {
    iconName: "Users",
    title: "Audience Targeting",
    description: "Precision targeting to reach your ideal customers on Facebook and Instagram.",
  },
  {
    iconName: "Sparkles",
    title: "Creative Development",
    description: "Engaging ad creatives that stop the scroll and drive action.",
  },
  {
    iconName: "Target",
    title: "Campaign Optimization",
    description: "Continuous testing and optimization for maximum ROAS.",
  },
  {
    iconName: "BarChart",
    title: "Performance Tracking",
    description: "Detailed analytics and reporting on campaign performance.",
  },
]

const faqs = [
  {
    question: "What's the minimum budget for Meta Ads?",
    answer:
      "We recommend a minimum budget of $1,000-$2,000/month for Meta Ads to gather sufficient data and optimize effectively. However, we can discuss options based on your specific goals.",
  },
  {
    question: "Facebook vs Instagram - which is better?",
    answer:
      "It depends on your audience and objectives. We typically test both platforms and allocate budget based on performance. B2B often performs better on Facebook, while B2C and visual products excel on Instagram.",
  },
  {
    question: "How do you handle creative development?",
    answer:
      "We can work with your existing creative assets or develop new ad creatives. We'll provide guidance on best practices and continuously test different variations to find what resonates with your audience.",
  },
]

export default function MetaAdsPage() {
  return (
    <MainShell>
      <Section
        eyebrow="Meta Ads Management"
        title="Facebook & Instagram Ads That Convert"
        description="Strategic Meta advertising campaigns that reach your target audience and drive measurable business results."
        className="mb-16"
      />

      <Section eyebrow="Services" title="What We Offer" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Launch Your Meta Ads?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's create a Meta advertising strategy that drives real results for your business.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Started Today
          </AnimatedButton>
        </div>
      </Section>
    </MainShell>
  )
}
