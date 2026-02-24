import { Section } from "@/components/ui/section"
import { PricingSectionComponent } from "@/components/sections/pricing-section"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import Link from "next/link"

export const metadata = {
  title: "Pricing & Packages | Linkedo Agency",
  description:
    "Transparent pricing for web development, SEO, and digital marketing services. Find the perfect plan for your business.",
  alternates: { canonical: "/pricing" },
}

const faqs = [
  {
    question: "Can I customize a plan to fit my specific needs?",
    answer:
      "Our plans are starting points. We work with every client to create a customized package that addresses their unique challenges and goals. Contact us for a personalized quote.",
  },
  {
    question: "What's included in the monthly retainer?",
    answer:
      "Monthly retainers include ongoing optimization, regular reporting, strategy calls, and continuous improvements. The specific deliverables depend on your plan and are outlined in detail during onboarding.",
  },
  {
    question: "Do you offer project-based pricing?",
    answer:
      "Yes, for one-time projects like website development or security audits, we offer fixed-price quotes. Contact us with your project requirements for a detailed proposal.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "For SEO and ongoing marketing services, we recommend a minimum 6-month commitment to see meaningful results. However, we offer flexible arrangements based on your situation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit cards, and can invoice in GBP, USD, or EUR. Payment terms are typically net-30 for established clients.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "We offer a 14-day satisfaction guarantee on all new engagements. If you're not happy with our approach within the first two weeks, we'll provide a full refund.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Pricing
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Pricing & <span className="text-gradient-primary">Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing with no hidden fees. Choose a plan that fits your business needs, or contact us for a
              custom quote.
            </p>
          </div>
        </Section>

        {/* Pricing Cards */}
        <PricingSectionComponent />

        {/* FAQ */}
        <Section eyebrow="FAQ" title="Pricing Questions">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8">
              Every business is unique. Let's discuss your specific needs and create a tailored package just for you.
            </p>
            <Link href="/contact">
              {/* <AnimatedButton size="lg">
                Get a Custom Quote
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton> */}
            </Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
