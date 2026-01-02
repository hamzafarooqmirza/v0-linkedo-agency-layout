import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { PricingCalculator } from "@/components/forms/pricing-calculator"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react"

const teamData = {
  "alex-thompson": {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=500&width=500",
    bio: "Alex founded Linkedo Agency in 2018 with a vision to create a digital marketing agency that truly delivers results. With over 15 years of experience in the industry, he has led growth initiatives at two successful startups before starting Linkedo.",
    skills: ["Digital Strategy", "Business Development", "Team Leadership", "Client Relations"],
    experience: [
      { company: "Linkedo Agency", role: "Founder & CEO", years: "2018 - Present" },
      { company: "GrowthTech Inc.", role: "VP of Marketing", years: "2014 - 2018" },
      { company: "StartupXYZ", role: "Head of Growth", years: "2010 - 2014" },
    ],
    linkedin: "#",
    twitter: "#",
    email: "alex@linkedo.agency",
    featuredProjects: [
      {
        title: "300% Increase in Organic Traffic",
        client: "TechFlow SaaS",
        description: "Led the strategy for a comprehensive SEO overhaul.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Strategy", "SEO"],
        href: "/case-studies/techflow",
      },
    ],
  },
  "sarmad-shabir": {
    name: "Sarmad Shabir",
    role: "Senior Google Ads Expert & Account Manager",
    image: "/placeholder.svg?height=500&width=500",
    bio: "Sarmad Shabir is a Senior Google Ads specialist with hands-on experience managing and scaling paid advertising campaigns for businesses, primarily across the UK market. Since starting his career in Google Ads in 2022, Sarmad has worked with a wide range of clients, focusing on lead generation, eCommerce growth, and high-intent search campaigns.\n\nHe specialises in building structured, data-driven Google Ads accounts that prioritise return on ad spend, cost efficiency, and long-term account stability. As both an ads expert and account manager, Sarmad works closely with clients to understand business goals, optimise performance, and deliver measurable results through continuous testing and optimisation.",
    skills: [
      "Google Ads Strategy",
      "Search & Performance Max Campaigns",
      "Lead Generation Funnels",
      "Conversion Tracking & GA4",
      "Budget & ROAS Management",
      "Client Account Management",
    ],
    experience: [{ company: "Linkedo Agency", role: "Senior Google Ads Expert & Manager", years: "2022 - Present" }],
    facebook: "https://www.facebook.com/share/17ocekwB1v/",
    instagram: "https://www.instagram.com/onlinemarketinghub2025?igsh=YTlueXd3OGh6ZzRt",
    portfolioTitle: "Google Ads Campaigns Managed by Sarmad",
    portfolioDescription:
      "A selection of Google Ads campaigns planned, managed, and optimised by Sarmad for UK-based clients, focused on lead generation, scalability, and measurable performance improvements.",
    featuredProjects: [
      {
        title: "Lead Generation Campaign",
        client: "UK Business Services",
        description: "Optimized Google Ads campaign for lead generation",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Google Ads", "Lead Gen"],
        href: "#",
      },
      {
        title: "eCommerce Growth Strategy",
        client: "UK Online Retailer",
        description: "Performance Max campaign driving eCommerce sales",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Google Ads", "eCommerce"],
        href: "#",
      },
    ],
  },
}

export function generateStaticParams() {
  return [
    { slug: "alex-thompson" },
    { slug: "sarah-chen" },
    { slug: "james-wilson" },
    { slug: "emily-parker" },
    { slug: "michael-brown" },
    { slug: "lisa-wang" },
    { slug: "sarmad-shabir" }, // Adding Sarmad Shabir to static params
  ]
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = teamData[slug as keyof typeof teamData] || teamData["alex-thompson"]

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-8">
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{member.name}</h1>
              <p className="text-xl text-primary mb-6">{member.role}</p>

              {/* Social links */}
              <div className="flex items-center gap-4 mb-8">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{member.bio}</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <div key={skill} className="bg-secondary text-primary rounded px-2 py-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Experience</h2>
                <div className="space-y-4">
                  {member.experience.map((exp, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} · {exp.years}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Projects / Portfolio */}
        {member.featuredProjects && member.featuredProjects.length > 0 && (
          <Section eyebrow="Featured Work" title={member.portfolioTitle || "Projects Led"}>
            {member.portfolioDescription && (
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">{member.portfolioDescription}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {member.featuredProjects.map((project) => (
                <CaseStudyCard key={project.title} {...project} />
              ))}
            </div>
          </Section>
        )}

        {/* Pricing Calculator Section */}
        <Section eyebrow="Pricing" title="Starting Pricing Calculator">
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get an instant estimate for services managed by {member.name.split(" ")[0]}. Select your requirements to see
            starting prices.
          </p>
          <PricingCalculator />
        </Section>

        {/* CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Want to Work With {member.name.split(" ")[0]}?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get in touch to discuss how our team can help your business grow.
            </p>
            <Link href="/contact">
              <AnimatedButton size="lg">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>
      </main>
    </div>
  )
}
