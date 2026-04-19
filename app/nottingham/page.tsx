import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const nottinghamSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "LocalBusiness"],
    "@id": "https://linkedo.co.uk/nottingham#localbusiness",
    name: "Linkedo Agency – Nottingham",
    url: "https://linkedo.co.uk/nottingham",
    description: "Expert digital marketing agency serving Nottingham businesses with SEO, web development, Google Ads, and Meta Ads services.",
    address: { "@type": "PostalAddress", addressLocality: "Nottingham", addressRegion: "East Midlands", addressCountry: "GB" },
    areaServed: [{ "@type": "City", name: "Nottingham" }, { "@type": "AdministrativeArea", name: "East Midlands" }],
    parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Nottingham", item: "https://linkedo.co.uk/nottingham" },
    ],
  },
]

export const metadata = {
  title: "Digital Marketing Agency in Nottingham | Linkedo Agency",
  description:
    "Linkedo Agency provides expert SEO, web development, and paid advertising for Nottingham businesses. Grow your East Midlands brand with a digital agency that delivers results.",
  alternates: { canonical: "/nottingham" },
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "High-performance websites for Nottingham businesses built to rank and convert.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO strategies helping Nottingham businesses dominate search results.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting Nottingham and East Midlands customers with strong ROI.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Targeted social advertising for Nottingham businesses reaching local and national audiences.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security and protection for Nottingham-based organisations.",
    href: "/consulting",
  },
]

const benefits = [
  "East Midlands market expertise and competitor research",
  "Strategies tailored to Nottingham's retail and digital sectors",
  "GDPR-compliant processes throughout every campaign",
  "Straightforward GBP pricing and transparent reporting",
  "Proven track record of improving search rankings",
  "Dedicated support from initial audit to ongoing growth",
]

const caseStudy = {
  title: "230% More Organic Enquiries",
  client: "Nottingham Professional Services Firm",
  description:
    "How we helped a Nottingham-based professional services business more than double their organic enquiries through a targeted local SEO and content strategy.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["Local SEO", "Content Strategy", "Nottingham"],
  href: "/case-studies",
}

export default function NottinghamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={nottinghamSchema} />
      <main className="pt-24">
        <div className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/tower-bridge-sunset-london.webp')" }}>
          <div className="absolute inset-0 bg-background/80" />
          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">United Kingdom</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Digital Marketing Agency in <span className="text-gradient-primary">Nottingham</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Nottingham businesses grow their digital presence with expert SEO, web development, and paid media strategies that generate consistent, high-quality leads across the East Midlands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
                <Link href="#services"><AnimatedButton variant="secondary" size="lg">View Nottingham Services</AnimatedButton></Link>
              </div>
            </div>
          </Section>
        </div>

        <Section id="services" eyebrow="Nottingham Services" title="What We Offer Nottingham Businesses" description="Full-service digital marketing for East Midlands businesses ready to grow.">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Nottingham Businesses Choose Linkedo</h2>
              <p className="text-muted-foreground mb-8">
                Nottingham's economy covers retail, education, healthcare, and a growing tech sector. We work with local businesses to build digital strategies that compete effectively and drive sustainable growth.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Nottingham and East Midlands</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Location</p><p className="text-sm text-muted-foreground">Nottingham, East Midlands, UK</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Time Zone</p><p className="text-sm text-muted-foreground">GMT / BST (UK Time)</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Coverage</p><p className="text-sm text-muted-foreground">Nottingham, Derby, Leicester, Lincoln &amp; beyond</p></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 rounded-2xl overflow-hidden">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp" alt="Modern waterfront representing Nottingham's growing commercial and tech economy" className="w-full h-full object-cover" />
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Digital Marketing Tailored to the East Midlands</h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Nottingham's business landscape is diverse and evolving, with strong clusters in retail, education, health, and an ambitious digital and tech community centred around the Nottingham Science Park and city centre. Linkedo helps Nottingham businesses compete effectively online through SEO strategies that build lasting rankings, paid campaigns that generate immediate leads, and websites that convert visitors into customers.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Case Study" title="Nottingham Client Success">
          <div className="max-w-2xl mx-auto"><CaseStudyCard {...caseStudy} /></div>
        </Section>

        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Nottingham Business?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can help you reach more customers across Nottingham and the East Midlands.</p>
            <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
