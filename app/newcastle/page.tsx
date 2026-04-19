import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const newcastleSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["MarketingAgency", "LocalBusiness"],
    "@id": "https://linkedo.co.uk/newcastle#localbusiness",
    name: "Linkedo Agency – Newcastle",
    url: "https://linkedo.co.uk/newcastle",
    description: "Expert digital marketing agency serving Newcastle businesses with SEO, web development, Google Ads, and Meta Ads services.",
    address: { "@type": "PostalAddress", addressLocality: "Newcastle upon Tyne", addressRegion: "North East England", addressCountry: "GB" },
    areaServed: [{ "@type": "City", name: "Newcastle upon Tyne" }, { "@type": "AdministrativeArea", name: "North East England" }],
    parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
      { "@type": "ListItem", position: 2, name: "Newcastle", item: "https://linkedo.co.uk/newcastle" },
    ],
  },
]

export const metadata = {
  title: "Digital Marketing Agency in Newcastle | Linkedo",
  description:
    "Linkedo delivers expert SEO, web development, and paid advertising for Newcastle businesses. Grow your North East brand with proven digital marketing strategies.",
  alternates: { canonical: "/newcastle" },
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Professional, conversion-ready websites for Newcastle businesses built for competitive markets.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO to help Newcastle businesses rank higher and attract more customers.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "ROI-focused PPC campaigns targeting Newcastle and North East England audiences.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Social media advertising campaigns for Newcastle businesses reaching local and national markets.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security audits and protection for Newcastle-based businesses.",
    href: "/consulting",
  },
]

const benefits = [
  "North East England market knowledge and competitor intelligence",
  "Strategies built for Newcastle's tech and professional services sectors",
  "GDPR-compliant processes from campaign start to finish",
  "Transparent GBP pricing with monthly performance reports",
  "Campaigns focused on revenue and qualified lead generation",
  "Dedicated account management throughout your project",
]

const caseStudy = {
  title: "195% Increase in Qualified Leads",
  client: "Newcastle Technology Company",
  description:
    "How we helped a Newcastle-based technology firm almost triple their qualified leads through a combined SEO, content, and Google Ads strategy over six months.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["SEO", "Google Ads", "Newcastle"],
  href: "/case-studies",
}

export default function NewcastlePage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={newcastleSchema} />
      <main className="pt-24">
        <div className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/tower-bridge-sunset-london.webp')" }}>
          <div className="absolute inset-0 bg-background/80" />
          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">United Kingdom</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Digital Marketing Agency in <span className="text-gradient-primary">Newcastle</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Newcastle businesses grow their digital presence with expert SEO, web development, and paid advertising designed to generate leads and deliver commercial results across North East England.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
                <Link href="#services"><AnimatedButton variant="secondary" size="lg">View Newcastle Services</AnimatedButton></Link>
              </div>
            </div>
          </Section>
        </div>

        <Section id="services" eyebrow="Newcastle Services" title="What We Offer Newcastle Businesses" description="Full-service digital marketing for North East England businesses.">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Newcastle Businesses Choose Linkedo</h2>
              <p className="text-muted-foreground mb-8">
                Newcastle upon Tyne is the economic engine of the North East, home to a growing digital sector, strong professional services, and a diverse commercial economy. We help local businesses compete online with strategies that deliver real results.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Newcastle and North East England</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Location</p><p className="text-sm text-muted-foreground">Newcastle upon Tyne, North East England, UK</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Time Zone</p><p className="text-sm text-muted-foreground">GMT / BST (UK Time)</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Coverage</p><p className="text-sm text-muted-foreground">Newcastle, Gateshead, Sunderland, Durham &amp; beyond</p></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 rounded-2xl overflow-hidden">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp" alt="Modern waterfront representing Newcastle's thriving commercial and digital economy" className="w-full h-full object-cover" />
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Digital Growth Strategies for the North East</h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Newcastle's digital economy is one of the fastest-growing outside London, with major investments in tech, life sciences, and professional services reshaping the city's commercial landscape. As businesses across the North East move online and competition intensifies, having a strong digital strategy is no longer optional. Linkedo helps Newcastle businesses build the SEO foundations, website performance, and paid media presence needed to grow and compete in a rapidly evolving market.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Case Study" title="Newcastle Client Success">
          <div className="max-w-2xl mx-auto"><CaseStudyCard {...caseStudy} /></div>
        </Section>

        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Newcastle Business?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can help you reach more customers across Newcastle and North East England.</p>
            <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
