import { Section } from "@/components/ui/section"
import { LocationCard } from "@/components/ui/location-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { ArrowRight, Target, Heart, Zap, Users, Building2, Briefcase, ShoppingCart, Stethoscope } from "lucide-react"

export const metadata = {
  title: "About Us | Linkedo Agency",
  description:
    "Learn about Linkedo Agency, our story, values, and the team behind our success in digital marketing and web development.",
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy we implement is tied to measurable outcomes. If it doesn't move the needle, we don't do it.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We treat every client's business like our own and go the extra mile.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of industry trends and continuously evolve our methods to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "No hidden agendas or black-box tactics. You'll always know exactly what we're doing and why.",
  },
]

const clientTypes = [
  {
    icon: Building2,
    title: "B2B Companies",
    description: "SaaS, professional services, and enterprise businesses looking to generate qualified leads.",
  },
  {
    icon: Briefcase,
    title: "Startups & Scale-ups",
    description: "Growing companies that need to establish market presence and scale customer acquisition.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Brands",
    description: "Online retailers focused on driving traffic, conversions, and customer lifetime value.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Legal",
    description: "Regulated industries requiring compliant marketing with a focus on trust and authority.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-gradient-primary">Linkedo</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of digital marketing experts and developers passionate about helping businesses grow online
              through data-driven strategies.
            </p>
          </div>
        </Section>

        {/* Our Story */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Built by Marketers, for Marketers</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Linkedo was founded in 2018 by a team of digital marketing veterans who were frustrated with agencies
                  that over-promised and under-delivered. We set out to create something different: an agency that
                  treats results as the only metric that matters.
                </p>
                <p>
                  Today, we've helped over 150 businesses across the UK, US, and beyond achieve their growth goals
                  through strategic web development, SEO, and paid advertising. Our approach combines deep technical
                  expertise with creative problem-solving to deliver solutions that actually work.
                </p>
                <p>
                  With offices in London and Mirpur, we offer the best of both worlds: UK-based strategy and account
                  management with a talented global development team that enables us to deliver exceptional quality at
                  competitive rates.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2018</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Our Values */}
        <Section
          eyebrow="Our Principles"
          title="What We Stand For"
          description="The core values that guide everything we do."
          gradient
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Section>

        {/* Where We Operate */}
        <Section
          eyebrow="Global Presence"
          title="Where We Operate"
          description="Serving clients worldwide from our offices in the UK and Pakistan."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <LocationCard
              city="London"
              country="United Kingdom"
              flag="🇬🇧"
              href="/uk/london"
              description="Our UK headquarters, home to strategy, sales, and client success teams."
            />
            <LocationCard
              city="Mirpur"
              country="AJK, Pakistan"
              flag="🇵🇰"
              href="/pk/mirpur"
              description="Our development and operations hub with 24/7 support capability."
            />
          </div>
        </Section>

        {/* Who We Work Best With */}
        <Section eyebrow="Our Clients" title="Who We Work Best With" gradient>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientTypes.map((type) => {
              const Icon = type.icon
              return (
                <div
                  key={type.title}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Work With Us?</h2>
            <p className="text-muted-foreground mb-8">
              Get to know our team and see how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/team">
                <AnimatedButton size="lg">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/contact">
                <AnimatedButton variant="secondary" size="lg">
                  Contact Us
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
