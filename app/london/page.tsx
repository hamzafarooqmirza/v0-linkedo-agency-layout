import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/ui/service-card"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Building2, Check } from "lucide-react"

const londonLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MarketingAgency", "LocalBusiness"],
  "@id": "https://linkedo.co.uk/london#localbusiness",
  name: "Linkedo Agency – London",
  alternateName: "Linkedo LTD",
  url: "https://linkedo.co.uk/london",
  logo: "https://linkedo.co.uk/favicon.png",
  image: "https://linkedo.co.uk/tower-bridge-sunset-london.webp",
  description:
    "UK-registered digital marketing agency serving London businesses with web development, SEO, Google Ads, and Meta Ads strategies that deliver measurable results.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.623267,
    longitude: -0.108382,
  },
  hasMap: "https://maps.google.com/?cid=e56bfd29ae92d60b",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
    url: "https://linkedo.co.uk/contact",
  },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Bank Transfer, Credit Card",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "London Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: "https://linkedo.co.uk/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://linkedo.co.uk/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://linkedo.co.uk/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads", url: "https://linkedo.co.uk/meta-ads" } },
    ],
  },
  parentOrganization: { "@id": "https://linkedo.co.uk/#organization" },
}

const londonBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
    { "@type": "ListItem", position: 2, name: "London", item: "https://linkedo.co.uk/london" },
  ],
}

export const metadata = {
  title: "Digital Marketing Agency in London | Linkedo Agency",
  description:
    "Linkedo Agency is a UK-registered digital marketing agency serving London businesses with web development, SEO, and paid advertising services.",
}

const services = [
  {
    iconName: "Code",
    title: "Website Development",
    description: "Custom websites for London businesses built for performance and conversion.",
    href: "/london/website-development",
  },
  {
    iconName: "Search",
    title: "SEO Services",
    description: "Local and national SEO strategies to help London businesses rank higher.",
    href: "/london/seo",
  },
  {
    iconName: "BarChart3",
    title: "Google Ads Management",
    description: "PPC campaigns targeting London and UK-wide audiences with maximum ROI.",
    href: "/london/google-ads-management",
  },
  {
    iconName: "Megaphone",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising for London-based brands.",
    href: "/london/meta-ads",
  },
  {
    iconName: "Shield",
    title: "Security Services",
    description: "Website security audits and protection for UK businesses.",
    href: "/london/security",
  },
]

const ukBenefits = [
  "UK-registered company with local accountability",
  "Understanding of UK business culture and regulations",
  "GDPR-compliant processes and data handling",
  "GBP billing with no currency conversion fees",
  "Overlapping business hours for real-time communication",
  "Access to UK-based talent and partners",
]

const caseStudy = {
  title: "200% Increase in Qualified Leads",
  client: "London Finance Co.",
  description:
    "How we helped a London-based financial services firm double their qualified lead generation in 4 months.",
  image: "/london-finance-office-modern.jpg",
  tags: ["SEO", "Google Ads", "London"],
  href: "/case-studies/london-finance",
}

export default function LondonPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup schema={londonLocalBusinessSchema} />
      <SchemaMarkup schema={londonBreadcrumbSchema} />
      <main className="pt-24">
        {/* Hero */}
        <div
          className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tower-bridge-sunset-london.webp')" }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/75" />

          <Section className="pt-8 relative">
            <div className="max-w-4xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇬🇧</span>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">United Kingdom</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Digital Marketing Agency in <span className="text-gradient-primary">London</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We help London businesses grow online with data-driven web development, SEO, and advertising strategies
                that deliver measurable results and real ROI.
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
                    View London Services
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* Services for London */}
        <Section
          id="services"
          eyebrow="London Services"
          title="What We Offer London Businesses"
          description="Full-service digital marketing tailored for the London market."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} icon={service.iconName} />
            ))}
          </div>
        </Section>

        {/* Why UK Agency */}
        <Section gradient>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Work With a UK-Registered Agency
              </h2>
              <p className="text-muted-foreground mb-8">
                As a UK-registered company, we understand the unique needs of London businesses and provide the
                accountability and expertise you expect from a local partner.
              </p>
              <ul className="space-y-4">
                {ukBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our London Presence</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">London, United Kingdom</p>
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
                    <p className="font-medium text-foreground">Registration</p>
                    <p className="text-sm text-muted-foreground">UK Companies House Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="order-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Greenland%20Dock%20in%20London.-iWeIi9X2GW3PUcRnoCLgpBxFwJrLZ8.webp"
                  alt="Greenland Dock in London showing modern waterfront development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Local Insight from London's Business Districts
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
                Based around Greenland Dock and the surrounding Rotherhithe area, this part of London reflects a mix of
                modern businesses, growing agencies, and established service companies. Linkedo works with organisations
                in and around London's key commercial districts, delivering web development, SEO, and digital
                advertising solutions designed for competitive, fast-moving markets. Our work focuses on clarity,
                performance, and long-term growth, supporting businesses that need dependable digital systems rather
                than short-term fixes.
              </p>
            </div>
          </div>
        </Section>

        {/* Location Map */}
        <Section eyebrow="Our Location" title="Visit Us in London">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/30 border border-border/50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.9968586277364!2d-0.10838162347868145!3d51.62326670223237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487619778746806d%3A0xe56bfd29ae92d60b!2sLinkedo%20LTD!5e0!3m2!1sen!2s!4v1767333745617!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Linkedo LTD</h3>
                  <p className="text-sm text-muted-foreground">483 Green Lanes, London N13 4BS, United Kingdom</p>
                </div>
                <Link href="/contact">
                  <AnimatedButton variant="secondary" size="sm">
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section eyebrow="Case Study" title="London Client Success">
          <div className="max-w-2xl mx-auto">
            <CaseStudyCard {...caseStudy} />
          </div>
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Grow Your London Business?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you reach more customers in London and beyond.
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
