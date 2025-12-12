import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { StatCard } from "@/components/ui/stat-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"

const serviceFeatures = [
  {
    iconName: "Target",
    title: "Strategic Campaign Setup",
    description: "Data-driven keyword research and campaign structure for maximum ROI.",
  },
  {
    iconName: "DollarSign",
    title: "Budget Optimization",
    description: "Smart bidding strategies to maximize conversions within your budget.",
  },
  {
    iconName: "FileText",
    title: "Compelling Ad Copy",
    description: "High-converting ad copy that resonates with your target audience.",
  },
  {
    iconName: "MousePointer",
    title: "Landing Page Optimization",
    description: "Optimize landing pages for better Quality Scores and conversions.",
  },
  {
    iconName: "BarChart",
    title: "Performance Tracking",
    description: "Detailed reporting and analytics to measure campaign success.",
  },
  {
    iconName: "RefreshCw",
    title: "Continuous Optimization",
    description: "Ongoing A/B testing and refinements to improve results over time.",
  },
]

const processSteps = [
  {
    iconName: "Target",
    title: "Audit & Strategy",
    description: "Analyze your business, competitors, and develop a winning Google Ads strategy.",
  },
  {
    iconName: "Settings",
    title: "Campaign Setup",
    description: "Build optimized campaigns with the right structure, keywords, and targeting.",
  },
  {
    iconName: "Rocket",
    title: "Launch & Monitor",
    description: "Launch campaigns and closely monitor initial performance metrics.",
  },
  {
    iconName: "TrendingUp",
    title: "Optimize & Scale",
    description: "Continuously improve and scale successful campaigns for better ROI.",
  },
]

const stats = [
  { label: "Average ROAS", value: "4.2x" },
  { label: "Cost per Lead Reduction", value: "-45%" },
  { label: "Click-Through Rate", value: "+180%" },
  { label: "Quality Score", value: "8.5/10" },
]

const faqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer:
      "Budget depends on your industry, competition, and goals. We typically recommend starting with at least $1,500-$3,000/month for meaningful results, but we can work with various budgets and scale as we see success.",
  },
  {
    question: "How long before I see results?",
    answer:
      "You'll start seeing clicks and data immediately, but meaningful results typically take 2-3 months as we optimize campaigns based on performance data. Some clients see positive ROI within the first month.",
  },
  {
    question: "Do you manage Shopping and Display ads?",
    answer:
      "Yes, we manage all types of Google Ads campaigns including Search, Shopping, Display, Video (YouTube), and Performance Max campaigns. We'll recommend the best mix for your goals.",
  },
  {
    question: "What's included in your management service?",
    answer:
      "Full campaign setup, keyword research, ad copywriting, bid management, landing page recommendations, A/B testing, monthly reporting, and ongoing optimization. We handle everything to maximize your ROI.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track metrics that matter to your business: conversions, cost per acquisition, return on ad spend (ROAS), and ultimately revenue generated. You'll receive detailed monthly reports showing campaign performance.",
  },
]

export default function GoogleAdsPage() {
  return (
    <MainShell>
      <Section
        eyebrow="Google Ads Management"
        title="Drive Qualified Leads with Google Ads"
        description="Expert Google Ads management that delivers measurable results and maximizes your advertising budget."
        className="mb-16"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Who This Is For */}
      <Section title="Who This Is For" className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">B2B Companies</h3>
            <p className="text-muted-foreground text-sm">
              Generate qualified leads and fill your sales pipeline with decision-makers actively searching for your
              services.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">E-commerce Brands</h3>
            <p className="text-muted-foreground text-sm">
              Drive sales and revenue with Shopping ads and high-intent search campaigns that convert.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">Local Businesses</h3>
            <p className="text-muted-foreground text-sm">
              Dominate local searches and attract nearby customers ready to buy your products or services.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section eyebrow="What We Do" title="Our Google Ads Services" className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceFeatures.map((feature) => (
            <ServiceCard
              key={feature.title}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="Our Process" title="How We Deliver Results" className="mb-16">
        <ProcessTimeline steps={processSteps} />
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Scale Your Google Ads?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Get a free Google Ads audit and discover opportunities to improve your campaign performance.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Free Ads Audit
          </AnimatedButton>
        </div>
      </Section>
    </MainShell>
  )
}
