import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { PricingCalculator } from "@/components/forms/pricing-calculator"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"

const teamData = {
  "waleed-sabbir": {
    name: "Waleed Sabbir",
    role: "Digital Marketing Specialist & Campaign Manager",
    image: "/waleed-sabbir.webp",
    bio: "Waleed Sabbir is a Digital Marketing Specialist with over three years of hands-on experience delivering performance-focused marketing solutions for service-based and online businesses. His work spans paid advertising, campaign optimisation, and strategic planning, with a strong emphasis on generating consistent leads and measurable growth.\n\nSince entering the digital marketing field, Waleed has worked across multiple client accounts, helping businesses improve visibility, control acquisition costs, and scale campaigns with a structured, data-driven approach. He is known for his attention to detail, analytical mindset, and ability to translate business goals into practical marketing actions.",
    skills: [
      "Digital Marketing Strategy",
      "Google Ads Campaign Management",
      "Lead Generation & Funnel Optimisation",
      "Performance Tracking & Reporting",
      "Conversion Optimisation",
      "Client Communication & Account Support",
    ],
    experience: [{ company: "Linkedo Agency", role: "Digital Marketing Specialist", years: "2021 - Present" }],
    linkedin: "#",
    twitter: "#",
  },
  "sarmad-shabir": {
    name: "Sarmad Shabir",
    role: "Senior Google Ads Expert & Account Manager",
    image: "/sarmad-shabir.jpg",
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
      "A selection of Google Ads campaigns planned, managed, and optimised by Sarmad for UK-based clients, focused on lead generation, efficiency, and measurable growth.",
    googleAdsPortfolio: [
      {
        image: "/sarmad-google-ads-1.jpeg",
        caption: "UK Lead Generation Campaign",
      },
      {
        image: "/sarmad-google-ads-2.jpeg",
        caption: "Search & Conversion-Focused Campaign Structure",
      },
      {
        image: "/sarmad-google-ads-3.jpeg",
        caption: "Google Ads Performance Optimisation",
      },
      {
        image: "/sarmad-google-ads-4.jpeg",
        caption: "Weekly Campaign Performance Overview",
      },
    ],
  },
  "jamshaid-ahmed": {
    name: "Jamshaid Ahmed",
    role: "Google Ads Expert",
    image: "/jamshaid-ahmed.jpg",
    bio: "Jamshaid Ahmed is a Google Ads Expert with hands-on experience managing and optimising paid advertising campaigns focused on lead generation and performance growth. He works closely with campaign data, audience targeting, and conversion tracking to ensure advertising budgets are used efficiently and deliver measurable results.\n\nHis approach is practical and performance-driven, with a strong focus on campaign structure, keyword intent, and continuous optimisation to improve lead quality and reduce cost per acquisition.",
    skills: [
      "Google Ads Campaign Setup & Optimisation",
      "Lead Generation Campaigns",
      "Keyword Research & Search Intent",
      "Conversion Tracking & Performance Analysis",
      "Budget & Cost Optimisation",
    ],
    experience: [{ company: "Linkedo Agency", role: "Google Ads Expert", years: "2023 - Present" }],
    instagram: "https://www.instagram.com/themarketinglab229?igsh=MXhibzRjNmk2Zjd4bg%3D%3D&utm_source=qr",
    snapchat: "https://snapchat.com/t/lkjBwzS5",
    whatsapp: "https://wa.me/923408986192",
    portfolioTitle: "Google Ads Campaign Work by Jamshaid",
    portfolioDescription:
      "A selection of Google Ads campaign work managed by Jamshaid, focused on lead generation, optimisation, and performance improvements.",
    googleAdsPortfolio: [
      {
        image: "/jamshaid-google-ads-1.jpg",
        caption: "Campaign Performance Overview",
      },
      {
        image: "/jamshaid-google-ads-2.jpg",
        caption: "Multi-Campaign Management Dashboard",
      },
      {
        image: "/jamshaid-google-ads-3.jpg",
        caption: "Conversion Tracking & Optimisation",
      },
      {
        image: "/jamshaid-google-ads-4.jpg",
        caption: "Cost Per Conversion Analysis",
      },
    ],
  },
}

export function generateStaticParams() {
  return [
    { slug: "waleed-sabbir" },
    { slug: "sarmad-shabir" },
    { slug: "jamshaid-ahmed" },
  ]
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = teamData[slug as keyof typeof teamData] || teamData["waleed-sabbir"]

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-8">
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={`${member.name} – ${member.role}`}
                className="w-full h-full object-cover"
              />
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
                {member.snapchat && (
                  <a
                    href={member.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <MessageCircle size={18} />
                  </a>
                )}
                {member.whatsapp && (
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <MessageCircle size={18} />
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

        {member.googleAdsPortfolio && member.googleAdsPortfolio.length > 0 && (
          <Section eyebrow="Portfolio" title={member.portfolioTitle || "Featured Work"}>
            {member.portfolioDescription && (
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                {member.portfolioDescription}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {member.googleAdsPortfolio.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground text-center">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Featured Projects / Portfolio */}
        {member.featuredProjects && member.featuredProjects.length > 0 && (
          <Section eyebrow="Featured Work" title={member.portfolioTitle || "Projects Led"}>
            {member.portfolioDescription && !member.googleAdsPortfolio && (
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
