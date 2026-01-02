"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { PricingCard } from "@/components/ui/pricing-card"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    monthlyPrice: "$2,500",
    yearlyPrice: "$2,000",
    description: "Perfect for small businesses getting started with digital marketing.",
    features: [
      "Landing page design & development",
      "Basic SEO setup",
      "Google Analytics integration",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "$5,000",
    yearlyPrice: "$4,000",
    description: "Ideal for growing companies ready to scale their online presence.",
    features: [
      "Full website design & development",
      "Advanced SEO optimization",
      "Google Ads management",
      "Conversion rate optimization",
      "Weekly performance reports",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    monthlyPrice: "$10,000",
    yearlyPrice: "$8,000",
    description: "Comprehensive solution for established businesses seeking dominance.",
    features: [
      "Everything in Growth",
      "Multi-channel ad management",
      "Content marketing strategy",
      "Marketing automation",
      "Dedicated account manager",
      "24/7 priority support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Custom development solutions",
      "Enterprise SEO strategy",
      "Full-funnel marketing",
      "Custom integrations",
      "Dedicated team",
      "SLA guarantee",
    ],
    ctaText: "Contact Sales",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <Section
      eyebrow="Pricing"
      title="Transparent Pricing for Every Stage"
      description="Choose a plan that fits your business needs. All plans include a 14-day money-back guarantee."
      gradient
    >
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={cn("text-sm", !isYearly ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={cn("relative w-14 h-7 rounded-full transition-colors", isYearly ? "bg-primary" : "bg-secondary")}
        >
          <span
            className={cn(
              "absolute top-1 w-5 h-5 rounded-full bg-foreground transition-transform",
              isYearly ? "translate-x-8" : "translate-x-1",
            )}
          />
        </button>
        <span className={cn("text-sm", isYearly ? "text-foreground" : "text-muted-foreground")}>
          Yearly <span className="text-primary">(Save 20%)</span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            period={plan.monthlyPrice !== "Custom" ? "/month" : ""}
            description={plan.description}
            features={plan.features}
            highlighted={plan.highlighted}
            badge={plan.badge}
            ctaText={plan.ctaText}
          />
        ))}
      </div>
    </Section>
  )
}

export { PricingSection as PricingSectionComponent }
