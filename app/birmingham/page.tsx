import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const birminghamSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "LocalBusiness"],
    "@id": "https://linkedo.co.uk/birmingham#localbusiness",
    name: "Linkedo Agency – Birmingham",
    url: "https://linkedo.co.uk/birmingham",
    description: "Expert digital marketing agency serving Birmingham businesses with SEO, web development, Google Ads, and Meta Ads services.",
    address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressRegion: "West Midlands", addressCountry: "GB" },
    areaServed: [{ "@type": "City", name: "Birmingham" }, { "@type": "AdministrativeArea", name: "West Midlands" }],
    parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Birmingham", item: "https://linkedo.co.uk/birmingham" },
    ],
  },
]

export const metadata = {
  title: "Digital Marketing Agency in Birmingham | Linkedo Agency",
  description:
    "Linkedo Agency provides expert SEO, web development, and paid advertising for Birmingham businesses. Dominate the Midlands market with proven digital marketing strategies.",
  alternates: { canonical: "/birmingham" },
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Custom, conversion-focused websites built for Birmingham businesses ready to scale.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO to help Birmingham businesses rank above their competitors.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "High-ROI PPC campaigns targeting Birmingham and Midlands audiences.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Targeted Facebook and Instagram advertising for Birmingham brands.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security and protection for Birmingham businesses.",
    href: "/consulting",
  },
]

const benefits = [
  "Proven track record with Midlands businesses",
  "Deep understanding of the Birmingham commercial landscape",
  "GDPR-compliant data practices",
  "Transparent GBP pricing, no hidden costs",
  "Strategies tailored to competitive Midlands markets",
  "End-to-end support from strategy through delivery",
]

const caseStudy = {
  title: "320% Growth in Local Search Visibility",
  client: "Birmingham Property Group",
  description:
    "How we helped a Birmingham-based property business dominate local search and generate a consistent pipeline of qualified enquiries.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["Local SEO", "Google Ads", "Birmingham"],
  href: "/case-studies",
}

export default function BirminghamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={birminghamSchema} />
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
                Digital Marketing Agency in <span className="text-gradient-primary">Birmingham</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Birmingham businesses grow online with results-driven SEO, web development, and digital
                advertising strategies designed for the Midlands' most competitive markets.
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
                    View Birmingham Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Birmingham Services"
          title="What We Offer Birmingham Businesses"
          description="Full-service digital marketing built for the Midlands market."
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
                Why Birmingham Businesses Choose Linkedo
              </h2>
              <p className="text-muted-foreground mb-8">
                Birmingham is the UK's second city and one of its most competitive business environments. We help
                local businesses cut through the digital noise with strategies built for the Midlands market.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Greater Birmingham</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Birmingham, West Midlands, UK</p>
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
                    <p className="text-sm text-muted-foreground">Birmingham, Coventry, Wolverhampton &amp; beyond</p>
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
                  alt="Modern waterfront development representing Birmingham's thriving commercial sector"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Digital Marketing Built for the Midlands
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Birmingham's business community is one of the most diverse and dynamic in the UK, spanning
                manufacturing, professional services, retail, hospitality, and a rapidly expanding tech sector.
                Linkedo works with Birmingham businesses to build a strong digital presence, improve organic search
                rankings, and run paid campaigns that generate real, trackable returns. Our strategies are built
                around your specific industry, your local competitors, and your growth objectives.
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="Birmingham Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Birmingham Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers across Birmingham and the Midlands.
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
