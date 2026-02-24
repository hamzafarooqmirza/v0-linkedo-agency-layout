import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

export const metadata = {
  title: "Digital Marketing Agency in Manchester | Linkedo Agency",
  description:
    "Linkedo Agency delivers expert SEO, web development, and paid advertising services to Manchester businesses. Drive more leads and grow your presence across Greater Manchester.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "High-performance websites built for Manchester businesses that convert visitors into customers.",
    href: "/services/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO strategies to help Manchester businesses rank higher on Google.",
    href: "/services/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting Manchester and North West audiences for maximum ROI.",
    href: "/services/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising tailored to Greater Manchester audiences.",
    href: "/services/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security audits and protection for Manchester-based businesses.",
    href: "/services/security",
  },
]

const benefits = [
  "Dedicated account management for every Manchester client",
  "Deep understanding of the North West business landscape",
  "GDPR-compliant processes and data handling",
  "GBP billing with transparent pricing",
  "Proven results for Manchester SMEs and enterprises",
  "Full-service support from strategy to execution",
]

const caseStudy = {
  title: "180% Increase in Organic Traffic",
  client: "Manchester Retail Group",
  description:
    "How we helped a Manchester-based retail brand triple their organic search visibility and drive consistent leads within 6 months.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["SEO", "Content Marketing", "Manchester"],
  href: "/case-studies",
}

export default function ManchesterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <div
          className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tower-bridge-sunset-london.webp')" }}
        >
          <div className="absolute inset-0 bg-background/80" />
          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">United Kingdom</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Digital Marketing Agency in <span className="text-gradient-primary">Manchester</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Manchester businesses grow online with data-driven web development, SEO, and advertising
                strategies that deliver measurable results and real ROI across Greater Manchester and the North West.
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
                    View Manchester Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Manchester Services"
          title="What We Offer Manchester Businesses"
          description="Full-service digital marketing tailored for the Greater Manchester market."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why Us */}
        <Section gradient>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Manchester Businesses Choose Linkedo
              </h2>
              <p className="text-muted-foreground mb-8">
                We understand the competitive Manchester market. From MediaCityUK startups to established Northern
                Quarter businesses, we deliver digital strategies that cut through the noise and drive growth.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Greater Manchester</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Manchester, Greater Manchester, UK</p>
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
                    <p className="font-medium text-foreground">Coverage</p>
                    <p className="text-sm text-muted-foreground">Manchester, Salford, Stockport, Bolton &amp; beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Local insight */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp"
                  alt="Modern city waterfront development representing Manchester's growing business scene"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Digital Growth in Manchester's Competitive Market
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Manchester is one of the UK's fastest-growing business hubs, home to a thriving tech scene,
                world-class universities, and a diverse SME ecosystem. From the Northern Quarter's creative agencies
                to MediaCityUK's media giants, businesses in Manchester face stiff digital competition. Linkedo
                delivers SEO, web development, and paid media strategies built specifically to help you stand out,
                rank higher, and convert more customers in this dynamic city.
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="Manchester Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Manchester Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers across Manchester and the North West.
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
