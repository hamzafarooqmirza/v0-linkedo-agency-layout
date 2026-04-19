import { Section } from "@/components/ui/section"
import { LocationCard } from "@/components/ui/location-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export const metadata = {
  title: "Our Locations | Linkedo",
  description:
    "Linkedo serves businesses across major UK cities including London, Manchester, Birmingham, Leeds, Bristol, Edinburgh and more. Find your local digital marketing experts.",
  alternates: { canonical: "/locations" },
}

const ukCities = [
  {
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/london",
    description: "Our headquarters. Expert SEO, web development, and paid ads for London businesses.",
  },
  {
    city: "Manchester",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/manchester",
    description: "Driving digital growth for businesses across Greater Manchester and the North West.",
  },
  {
    city: "Birmingham",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/birmingham",
    description: "Helping Midlands businesses dominate search results and generate more leads.",
  },
  {
    city: "Leeds",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/leeds",
    description: "Strategic digital marketing for Yorkshire businesses ready to scale.",
  },
  {
    city: "Bristol",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/bristol",
    description: "Full-service digital agency support for South West businesses and startups.",
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/edinburgh",
    description: "Specialist SEO and marketing services for Scottish businesses.",
  },
  {
    city: "Glasgow",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/glasgow",
    description: "Connecting Glasgow companies with customers through smart digital strategies.",
  },
  {
    city: "Liverpool",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/liverpool",
    description: "Results-driven digital marketing for businesses in Liverpool and Merseyside.",
  },
  {
    city: "Sheffield",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/sheffield",
    description: "Helping Sheffield businesses grow online with proven SEO and paid media.",
  },
  {
    city: "Nottingham",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/nottingham",
    description: "Local SEO and digital services tailored to East Midlands businesses.",
  },
  {
    city: "Leicester",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/leicester",
    description: "Comprehensive digital marketing solutions for businesses in Leicester.",
  },
  {
    city: "Newcastle",
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/newcastle",
    description: "Expert digital growth strategies for North East England businesses.",
  },
]

const stats = [
  { value: "12+", label: "UK Cities Served" },
  { value: "150+", label: "UK Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "5+", label: "Years in the UK" },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Locations
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Serving Businesses Across the{" "}
              <span className="text-gradient-primary">United Kingdom</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              Based in London, we deliver expert SEO, web development, and paid advertising services to
              businesses in every major UK city. Local knowledge, national reach.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Headquarters: 483 Green Lanes, London N13 4BS, United Kingdom</span>
            </div>
          </div>
        </Section>

        {/* Stats */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card/50 border border-border/50 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* City Grid */}
        <Section
          eyebrow="UK Coverage"
          title="Find Your Local Team"
          description="Select your city to discover how Linkedo can help your business grow in your local market."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukCities.map((location) => (
              <LocationCard key={location.city} {...location} />
            ))}
          </div>
        </Section>

        {/* Not listed CTA */}
        <Section>
          <div className="max-w-2xl mx-auto text-center rounded-2xl border border-border/50 bg-card/50 p-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Don&apos;t see your city?
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
              We Work With Businesses Anywhere in the UK
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our services are fully remote-friendly. Whether you are in Plymouth, Aberdeen, or anywhere in
              between, we can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton size="lg">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/services">
                <AnimatedButton variant="secondary" size="lg">
                  View Our Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
