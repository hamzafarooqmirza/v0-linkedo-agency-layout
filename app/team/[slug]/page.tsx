import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { PricingCalculator } from "@/components/forms/pricing-calculator"
import { FloatingWhatsAppButton } from "@/components/ui/floating-whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter, Mail, Facebook, Instagram, Music } from "lucide-react"

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
  "waleed-hussain": {
    name: "Waleed Hussain",
    role: "Google Ads Specialist",
    image: "/waleed-hussain.jpg",
    bio: "Waleed Hussain is a Google Ads specialist with strong expertise in managing, optimising, and scaling paid advertising campaigns focused on lead generation and performance growth. His work centres around search intent, campaign structure, and continuous optimisation to improve conversion quality and reduce cost per acquisition.\n\nHe works with data-driven strategies to ensure Google Ads campaigns remain efficient, competitive, and aligned with business goals.",
    skills: [
      "Google Ads Campaign Setup & Optimisation",
      "Lead Generation Campaigns",
      "Keyword Research & Search Intent",
      "Conversion Tracking & Performance Monitoring",
      "Budget Control & Cost Optimisation",
    ],
    experience: [{ company: "Linkedo Agency", role: "Google Ads Specialist", years: "2023 - Present" }],
    facebook: "https://www.facebook.com/share/17qrvBVWeA/?mibextid=wwXIfr",
    whatsapp: "https://wa.me/923411153794",
    portfolioTitle: "Google Ads Campaign Work by Waleed",
    portfolioDescription:
      "A selection of Google Ads campaigns managed and optimised by Waleed, focused on lead generation, efficiency, and performance improvement.",
    googleAdsPortfolio: [
      {
        image: "/waleed-google-ads-1.jpg",
        caption: "All-Time Campaign Performance Overview",
      },
      {
        image: "/waleed-google-ads-2.jpg",
        caption: "14-Day Performance Tracking",
      },
      {
        image: "/waleed-google-ads-3.jpg",
        caption: "30-Day Campaign Analysis",
      },
      {
        image: "/waleed-google-ads-4.jpg",
        caption: "Monthly Performance Dashboard",
      },
      {
        image: "/waleed-google-ads-5.jpg",
        caption: "Weekly Campaign Metrics",
      },
      {
        image: "/waleed-google-ads-6.jpg",
        caption: "Daily Performance Overview",
      },
    ],
  },
  "kawish-azeem": {
    name: "Kawish Azeem",
    role: "Digital Advertising Specialist",
    image: "/kawish-azeem.jpg",
    bio: "Kawish Azeem is a Digital Advertising Specialist with experience working across multiple paid marketing platforms, helping businesses increase visibility and generate consistent leads. His work focuses on campaign execution, audience targeting, and performance optimisation to ensure advertising efforts deliver measurable outcomes.\n\nHe takes a practical, results-driven approach to digital advertising, continuously refining campaigns based on data insights and platform performance.",
    skills: [
      "Paid Advertising Campaign Management",
      "Audience Targeting & Ad Optimisation",
      "Performance Analysis & Reporting",
      "Lead Generation Strategies",
      "Cross-Platform Advertising Support",
    ],
    experience: [{ company: "Linkedo Agency", role: "Digital Advertising Specialist", years: "2023 - Present" }],
    linkedin: "https://www.linkedin.com/in/kawish-azeem-18911b309",
    facebook: "https://www.facebook.com/profile.php?id=100067481554025",
    tiktok: "https://www.tiktok.com/@digiadpro1",
    whatsapp: "https://wa.me/923169048835",
    portfolioTitle: "Advertising Campaign Work by Kawish",
    portfolioDescription:
      "A selection of digital advertising campaign work managed by Kawish, focused on performance optimisation, reach, and lead generation.",
    googleAdsPortfolio: [
      {
        image: "/kawish-google-ads-1.jpg",
        caption: "Long-Term Campaign Performance Overview",
      },
      {
        image: "/kawish-google-ads-2.jpg",
        caption: "Multi-Year Campaign Growth Analysis",
      },
      {
        image: "/kawish-google-ads-3.jpg",
        caption: "Daily Performance Tracking",
      },
      {
        image: "/kawish-google-ads-4.jpg",
        caption: "Mid-Year Campaign Results",
      },
      {
        image: "/kawish-google-ads-5.jpg",
        caption: "Recent Performance Dashboard",
      },
      {
        image: "/kawish-google-ads-6.jpg",
        caption: "Monthly Campaign Metrics",
      },
      {
        image: "/kawish-google-ads-7.jpg",
        caption: "Quarterly Performance Analysis",
      },
    ],
  },
}

export function generateStaticParams() {
  return [
    { slug: "waleed-sabbir" },
    { slug: "sarmad-shabir" },
    { slug: "jamshaid-ahmed" },
    { slug: "waleed-hussain" },
    { slug: "kawish-azeem" },
  ]
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = teamData[slug as keyof typeof teamData] || teamData["waleed-sabbir"]

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      {member.whatsapp && <FloatingWhatsAppButton phoneNumber={member.whatsapp.replace('https://wa.me/', '')} />}
      
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
                {member.tiktok && (
                  <a
                    href={member.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Music size={18} />
                  </a>
                )}
                {member.snapchat && (
                  <a
                    href={member.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-1.5.645-2.046 1.073-2.046.27 0 .528.18.528.435 0 .225-.3.54-.705.735-.42.18-.735.24-1.065.24-.48 0-.705-.24-1.065-.586-.24-.255-.54-.555-1.065-.675v.015c-.09 1.35-.36 2.386-1.065 3.391-.5.75-1.245 1.345-2.13 1.905l-.016.014c-.285.18-.57.375-.87.586-.12.09-.24.195-.36.3-.27.24-.495.435-.645.585-.03.03-.075.075-.165.225-.075.15-.135.24-.21.3-.09.075-.165.12-.27.18l-.016.014c-.105.06-.21.12-.3.195l-.016.014c-.12.09-.195.18-.195.27 0 .045.015.09.045.12.03.045.075.06.12.075l.015.015c.12.03.315.015.645-.045l.015-.015c.44-.074.915-.239 1.515-.449l.09-.03c.415-.15.825-.27 1.245-.345.12-.015.255-.030.375-.030.375 0 .75.105 1.065.345.435.345.645.915.645 1.53 0 .96-.435 1.875-1.245 2.445-.42.3-.885.495-1.365.645l-.09.03c-.435.12-.9.195-1.38.195-.375 0-.765-.045-1.14-.135l-.09-.015c-.495-.105-.96-.3-1.38-.615-.24-.18-.495-.42-.705-.69-.21-.27-.375-.555-.465-.87l-.015-.09c-.03-.135-.045-.27-.045-.405 0-.12.015-.24.045-.375l.015-.105c.03-.135.075-.27.135-.405l.045-.09c.105-.24.24-.48.42-.705l.015-.03c.18-.225.39-.435.615-.63l.015-.015c.24-.21.495-.405.765-.57l.03-.015c.27-.165.54-.3.825-.42l.045-.015c.285-.12.57-.195.87-.24l.015-.015c.225-.03.435-.045.645-.045.165 0 .33.015.48.045l.09.015c.135.015.255.045.375.09 0-.015 0-.015.015-.03l.015-.015c.03-.03.045-.06.075-.105l.015-.015c.09-.135.165-.27.24-.42l.015-.03c.03-.06.045-.12.075-.18 0-.015.015-.03.015-.06.03-.105.045-.195.045-.3 0-.015 0-.045-.015-.075-.015-.015-.015-.045-.03-.06l-.015-.03c-.015-.015-.045-.045-.075-.06-.075-.045-.18-.090-.345-.12l-.015-.015c-.405-.09-.735-.3-.99-.585l-.015-.015c-.255-.3-.435-.645-.57-1.02l-.015-.045c-.105-.3-.165-.615-.195-.945l-.015-.075c-.015-.195-.015-.375-.015-.57 0-.015 0-.045.015-.06.015-.015.030-.045.030-.075l.015-.015c.090-.315.225-.585.42-.795l.045-.045c.195-.21.435-.345.72-.42l.075-.015c.195-.045.375-.060.57-.060h.015c.3 0 .585.04... <truncated>
                    </svg>
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
