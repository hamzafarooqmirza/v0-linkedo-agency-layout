"use client"

import { Section } from "@/components/ui/section"
import { AnimatedButton } from "@/components/ui/animated-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "/professional-man-headshot-suit.jpg",
    bio: "15+ years in digital marketing, previously led growth at two successful startups.",
    slug: "alex-thompson",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Chen",
    role: "Head of SEO",
    image: "/professional-woman-headshot.png",
    bio: "SEO specialist with a track record of driving 10x organic growth for B2B companies.",
    slug: "sarah-chen",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    image: "/developer-man-headshot-casual.jpg",
    bio: "Full-stack developer specializing in React, Next.js, and scalable web applications.",
    slug: "james-wilson",
    linkedin: "#",
  },
  {
    name: "Emily Parker",
    role: "Head of Paid Media",
    image: "/marketing-woman-headshot-professional.jpg",
    bio: "Google Ads and Meta certified expert managing $5M+ in annual ad spend.",
    slug: "emily-parker",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Brown",
    role: "Creative Director",
    image: "/creative-director-man-headshot.jpg",
    bio: "Award-winning designer with experience at top agencies worldwide.",
    slug: "michael-brown",
    linkedin: "#",
  },
  {
    name: "Lisa Wang",
    role: "Content Strategist",
    image: "/content-strategist-woman-headshot.jpg",
    bio: "Former journalist turned content marketer, driving thought leadership for B2B brands.",
    slug: "lisa-wang",
    linkedin: "#",
    twitter: "#",
  },
]

function TeamMemberCard({ name, role, image, bio, slug, linkedin, twitter }: (typeof teamMembers)[0]) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
      <Link href={`/team/${slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Social Links */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={14} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter size={14} />
              </a>
            )}
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-t-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-sm text-primary mb-2">{role}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>
        </div>
      </Link>
    </div>
  )
}

export function TeamClient() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Our Team
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Meet the <span className="text-gradient-primary">Linkedo Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A passionate team of marketers, developers, and strategists dedicated to helping your business grow.
            </p>
          </div>
        </Section>

        {/* Team Grid */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.slug} {...member} />
            ))}
          </div>
        </Section>

        {/* Join Us CTA */}
        <Section gradient>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Want to Join Our Team?</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals who are passionate about digital marketing and web
              development.
            </p>
            <Link href="/careers">
              <AnimatedButton size="lg">
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </Link>
          </div>
        </Section>
      </main>
    </div>
  )
}

export default TeamClient
