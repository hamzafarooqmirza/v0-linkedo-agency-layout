import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const leicesterSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "LocalBusiness"],
    "@id": "https://linkedo.co.uk/leicester#localbusiness",
    name: "Linkedo Agency – Leicester",
    url: "https://linkedo.co.uk/leicester",
    description: "Expert digital marketing agency serving Leicester businesses with SEO, web development, Google Ads, and Meta Ads services.",
    address: { "@type": "PostalAddress", addressLocality: "Leicester", addressRegion: "East Midlands", addressCountry: "GB" },
    areaServed: [{ "@type": "City", name: "Leicester" }, { "@type": "AdministrativeArea", name: "East Midlands" }],
    parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Leicester", item: "https://linkedo.co.uk/leicester" },
    ],
  },
]

export const metadata = {
  title: "Digital Marketing Agency in Leicester | Linkedo",
  description:
    "Linkedo delivers expert SEO, web development, and paid advertising for Leicester businesses. Build your digital presence across the East Midlands with Linkedo.",
  alternates: { canonical: "/leicester" },
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Modern, fast websites for Leicester businesses designed to rank well and convert visitors.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Comprehensive SEO strategies helping Leicester businesses rank for their most valuable search terms.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "Targeted PPC campaigns reaching Leicester and Midlands customers for maximum ROI.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising for Leicester businesses targeting local and national audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security and protection tailored to Leicester-based businesses.",
    href: "/consulting",
  },
]

const benefits = [
  "Understanding of Leicester's diverse and multicultural business market",
  "Competitor analysis specific to the East Midlands",
  "GDPR-compliant at every stage of your campaign",
  "Clear GBP pricing with no unexpected costs",
  "Strategies that focus on revenue, not just traffic",
  "Dedicated account management and performance reviews",
]

const caseStudy = {
  title: "280% Growth in E-Commerce Revenue",
  client: "Leicester Retail Brand",
  description:
    "How we helped a Leicester-based retail brand grow their e-commerce revenue significantly through a combined SEO and Google Shopping strategy.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["SEO", "Google Ads", "Leicester"],
  href: "/case-studies",
}

export default function LeicesterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={leicesterSchema} />
      <main className="pt-24">
        <div className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/tower-bridge-sunset-london.webp')" }}>
          <div className="absolute inset-0 bg-background/80" />
          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">United Kingdom</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Digital Marketing Agency in <span className="text-gradient-primary">Leicester</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Leicester businesses grow online with data-driven SEO, web development, and paid advertising strategies that drive leads and revenue across the East Midlands and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
                <Link href="#services"><AnimatedButton variant="secondary" size="lg">View Leicester Services</AnimatedButton></Link>
              </div>
            </div>
          </Section>
        </div>

        <Section id="services" eyebrow="Leicester Services" title="What We Offer Leicester Businesses" description="Comprehensive digital marketing for East Midlands businesses ready to grow.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        <Section gradient>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Choose Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Leicester Businesses Choose Linkedo</h2>
              <p className="text-muted-foreground mb-8">
                Leicester is one of the UK's most diverse cities with a thriving retail, manufacturing, and professional services economy. We bring digital strategies that are built around the realities of the Leicester market.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Leicester and East Midlands</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Location</p><p className="text-sm text-muted-foreground">Leicester, East Midlands, UK</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Time Zone</p><p className="text-sm text-muted-foreground">GMT / BST (UK Time)</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Coverage</p><p className="text-sm text-muted-foreground">Leicester, Coventry, Derby, Loughborough &amp; beyond</p></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 rounded-2xl overflow-hidden">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp" alt="Modern waterfront representing Leicester's growing commercial and retail landscape" className="w-full h-full object-cover" />
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Digital Marketing for Leicester's Diverse Economy</h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Leicester's business community is one of the most vibrant and diverse in the UK, with strengths in retail, textile manufacturing, food production, healthcare, and a rapidly growing tech sector. Businesses here operate in highly competitive online environments where search rankings and digital visibility directly affect revenue. Linkedo works with Leicester businesses to build digital strategies grounded in data, competitor analysis, and a clear focus on commercial outcomes.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Case Study" title="Leicester Client Success">
          <div className="max-w-2xl mx-auto"><CaseStudyCard {...caseStudy} /></div>
        </Section>

        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Leicester Business?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can help you reach more customers across Leicester and the East Midlands.</p>
            <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
