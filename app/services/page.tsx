import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Services | Linkedo Agency",
  description:
    "Comprehensive digital marketing services including web development, SEO, Google Ads, Meta Ads, and more.",
}

const developmentServices = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Custom websites built with modern technologies for performance, security, and scalability.",
    href: "/website-development",
  },
  {
    iconName: "Globe",
    title: "Web Applications",
    description: "Full-stack web applications with complex functionality and seamless user experiences.",
    href: "/web-development",
  },
  {
    iconName: "Smartphone",
    title: "Mobile-First Design",
    description: "Responsive designs that look and work perfectly on every device and screen size.",
    href: "/web-development",
  },
  {
    iconName: "ShoppingCart",
    title: "E-Commerce Solutions",
    description: "Online stores that convert visitors into customers with optimized checkout flows.",
    href: "/web-development",
  },
]

const marketingServices = [
  {
    iconName: "Search",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that improve your search rankings and drive organic traffic.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "Strategic PPC campaigns that maximize your advertising ROI and generate qualified leads.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads (Facebook & Instagram)",
    description: "Targeted social media advertising to reach your ideal customers on Meta platforms.",
    href: "/meta-ads",
  },
  {
    iconName: "Palette",
    title: "Branding & Identity",
    description: "Compelling brand identities that differentiate your business and resonate with your audience.",
    href: "/branding",
  },
  {
    iconName: "MessageSquare",
    title: "Content Marketing",
    description: "Strategic content that educates your audience and drives conversions throughout the funnel.",
    href: "/consulting",
  },
]

const securityServices = [
  {
    iconName: "Shield",
    title: "Security Audits",
    description: "Comprehensive security assessments to identify and fix vulnerabilities in your digital assets.",
    href: "/consulting",
  },
  {
    iconName: "Lock",
    title: "SSL & Encryption",
    description: "Secure your website and customer data with industry-standard encryption protocols.",
    href: "/consulting",
  },
  {
    iconName: "Bug",
    title: "Malware Removal",
    description: "Fast and thorough malware detection and removal to protect your business reputation.",
    href: "/consulting",
  },
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple landing page might take 2-3 weeks, while a full web application could take 2-4 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We offer monthly retainer packages that include ongoing support, security updates, performance monitoring, and continuous optimization of your digital assets.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in B2B companies across technology, professional services, manufacturing, healthcare, and finance. Our strategies are tailored to the unique challenges of each industry.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We establish clear KPIs at the start of every engagement, including metrics like organic traffic, lead generation, conversion rates, and ROI. You receive regular reports tracking progress against these goals.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Everything You Need to <span className="text-gradient-primary">Dominate Online</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              From stunning websites to lead-generating marketing campaigns, we provide end-to-end digital solutions
              that drive real business results.
            </p>
          </div>
        </Section>

        {/* Development Services */}
        <Section
          eyebrow="Development"
          title="Build Your Digital Foundation"
          description="Modern, fast, and secure websites and applications built to convert."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* Marketing Services */}
        <Section
          eyebrow="Marketing"
          title="Grow Your Audience & Revenue"
          description="Data-driven strategies that put your business in front of the right people."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* Security Services */}
        <Section
          eyebrow="Security"
          title="Protect Your Business"
          description="Keep your website and customer data safe from threats."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        {/* FAQ Section */}
        <Section eyebrow="FAQ" title="Common Questions">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your digital goals. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/pricing">
                <AnimatedButton variant="secondary" size="lg">
                  View Pricing
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
