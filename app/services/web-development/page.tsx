import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { ProcessTimeline } from "@/components/ui/process-timeline"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"

const serviceFeatures = [
  {
    iconName: "Layout",
    title: "Custom Design",
    description: "Unique, brand-focused designs that stand out and convert visitors into customers.",
  },
  {
    iconName: "Smartphone",
    title: "Responsive & Mobile-First",
    description: "Perfectly optimized for all devices with mobile-first development approach.",
  },
  {
    iconName: "Zap",
    title: "Lightning Fast",
    description: "Optimized for speed with 95+ PageSpeed scores and exceptional performance.",
  },
  {
    iconName: "Shield",
    title: "Secure & Scalable",
    description: "Built with security best practices and scalable architecture for growth.",
  },
  {
    iconName: "Search",
    title: "SEO Optimized",
    description: "Technical SEO built-in from the ground up for better search visibility.",
  },
  {
    iconName: "BarChart",
    title: "Analytics Integration",
    description: "Comprehensive tracking setup to measure and optimize performance.",
  },
]

const processSteps = [
  {
    iconName: "MessageSquare",
    title: "Discovery & Planning",
    description: "We understand your business goals, target audience, and project requirements.",
  },
  {
    iconName: "Palette",
    title: "Design & Prototyping",
    description: "Create wireframes and high-fidelity designs for your approval.",
  },
  {
    iconName: "Code",
    title: "Development",
    description: "Build your website with clean, efficient code and best practices.",
  },
  {
    iconName: "TestTube",
    title: "Testing & QA",
    description: "Rigorous testing across devices, browsers, and performance metrics.",
  },
  {
    iconName: "Rocket",
    title: "Launch & Support",
    description: "Deploy your site and provide ongoing maintenance and support.",
  },
]

const caseStudies = [
  {
    slug: "ecommerce-redesign",
    title: "E-commerce Platform Redesign",
    description: "300% increase in online sales with modern design and optimized checkout flow.",
    metrics: [
      { label: "Sales Increase", value: "+300%" },
      { label: "Page Speed", value: "95/100" },
    ],
    tags: ["E-commerce", "Redesign", "Shopify"],
    image: "/ecommerce-website-mockup.png",
  },
  {
    slug: "saas-platform",
    title: "SaaS Platform Development",
    description: "Custom web application serving 10,000+ users with enterprise features.",
    metrics: [
      { label: "Users", value: "10,000+" },
      { label: "Uptime", value: "99.9%" },
    ],
    tags: ["SaaS", "Web App", "React"],
    image: "/modern-saas-dashboard.png",
  },
]

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Timeline varies based on complexity. A basic website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a detailed timeline during the discovery phase.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We work with modern frameworks including Next.js, React, and Vue.js for custom development. We also build on platforms like WordPress, Shopify, and Webflow depending on your needs.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer ongoing maintenance packages including security updates, content updates, performance monitoring, and technical support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All our websites are built mobile-first, ensuring they look and perform perfectly on all devices from smartphones to desktop computers.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we specialize in website redesigns. We'll analyze your current site, identify improvement opportunities, and create a modern, high-performing replacement.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <MainShell>
      <Section
        eyebrow="Web Development"
        title="Custom Websites That Drive Results"
        description="Professional web development services that combine stunning design with powerful functionality to grow your business."
        className="mb-16"
      />

      {/* Who This Is For */}
      <Section title="Who This Is For" className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">Growing Businesses</h3>
            <p className="text-muted-foreground text-sm">
              Need a professional web presence to establish credibility and attract customers online.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">E-commerce Brands</h3>
            <p className="text-muted-foreground text-sm">
              Want to sell online with a fast, secure platform that converts visitors into customers.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-semibold text-foreground mb-2">SaaS Companies</h3>
            <p className="text-muted-foreground text-sm">
              Need custom web applications with complex functionality and integrations.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Offer */}
      <Section eyebrow="Services" title="What We Offer" className="mb-16">
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
      <Section eyebrow="Our Process" title="How We Work" className="mb-16">
        <ProcessTimeline steps={processSteps} />
      </Section>

      {/* Case Studies */}
      <Section eyebrow="Case Studies" title="Recent Projects" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's discuss your web development needs and create a solution that drives real business results.
          </p>
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get a Free Quote
          </AnimatedButton>
        </div>
      </Section>
    </MainShell>
  )
}
