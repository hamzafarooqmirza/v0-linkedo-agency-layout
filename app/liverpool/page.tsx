import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

export const metadata = {
  title: "Digital Marketing Agency in Liverpool | Linkedo Agency",
  description:
    "Linkedo Agency delivers expert SEO, web development, and paid advertising for Liverpool businesses. Grow your Merseyside brand with results-driven digital marketing.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Fast, conversion-focused websites for Liverpool businesses built to perform.",
    href: "/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO to help Liverpool businesses rank higher and attract more customers.",
    href: "/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting Liverpool and Merseyside audiences with maximum return on investment.",
    href: "/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Social advertising strategies built for Liverpool's diverse consumer and business markets.",
    href: "/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security solutions for Liverpool-based businesses.",
    href: "/consulting",
  },
]

const benefits = [
  "Deep knowledge of the Merseyside business landscape",
  "Strategies built around Liverpool's key industries",
  "GDPR-compliant processes throughout",
  "Transparent GBP pricing and monthly reporting",
  "Focus on leads, conversions, and revenue growth",
  "Full-service support from initial strategy to ongoing optimisation",
]

const caseStudy = {
  title: "170% Growth in Online Enquiries",
  client: "Liverpool Hospitality Group",
  description:
    "How we helped a Liverpool-based hospitality business grow their online bookings and enquiries significantly through targeted local SEO and paid social campaigns.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["Local SEO", "Meta Ads", "Liverpool"],
  href: "/case-studies",
}

export default function LiverpoolPage() {
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
                Digital Marketing Agency in <span className="text-gradient-primary">Liverpool</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Liverpool businesses grow online with results-driven SEO, web development, and paid
                advertising designed to reach customers across Merseyside and beyond.
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
                    View Liverpool Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Liverpool Services"
          title="What We Offer Liverpool Businesses"
          description="Full-service digital marketing for Merseyside businesses ready to scale."
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
                Why Liverpool Businesses Choose Linkedo
              </h2>
              <p className="text-muted-foreground mb-8">
                Liverpool is a city with a powerful commercial identity spanning logistics, hospitality, retail,
                and a fast-growing digital economy. We help Liverpool businesses build the kind of online presence
                that drives consistent, measurable growth.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Liverpool and Merseyside</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Liverpool, Merseyside, UK</p>
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
                    <p className="text-sm text-muted-foreground">Liverpool, Wirral, St Helens, Warrington &amp; beyond</p>
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
                  alt="Modern waterfront representing Liverpool's thriving commercial and cultural economy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Driving Digital Growth Across Merseyside
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Liverpool's waterfront economy, thriving hospitality scene, and growing professional services
                sector create a dynamic and competitive digital environment. Businesses here need more than a
                basic website, they need a full digital strategy that generates leads and builds authority.
                Linkedo delivers SEO, web development, and paid media solutions built around Liverpool's
                specific market conditions to help local businesses grow consistently and profitably.
              </p>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="Liverpool Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Grow Your Liverpool Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers across Liverpool and Merseyside.
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
