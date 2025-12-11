import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react"

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
}

export function generateStaticParams() {
  return [
    { slug: "alex-thompson" },
    { slug: "sarah-chen" },
    { slug: "james-wilson" },
    { slug: "emily-parker" },
    { slug: "michael-brown" },
    { slug: "lisa-wang" },
  ]
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = teamData[slug as keyof typeof teamData] || teamData["alex-thompson"]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-8">
          <Breadcrumbs items={[{ label: "Team", href: "/team" }, { label: member.name }]} />

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
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
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

        {/* Featured Projects */}
        {member.featuredProjects && member.featuredProjects.length > 0 && (
          <Section eyebrow="Featured Work" title="Projects Led">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {member.featuredProjects.map((project) => (
                <CaseStudyCard key={project.title} {...project} />
              ))}
            </div>
          </Section>
        )}

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

      <Footer />
    </div>
  )
}
