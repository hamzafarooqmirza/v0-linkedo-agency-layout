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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = teamData[slug as keyof typeof teamData] || teamData["waleed-sabbir"]

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linkedo.co.uk"

  // Use the dedicated OG image for Waleed Hussain, otherwise fall back to the member's profile image
  const ogImage =
    slug === "waleed-hussain"
      ? `${baseUrl}/waleed-hussain-og.jpeg`
      : `${baseUrl}${member.image}`

  return {
    title: `${member.name} – ${member.role} | Linkedo Agency`,
    description: member.bio.split("\n")[0],
    openGraph: {
      title: `${member.name} – ${member.role}`,
      description: member.bio.split("\n")[0],
      url: `${baseUrl}/team/${slug}`,
      siteName: "Linkedo Agency",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${member.name} – ${member.role}`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} – ${member.role}`,
      description: member.bio.split("\n")[0],
      images: [ogImage],
    },
  }
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
                      <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.959.324 2.589.24 3.898l-.002.048c-.01.145-.018.278-.024.41.06.036.163.072.323.072.241-1.206.519-1.644.863-1.644.217 0 .424.145.424.35 0 .181-.241.434-.567.591-.338.145-.591.193-.856.193-.386 0-.567-.193-.856-.471-.193-.205-.434-.446-.856-.543v.012c-.072 1.085-.289 1.916-.856 2.726-.402.603-.999 1.08-1.711 1.532l-.013.011c-.229.145-.458.301-.699.471-.096.072-.193.157-.289.241-.217.193-.398.35-.519.471-.024.024-.06.06-.133.181-.06.121-.108.193-.169.241-.072.06-.133.096-.217.145l-.013.011c-.084.048-.169.096-.241.157l-.013.011c-.096.072-.157.145-.157.217 0 .036.012.072.036.096.024.036.06.048.096.06l.012.012c.096.024.253.012.519-.036l.012-.012c.353-.06.735-.192 1.218-.361l.072-.024c.334-.121.663-.217.999-.277.096-.012.205-.024.301-.024.301 0 .603.084.856.277.35.277.519.735.519 1.229 0 .771-.35 1.507-1.001 1.965-.338.241-.711.398-1.097.519l-.072.024c-.35.096-.723.157-1.109.157-.301 0-.615-.036-.916-.108l-.072-.012c-.398-.084-.771-.241-1.109-.494-.193-.145-.398-.338-.567-.555-.169-.217-.301-.446-.374-.699l-.012-.072c-.024-.108-.036-.217-.036-.326 0-.096.012-.193.036-.301l.012-.084c.024-.108.06-.217.108-.326l.036-.072c.084-.193.193-.386.338-.567l.012-.024c.145-.181.313-.35.495-.507l.012-.012c.193-.169.398-.326.615-.458l.024-.012c.217-.133.434-.241.663-.338l.036-.012c.229-.096.458-.157.699-.193l.012-.012c.181-.024.35-.036.519-.036.133 0 .265.012.386.036l.072.012c.108.012.205.036.301.072 0-.012 0-.012.012-.024l.012-.012c.024-.024.036-.048.06-.084l.012-.012c.072-.108.133-.217.193-.338l.012-.024c.024-.048.036-.096.06-.145 0-.012.012-.024.012-.048.024-.084.036-.157.036-.241 0-.012 0-.036-.012-.06-.012-.012-.012-.036-.024-.048l-.012-.024c-.012-.012-.036-.036-.06-.048-.06-.036-.145-.072-.277-.096l-.012-.012c-.326-.072-.591-.241-.795-.471l-.012-.012c-.205-.241-.35-.519-.458-.819l-.012-.036c-.084-.241-.133-.495-.157-.759l-.012-.06c-.012-.157-.012-.301-.012-.458 0-.012 0-.036.012-.048.012-.012.024-.036.024-.06l.012-.012c.072-.253.181-.471.338-.639l.036-.036c.157-.169.35-.277.579-.338l.06-.012c.157-.036.301-.048.458-.048h.012c.241 0 .471.036.699.108l.06.024c.217.06.422.157.603.289l.048.036c.181.145.338.313.471.507l.012.012c.133.193.241.398.326.615l.024.06c.072.193.12.398.145.603v.012c.012.096.012.193.012.289 0 .012 0 .036-.012.048 0 .024-.012.048-.024.072l-.012.012c-.072.253-.181.471-.338.639l-.036.036c-.157.169-.35.277-.579.338l-.06.012c-.157.036-.301.048-.458.048-.205 0-.398-.024-.579-.084l-.06-.012c-.169-.048-.326-.12-.471-.217l-.048-.036c-.145-.12-.277-.265-.386-.422l-.012-.012c-.108-.157-.193-.326-.253-.507l-.024-.06c-.06-.157-.096-.326-.108-.495v-.012c-.012-.084-.012-.169-.012-.253 0-.012 0-.036.012-.048.012-.012.024-.036.024-.06.06-.193.157-.362.289-.495l.036-.036c.133-.133.289-.229.471-.277l.048-.012c.133-.036.253-.048.386-.048.169 0 .326.024.471.072l.048.012c.145.048.277.12.398.217l.036.024c.121.096.229.217.326.35l.012.012c.096.133.169.277.217.434l.012.048c.048.133.084.277.096.422v.012c.012.072.012.145.012.217 0 .072-.012.145-.024.205l-.012.048c-.024.096-.06.181-.108.265l-.012.024c-.048.084-.108.157-.181.229l-.012.012c-.072.072-.157.133-.253.181l-.024.012c-.096.048-.205.072-.313.084h-.012c-.072.012-.145.012-.217 0l-.048-.012c-.06-.012-.12-.024-.169-.048l-.024-.012c-.048-.024-.096-.048-.133-.084l-.012-.012c-.036-.036-.072-.072-.096-.12l-.012-.012c-.024-.036-.036-.084-.048-.133v-.024c-.012-.036-.012-.072-.012-.108 0-.048.012-.096.024-.133l.012-.024c.024-.048.048-.084.084-.12l.012-.012c.036-.036.084-.06.133-.072h.012c.036-.012.072-.012.108-.012.048 0 .096.012.133.024l.024.012c.036.012.072.036.096.06l.012.012c.024.024.048.048.06.084v.012c.012.024.024.06.024.084 0 .036-.012.072-.024.096l-.012.024c-.012.024-.036.048-.06.06l-.012.012c-.024.012-.048.024-.072.024h-.012c-.024 0-.048 0-.06-.012l-.024-.012c-.012-.012-.024-.012-.036-.024v-.012c-.012-.012-.012-.024-.012-.036 0-.012 0-.024.012-.036l.012-.012c.012-.012.024-.024.048-.024h.012c.024 0 .036 0 .048.012l.012.012c.012.012.024.012.036.024v.012l.012.012c0 .012.012.024.012.036 0 .024-.012.036-.024.048l-.012.012c-.024.012-.048.024-.084.024h-.012c-.036 0-.072-.012-.096-.024l-.024-.012c-.024-.024-.048-.036-.06-.06v-.012c-.012-.024-.024-.048-.024-.084 0-.036.012-.072.036-.096l.012-.012c.024-.024.06-.036.096-.048h.012c.036 0 .072.012.096.024l.012.012c.024.012.036.036.048.06v.012c.012.024.012.048.012.072 0 .036-.012.072-.036.096l-.012.012c-.024.024-.06.036-.096.036h-.012c-.036 0-.072-.012-.096-.036l-.012-.012c-.012-.012-.024-.036-.036-.06v-.012c-.012-.024-.012-.048-.012-.072 0-.036.012-.072.036-.096l.012-.012c.036-.024.072-.036.108-.036.048 0 .084.012.12.036l.012.012c.024.024.036.06.048.096v.012c.012.036.012.072 0 .108-.012.036-.024.072-.048.096l-.012.012c-.036.024-.072.036-.12.036-.048 0-.096-.012-.133-.036l-.012-.012c-.036-.024-.06-.06-.072-.108v-.012c-.012-.036-.012-.084 0-.12.012-.048.036-.084.072-.12l.012-.012c.048-.036.096-.06.157-.06.06 0 .12.024.169.06l.012.012c.036.036.06.084.072.133v.012c.012.048.012.096-.012.145-.012.048-.048.096-.084.133l-.012.012c-.048.036-.108.06-.169.06-.072 0-.133-.024-.181-.072l-.012-.012c-.048-.048-.072-.108-.084-.181v-.012c-.012-.06-.012-.133.012-.193.024-.072.06-.133.12-.181l.012-.012c.072-.048.157-.072.241-.072.096 0 .181.024.253.084l.012.012c.06.06.096.133.12.217v.012c.012.072.012.157-.012.229-.036.084-.084.157-.157.217l-.012.012c-.084.06-.181.096-.289.096-.108 0-.205-.036-.289-.108l-.012-.012c-.072-.072-.12-.169-.133-.277v-.012c-.012-.096 0-.193.036-.277.048-.108.12-.193.217-.265l.012-.012c.108-.072.229-.108.362-.108.133 0 .253.048.35.133l.012.012c.084.084.145.193.169.326v.012c.024.12.012.241-.024.35-.048.12-.133.229-.253.313l-.012.012c-.133.084-.277.133-.434.133-.157 0-.301-.048-.422-.145l-.012-.012c-.108-.096-.181-.229-.217-.374v-.012c-.024-.133-.012-.277.048-.41.06-.145.169-.265.313-.362l.012-.012c.157-.096.338-.157.531-.157.193 0 .374.06.531.169l.012.012c.133.108.229.253.277.422v.012c.036.157.024.326-.048.483-.072.169-.205.313-.374.422l-.012.012c-.193.12-.41.181-.639.181-.229 0-.446-.06-.639-.193l-.012-.012c-.145-.12-.265-.289-.326-.483v-.012c-.048-.181-.036-.374.06-.555.096-.193.253-.362.458-.495l.012-.012c.229-.145.495-.217.771-.217.277 0 .531.084.759.241l.012.012c.181.145.313.338.386.555v.012c.06.205.048.434-.072.639-.12.217-.301.41-.543.567l-.012.012c-.265.169-.579.265-.916.265-.338 0-.651-.096-.916-.277l-.012-.012c-.205-.157-.362-.374-.458-.627v-.012c-.072-.241-.06-.507.072-.735.133-.253.35-.471.639-.639l.012-.012c.313-.193.675-.301 1.073-.301.398 0 .759.12 1.073.338l.012.012c.241.181.422.434.531.723v.012c.084.265.084.555-.06.819-.145.289-.398.543-.723.735l-.012.012c-.362.217-.783.338-1.242.338-.458 0-.88-.12-1.242-.362l-.012-.012c-.265-.193-.471-.458-.591-.771v-.012c-.096-.289-.096-.603.048-.88.157-.326.434-.603.795-.819l.012-.012c.41-.241.892-.374 1.41-.374s1.001.145 1.41.398l.012.012c.301.217.531.519.663.88v.012c.108.326.108.687-.048.999-.169.362-.471.675-.88.916l-.012.012c-.458.265-1.001.41-1.579.41-.579 0-1.121-.145-1.579-.434l-.012-.012c-.313-.229-.555-.531-.699-.892v-.012c-.12-.35-.12-.735.048-1.073.181-.398.519-.747.964-1.013l.012-.012z" />
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
