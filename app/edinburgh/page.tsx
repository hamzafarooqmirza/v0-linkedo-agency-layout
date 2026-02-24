import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const edinburghSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "LocalBusiness"],
    "@id": "https://linkedo.co.uk/edinburgh#localbusiness",
    name: "Linkedo Agency – Edinburgh",
    url: "https://linkedo.co.uk/edinburgh",
    description: "Expert digital marketing agency serving Edinburgh businesses with SEO, web development, Google Ads, and Meta Ads services.",
    address: { "@type": "PostalAddress", addressLocality: "Edinburgh", addressRegion: "Scotland", addressCountry: "GB" },
    areaServed: [{ "@type": "City", name: "Edinburgh" }, { "@type": "AdministrativeArea", name: "Scotland" }],
    parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Edinburgh", item: "https://linkedo.co.uk/edinburgh" },
    ],
  },
]

export const metadata = {
  title: "Digital Marketing Agency in Edinburgh | Linkedo Agency",
  description:
    "Linkedo Agency provides expert SEO, web development, and paid advertising for Edinburgh businesses. Grow your Scottish brand with proven digital marketing strategies.",
  alternates: { canonical: "/edinburgh" },
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Professional, fast-loading websites built for Edinburgh businesses that want to stand out.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Targeted SEO strategies to help Edinburgh businesses rank prominently across Scotland and the UK.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting Edinburgh, Scottish, and UK-wide audiences for measurable ROI.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Social advertising built for Edinburgh's professional and consumer markets.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website protection and security audits for Edinburgh-based organisations.",
    href: "/consulting",
  },
]

const benefits = [
  "Understanding of the Scottish business and regulatory landscape",
  "Local competitor intelligence for Edinburgh markets",
  "GDPR-compliant processes from day one",
  "Transparent GBP pricing with no hidden fees",
  "Strategies built for tourism, finance, and professional services",
  "Dedicated account management throughout your campaign",
]

const caseStudy = {
  title: "140% Growth in Organic Bookings",
  client: "Edinburgh Tourism Brand",
  description:
    "How we helped an Edinburgh-based hospitality brand significantly grow online bookings through targeted local SEO and Google Ads campaigns.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["Local SEO", "Google Ads", "Edinburgh"],
  href: "/case-studies",
}

export default function EdinburghPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={edinburghSchema} />
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
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Scotland, United Kingdom</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Digital Marketing Agency in <span className="text-gradient-primary">Edinburgh</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Edinburgh businesses grow their digital presence with expert SEO, web development, and paid
                advertising strategies tailored to Scotland's most competitive markets.
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
                    View Edinburgh Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Edinburgh Services"
          title="What We Offer Edinburgh Businesses"
          description="Full-service digital marketing for Scottish businesses ready to grow online."
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
                Why Edinburgh Businesses Choose Linkedo
              </h2>
              <p className="text-muted-foreground mb-8">
                Edinburgh is home to world-class financial services, a thriving tourism sector, and a growing
                technology community. We bring proven digital strategies to help Edinburgh businesses compete
                both locally and nationally.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Edinburgh and Scotland</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Edinburgh, Scotland, UK</p>
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
                    <p className="text-sm text-muted-foreground">Edinburgh, Glasgow, Dundee, Aberdeen &amp; beyond</p>
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
                  alt="Modern waterfront representing Edinburgh's thriving financial and tourism sector"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Digital Growth in Scotland's Capital
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Edinburgh is Scotland's economic and cultural capital, host to major financial institutions,
                a globally recognised tourism industry, and a burgeoning tech and life sciences sector. Businesses
                here face both strong local competition and increasing pressure from national brands. Linkedo
                delivers SEO, paid media, and web development strategies that position Edinburgh businesses as
                clear authorities in their field, driving sustainable growth through digital channels.
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="Edinburgh Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Edinburgh Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers across Edinburgh and Scotland.
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
