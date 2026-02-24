import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

export const metadata = {
  title: "Digital Marketing Agency in Bristol | Linkedo Agency",
  description:
    "Linkedo Agency delivers expert SEO, web development, and paid advertising for Bristol businesses. Grow your South West brand with a digital marketing agency that delivers results.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Fast, modern websites designed to convert Bristol visitors into loyal customers.",
    href: "/services/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Organic search strategies helping Bristol businesses rank prominently on Google.",
    href: "/services/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting Bristol and South West audiences with precision and ROI focus.",
    href: "/services/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Social media advertising built for Bristol's diverse consumer and B2B audiences.",
    href: "/services/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security solutions to protect Bristol businesses online.",
    href: "/services/security",
  },
]

const benefits = [
  "South West market knowledge and competitor intelligence",
  "Strategies built for Bristol's startup and SME ecosystem",
  "GDPR-compliant data handling throughout",
  "Straightforward GBP pricing with no surprises",
  "Focus on long-term, sustainable digital growth",
  "Dedicated support from strategy to performance reporting",
]

const caseStudy = {
  title: "190% More Leads in 5 Months",
  client: "Bristol Tech Startup",
  description:
    "How we helped a Bristol-based SaaS startup build organic search authority and generate consistent inbound leads through a combined SEO and content strategy.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["SEO", "Content Strategy", "Bristol"],
  href: "/case-studies",
}

export default function BristolPage() {
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
                Digital Marketing Agency in <span className="text-gradient-primary">Bristol</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Bristol businesses and startups grow online with strategic SEO, modern web development, and
                paid advertising that generates real, measurable results in the South West's most competitive sectors.
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
                    View Bristol Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Bristol Services"
          title="What We Offer Bristol Businesses"
          description="Full-service digital marketing for South West businesses and startups ready to scale."
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
                Why Bristol Businesses Choose Linkedo
              </h2>
              <p className="text-muted-foreground mb-8">
                Bristol's entrepreneurial spirit and growing tech cluster make it one of the UK's most exciting
                business cities. We work with Bristol companies at every stage of growth to build digital systems
                that generate leads, build authority, and scale.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Bristol and South West</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Bristol, South West England, UK</p>
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
                    <p className="text-sm text-muted-foreground">Bristol, Bath, Swindon, Gloucester &amp; beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Local Insight */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp"
                  alt="Modern waterfront development representing Bristol's thriving tech and startup scene"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Digital Marketing for Bristol's Innovation Economy
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Bristol has consistently ranked among the UK's top cities for innovation, sustainability, and
                startup activity. From Temple Quarter's emerging tech hub to the established professional services
                in the city centre, businesses here demand digital partners that understand both the local market
                and national competition. Linkedo delivers SEO, web development, and paid media strategies that
                help Bristol businesses grow with confidence and clarity.
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="Bristol Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Bristol Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers across Bristol and the South West.
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
