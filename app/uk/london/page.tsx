import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

export const metadata = {
  title: "Digital Marketing Agency in London | Linkedo Agency",
  description:
    "Linkedo Agency is a UK-registered digital marketing agency serving London businesses with web development, SEO, and paid advertising services.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Custom websites for London businesses built for performance and conversion.",
    href: "/london/website-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO strategies to help London businesses rank higher.",
    href: "/london/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting London and UK-wide audiences with maximum ROI.",
    href: "/london/google-ads-management",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising for London-based brands.",
    href: "/london/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security audits and protection for UK businesses.",
    href: "/london/security",
  },
]

const ukBenefits = [
  "UK-registered company with local accountability",
  "Understanding of UK business culture and regulations",
  "GDPR-compliant processes and data handling",
  "GBP billing with no currency conversion fees",
  "Overlapping business hours for real-time communication",
  "Access to UK-based talent and partners",
]

const caseStudy = {
  title: "200% Increase in Qualified Leads",
  client: "London Finance Co.",
  description:
    "How we helped a London-based financial services firm double their qualified lead generation in 4 months.",
  image: "/london-finance-office-modern.jpg",
  tags: ["SEO", "Google Ads", "London"],
  href: "/case-studies/london-finance",
}

export default function LondonPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">United Kingdom</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Digital Marketing Agency in <span className="text-gradient-primary">London</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              We help London businesses grow online with data-driven web development, SEO, and advertising strategies
              that deliver measurable results and real ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="#services">
                <AnimatedButton variant="secondary" size="lg">
                  View London Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>

        {/* Services for London */}
        <Section
          id="services"
          eyebrow="London Services"
          title="What We Offer London Businesses"
          description="Full-service digital marketing tailored for the London market."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why UK Agency */}
        <Section gradient>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Work With a UK-Registered Agency
              </h2>
              <p className="text-muted-foreground mb-8">
                As a UK-registered company, we understand the unique needs of London businesses and provide the
                accountability and expertise you expect from a local partner.
              </p>
              <ul className="space-y-4">
                {ukBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our London Presence</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Time Zone</p>
                    <p className="text-sm text-muted-foreground">GMT / BST (UK Time)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Registration</p>
                    <p className="text-sm text-muted-foreground">UK Companies House Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="London Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your London Business?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers in London and beyond.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
