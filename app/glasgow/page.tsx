import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const glasgowSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "LocalBusiness"],
    "@id": "https://linkedo.co.uk/glasgow#localbusiness",
    name: "Linkedo Agency – Glasgow",
    url: "https://linkedo.co.uk/glasgow",
    description: "Expert digital marketing agency serving Glasgow businesses with SEO, web development, Google Ads, and Meta Ads services.",
    address: { "@type": "PostalAddress", addressLocality: "Glasgow", addressRegion: "Scotland", addressCountry: "GB" },
    areaServed: [{ "@type": "City", name: "Glasgow" }, { "@type": "AdministrativeArea", name: "Scotland" }],
    parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Glasgow", item: "https://linkedo.co.uk/glasgow" },
    ],
  },
]

export const metadata = {
  title: "Digital Marketing Agency in Glasgow | Linkedo Agency",
  description:
    "Linkedo Agency delivers expert SEO, web development, and paid advertising for Glasgow businesses. Connect with more customers and grow your brand across Scotland with Linkedo.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Modern, high-performance websites for Glasgow businesses built to convert and grow.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local SEO and national ranking strategies for Glasgow businesses across all industries.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "Targeted PPC campaigns reaching Glasgow customers and beyond with strong returns.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising connecting Glasgow brands with the right audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security audits and protection for Glasgow businesses.",
    href: "/consulting",
  },
]

const benefits = [
  "Proven digital strategies for Scottish markets",
  "Understanding of Glasgow's diverse business sectors",
  "GDPR-compliant processes at every stage",
  "Clear GBP pricing with no hidden charges",
  "Focus on generating leads, sales, and revenue",
  "Dedicated account management and reporting",
]

const caseStudy = {
  title: "210% Increase in Website Traffic",
  client: "Glasgow Retail Business",
  description:
    "How we helped a Glasgow-based retail business more than triple their website traffic and increase sales through a focused SEO and Meta Ads strategy.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["SEO", "Meta Ads", "Glasgow"],
  href: "/case-studies",
}

export default function GlasgowPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={glasgowSchema} />
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
                Digital Marketing Agency in <span className="text-gradient-primary">Glasgow</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Glasgow businesses grow their digital presence with expert SEO, modern web development,
                and paid advertising that connects your brand to the right customers across Scotland and the UK.
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
                    View Glasgow Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Glasgow Services"
          title="What We Offer Glasgow Businesses"
          description="Full-service digital marketing for Glasgow and Scottish businesses ready to grow."
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
                Why Glasgow Businesses Choose Linkedo
              </h2>
              <p className="text-muted-foreground mb-8">
                Glasgow is Scotland's largest city and a powerhouse for retail, manufacturing, professional
                services, and creative industries. We help Glasgow businesses build dominant digital presences
                that drive real commercial growth.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Glasgow and Beyond</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Glasgow, Scotland, UK</p>
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
                    <p className="text-sm text-muted-foreground">Glasgow, Paisley, Motherwell, Stirling &amp; beyond</p>
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
                  alt="Modern waterfront representing Glasgow's diverse commercial and cultural landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Digital Marketing for Glasgow's Growing Economy
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Glasgow is reinventing itself as a hub for technology, innovation, and professional services,
                while remaining a powerhouse for retail and manufacturing. Whether you are a city centre
                professional services firm, a West End restaurant group, or a growing e-commerce brand,
                Linkedo builds digital strategies that help Glasgow businesses get found, generate enquiries,
                and grow their revenue through SEO, web development, and performance advertising.
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="Glasgow Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Glasgow Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers across Glasgow and Scotland.
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
