import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

export const metadata = {
  title: "Digital Marketing Agency in Sheffield | Linkedo Agency",
  description:
    "Linkedo Agency delivers expert SEO, web development, and paid media for Sheffield businesses. Grow your South Yorkshire brand with proven digital marketing that drives results.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Professional websites built for Sheffield businesses that need to convert and compete.",
    href: "/services/web-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO strategies helping Sheffield businesses rank higher on Google.",
    href: "/services/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "ROI-focused PPC campaigns targeting Sheffield and South Yorkshire customers.",
    href: "/services/google-ads",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Social media advertising for Sheffield businesses targeting local and national audiences.",
    href: "/services/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Comprehensive website security for Sheffield-based businesses.",
    href: "/services/security",
  },
]

const benefits = [
  "South Yorkshire market knowledge and competitor insight",
  "Strategies built for Sheffield's manufacturing and digital sectors",
  "GDPR-compliant from strategy through to delivery",
  "Transparent pricing and regular performance reporting",
  "Campaigns focused on qualified leads and revenue",
  "Dedicated support for every Sheffield client",
]

const caseStudy = {
  title: "160% Rise in Local Search Rankings",
  client: "Sheffield Engineering Firm",
  description:
    "How we helped a Sheffield manufacturing and engineering business dramatically improve their local search visibility and generate a consistent stream of qualified enquiries.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp",
  tags: ["Local SEO", "Google Ads", "Sheffield"],
  href: "/case-studies",
}

export default function SheffieldPage() {
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
                Digital Marketing Agency in <span className="text-gradient-primary">Sheffield</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help Sheffield businesses grow online with proven SEO, web development, and paid media
                strategies that generate leads and deliver real commercial results across South Yorkshire.
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
                    View Sheffield Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        <Section id="services" eyebrow="Sheffield Services" title="What We Offer Sheffield Businesses" description="Full-service digital marketing for South Yorkshire businesses.">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Sheffield Businesses Choose Linkedo</h2>
              <p className="text-muted-foreground mb-8">
                Sheffield's economy spans advanced manufacturing, digital, creative, and professional services. We build digital strategies that help Sheffield businesses stand out, attract customers, and grow sustainably.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Serving Sheffield and South Yorkshire</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Location</p><p className="text-sm text-muted-foreground">Sheffield, South Yorkshire, UK</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Time Zone</p><p className="text-sm text-muted-foreground">GMT / BST (UK Time)</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium text-foreground">Coverage</p><p className="text-sm text-muted-foreground">Sheffield, Rotherham, Doncaster, Barnsley &amp; beyond</p></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 rounded-2xl overflow-hidden">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp" alt="Modern waterfront representing Sheffield's evolving business and industrial landscape" className="w-full h-full object-cover" />
            </div>
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Digital Growth for Sheffield's Evolving Economy</h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Sheffield is transforming from its industrial roots into a modern city with a vibrant digital, creative, and advanced manufacturing economy. Businesses across the city are competing online for the first time, and those that invest in SEO, paid media, and strong web presence early gain a lasting advantage. Linkedo works with Sheffield businesses to build that advantage through clear digital strategies and consistent execution.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Case Study" title="Sheffield Client Success">
          <div className="max-w-2xl mx-auto"><CaseStudyCard {...caseStudy} /></div>
        </Section>

        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Sheffield Business?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can help you reach more customers across Sheffield and South Yorkshire.</p>
            <Link href="/contact"><AnimatedButton size="lg">Book a Strategy Call<ArrowRight className="w-4 h-4" /></AnimatedButton></Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
