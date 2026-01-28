import { Section } from "@/components/ui/section"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { PricingCalculator } from "@/components/forms/pricing-calculator"
import { FloatingWhatsAppButton } from "@/components/ui/floating-whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter, Mail, Facebook, Instagram } from "lucide-react"

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
                {member.snapchat && (
                  <a
                    href={member.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-1.5.645-2.046 1.073-2.046.27 0 .528.18.528.435 0 .225-.3.54-.705.735-.42.18-.735.24-1.065.24-.48 0-.705-.24-1.065-.586-.24-.255-.54-.555-1.065-.675v.015c-.09 1.35-.36 2.386-1.065 3.391-.5.75-1.245 1.345-2.13 1.905l-.016.014c-.285.18-.57.375-.87.586-.12.09-.24.195-.36.3-.27.24-.495.435-.645.585-.03.03-.075.075-.165.225-.075.15-.135.24-.21.3-.09.075-.165.12-.27.18l-.016.014c-.105.06-.21.12-.3.195l-.016.014c-.12.09-.195.18-.195.27 0 .045.015.09.045.12.03.045.075.06.12.075l.015.015c.12.03.315.015.645-.045l.015-.015c.44-.074.915-.239 1.515-.449l.09-.03c.415-.15.825-.27 1.245-.345.12-.015.255-.030.375-.030.375 0 .75.105 1.065.345.435.345.645.915.645 1.53 0 .96-.435 1.875-1.245 2.445-.42.3-.885.495-1.365.645l-.09.03c-.435.12-.9.195-1.38.195-.375 0-.765-.045-1.14-.135l-.09-.015c-.495-.105-.96-.3-1.38-.615-.24-.18-.495-.42-.705-.69-.21-.27-.375-.555-.465-.87l-.015-.09c-.03-.135-.045-.27-.045-.405 0-.12.015-.24.045-.375l.015-.105c.03-.135.075-.27.135-.405l.045-.09c.105-.24.24-.48.42-.705l.015-.03c.18-.225.39-.435.615-.63l.015-.015c.24-.21.495-.405.765-.57l.03-.015c.27-.165.54-.3.825-.42l.045-.015c.285-.12.57-.195.87-.24l.015-.015c.225-.03.435-.045.645-.045.165 0 .33.015.48.045l.09.015c.135.015.255.045.375.09 0-.015 0-.015.015-.03l.015-.015c.03-.03.045-.06.075-.105l.015-.015c.09-.135.165-.27.24-.42l.015-.03c.03-.06.045-.12.075-.18 0-.015.015-.03.015-.06.03-.105.045-.195.045-.3 0-.015 0-.045-.015-.075-.015-.015-.015-.045-.03-.06l-.015-.03c-.015-.015-.045-.045-.075-.06-.075-.045-.18-.090-.345-.12l-.015-.015c-.405-.09-.735-.3-.99-.585l-.015-.015c-.255-.3-.435-.645-.57-1.02l-.015-.045c-.105-.3-.165-.615-.195-.945l-.015-.075c-.015-.195-.015-.375-.015-.57 0-.015 0-.045.015-.06.015-.015.030-.045.030-.075l.015-.015c.090-.315.225-.585.42-.795l.045-.045c.195-.21.435-.345.72-.42l.075-.015c.195-.045.375-.060.57-.060h.015c.3 0 .585.045.855.135l.045.015c.3.105.57.27.765.51l.015.015c.12.15.195.345.195.555 0 .03-.015.045-.015.075l-.015.06c-.03.135-.105.24-.225.315l-.015.015c-.075.045-.165.075-.27.075-.015 0-.03 0-.045-.015h-.015c-.045 0-.075-.015-.12-.015l-.015-.015c-.045-.015-.075-.03-.105-.06l-.015-.015c-.03-.03-.045-.06-.045-.105v-.015c0-.045.015-.075.045-.105l.015-.015c.015-.015.045-.045.075-.06l.015-.015c.03-.015.06-.03.09-.03h.03c.015 0 .045 0 .06.015 0-.03.015-.06.015-.09 0-.105-.045-.195-.12-.27l-.015-.015c-.075-.075-.18-.12-.3-.12-.015 0-.045 0-.06.015-.015.015-.045.015-.06.03l-.015.015c-.105.06-.18.165-.21.3l-.015.045c-.015.075-.015.15-.015.225 0 .24.060.465.195.645l.03.045c.15.195.345.345.585.42l.015.015c.195.06.405.090.615.090h.045c.435 0 .855-.12 1.245-.36l.045-.03c.39-.24.705-.585.915-1.035l.015-.045c.195-.42.285-.885.285-1.35 0-.015 0-.045-.015-.06v-.06c0-.015 0-.03-.015-.045-.015-.015-.015-.045-.03-.06l-.015-.015c-.015-.015-.03-.045-.045-.06-.03-.015-.045-.03-.075-.045-.03-.015-.06-.03-.09-.03-.015 0-.045-.015-.06-.015-.015 0-.03 0-.06.015-.015 0-.03.015-.045.015-.03.015-.06.015-.09.045-.015.015-.045.015-.06.03-.03.015-.06.045-.075.075-.015.015-.03.045-.045.06-.015.03-.03.06-.03.105v.015c0 .045.015.09.045.135l.015.015c.015.015.03.03.045.06l.015.015c.03.03.075.045.12.075.015.015.045.015.06.03.045.015.075.03.12.03.015 0 .03 0 .045.015h.03c.015 0 .045-.015.06-.015l.015-.015c.045-.015.075-.03.105-.06l.015-.015c.015-.015.03-.03.045-.06 0-.015.015-.03.015-.045.015-.015.015-.045.015-.06v-.015c0-.03 0-.06-.015-.09l-.015-.03c-.015-.03-.03-.06-.045-.09l-.015-.015c-.03-.045-.06-.075-.105-.105l-.015-.015c-.045-.03-.105-.06-.165-.075l-.015-.015c-.06-.015-.12-.015-.18-.015h-.015c-.105 0-.195.03-.285.075l-.03.015c-.09.06-.15.15-.18.255l-.015.03c-.015.06-.015.12-.015.18 0 .135.03.255.09.375l.015.03c.075.12.18.195.315.24l.03.015c.09.03.195.045.3.045.015 0 .045 0 .06-.015h.015c.135-.015.255-.075.345-.18l.015-.015c.09-.105.135-.24.135-.39 0-.225-.09-.42-.255-.555l-.015-.015c-.165-.135-.375-.195-.615-.195h-.06c-.3.015-.555.12-.735.315l-.015.015c-.18.195-.285.45-.285.735 0 .015 0 .045.015.06 0 .015.015.03.015.06l.015.03c.015.015.03.045.045.075.03.03.06.045.105.06.015.015.045.03.075.03.03 0 .06.015.09.015h.075c.09 0 .165-.015.24-.06l.03-.015c.06-.03.12-.075.165-.135l.015-.015c.045-.06.075-.135.075-.21 0-.015 0-.03-.015-.06v-.015c-.015-.03-.015-.06-.045-.09l-.015-.015c-.015-.03-.045-.045-.075-.075l-.015-.015c-.045-.03-.09-.045-.135-.06h-.015c-.075-.015-.135-.015-.21-.015-.12 0-.24.03-.345.075l-.03.015c-.12.06-.21.15-.285.27l-.015.03c-.06.12-.09.255-.09.405 0 .21.06.39.18.54l.015.015c.135.15.3.255.495.3l.03.015c.15.03.3.045.45.045.255 0 .495-.06.705-.195l.045-.03c.21-.135.375-.33.48-.57l.015-.045c.09-.21.135-.45.135-.69 0-.015 0-.03-.015-.045v-.015c-.015-.375-.15-.705-.42-.945l-.015-.015c-.27-.24-.615-.36-1.005-.36-.06 0-.12 0-.195.015h-.015c-.555.06-1.005.39-1.245.915l-.015.03c-.135.3-.195.645-.195 1.005 0 .015 0 .045.015.06v.03c.03.495.18.945.465 1.32l.015.015c.285.375.675.645 1.14.765l.03.015c.3.075.615.12.945.12h.015c.42 0 .825-.075 1.2-.24l.09-.03c.375-.165.69-.42.93-.75l.03-.045c.24-.33.375-.735.375-1.185 0-.06 0-.12-.015-.18v-.015c-.03-.495-.225-.915-.555-1.215l-.015-.015c-.33-.3-.765-.45-1.26-.45h-.015c-.36 0-.69.09-.975.285l-.045.03c-.285.195-.48.495-.555.87l-.015.06c-.015.12-.015.255-.015.375 0 .495.135.93.42 1.29l.03.045c.285.36.675.6 1.155.69l.045.015c.255.045.51.06.765.06h.03c.495-.015.96-.135 1.395-.39l.045-.03c.435-.255.795-.615 1.05-1.08l.03-.045c.255-.465.375-.99.375-1.575v-.015c0-.21-.015-.42-.06-.63l-.015-.045c-.075-.42-.255-.795-.525-1.11l-.03-.045c-.27-.315-.63-.54-1.065-.645l-.045-.015c-.24-.045-.495-.075-.75-.075-.015 0-.045 0-.06.015-.705.015-1.35.285-1.86.795l-.045.045c-.51.51-.795 1.185-.795 1.95 0 .015 0 .045.015.075v.045c.045.765.345 1.41.885 1.875l.03.03c.54.465 1.215.69 1.995.69h.06c.72-.015 1.38-.255 1.92-.735l.03-.03c.54-.48.84-1.14.84-1.95v-.03c-.015-.705-.3-1.305-.825-1.755l-.03-.03c-.525-.45-1.185-.675-1.95-.675h-.045c-.69.015-1.32.27-1.815.78l-.03.03c-.495.51-.735 1.17-.735 1.95 0 .015 0 .03.015.045v.015c.03.675.3 1.245.795 1.665l.03.03c.495.42 1.125.63 1.86.63h.045c.675-.015 1.29-.24 1.785-.69l.03-.03c.495-.45.735-1.08.735-1.89v-.045c-.03-.645-.27-1.185-.735-1.575l-.03-.03c-.465-.39-1.05-.585-1.74-.585h-.03c-.645.015-1.23.24-1.695.69l-.03.03c-.465.45-.69 1.05-.69 1.83 0 .015 0 .03.015.06v.015c.03.615.255 1.125.675 1.5l.03.03c.42.375.96.555 1.605.555h.045c.615-.015 1.17-.225 1.62-.645l.03-.03c.45-.42.66-1.005.66-1.77v-.03c-.015-.585-.225-1.065-.63-1.41l-.03-.03c-.405-.345-.93-.51-1.545-.51h-.03c-.585.015-1.11.21-1.53.615l-.03.03c-.42.405-.615.945-.615 1.65 0 .015 0 .045.015.06v.015c.015.555.21 1.005.57 1.32l.03.03c.36.315.825.465 1.38.465h.03c.54-.015 1.02-.195 1.395-.57l.03-.03c.375-.375.555-.87.555-1.5v-.015c-.015-.525-.195-.96-.555-1.26l-.03-.03c-.36-.3-.81-.435-1.335-.435h-.015c-.51.015-.96.18-1.305.54l-.03.03c-.345.36-.51.84-.51 1.41 0 .015 0 .03.015.045v.015c.015.495.18.885.495 1.155l.03.03c.315.27.72.39 1.215.39h.015c.48-.015.885-.165 1.2-.48l.03-.03c.315-.315.465-.735.465-1.245 0-.015 0-.03-.015-.045v-.015c-.015-.45-.165-.81-.465-1.065l-.03-.03c-.3-.255-.675-.375-1.125-.375h-.015c-.435.015-.81.15-1.095.435l-.03.03c-.285.285-.42.66-.42 1.11 0 .015 0 .03.015.06v.015c.015.405.15.72.42.96l.03.03c.27.24.615.345 1.035.345h.015c.405-.015.735-.135 1.005-.39l.03-.03c.27-.255.39-.6.39-.975 0-.015 0-.045-.015-.06v-.015c-.015-.36-.135-.645-.39-.855l-.03-.03c-.255-.21-.57-.3-.945-.3h-.015c-.36.015-.66.12-.885.345l-.03.03c-.225.225-.33.525-.33.885 0 .015 0 .03.015.045v.015c.015.315.12.57.33.765l.03.03c.21.195.48.27.825.27h.015c.315-.015.585-.105.78-.3l.03-.03c.195-.195.285-.465.285-.795v-.015c-.015-.285-.105-.51-.285-.69l-.03-.03c-.18-.18-.435-.255-.735-.255h-.015c-.285.015-.525.09-.69.27l-.03.03c-.165.18-.24.42-.24.69 0 .015 0 .045.015.06v.015c.015.255.09.45.255.6l.03.03c.165.15.375.21.645.21h.015c.255-.015.465-.075.615-.225l.03-.03c.15-.15.21-.36.21-.615v-.015c-.015-.225-.075-.405-.225-.54l-.03-.03c-.15-.135-.345-.18-.555-.18h-.015c-.225.015-.405.06-.54.21l-.03.03c-.135.15-.18.33-.18.54 0 .015 0 .03.015.045v.015c.015.195.06.345.18.465l.03.03c.12.12.285.165.48.165h.015c.195-.015.345-.06.465-.165l.03-.03c.12-.105.165-.255.165-.435v-.015c-.015-.165-.06-.285-.165-.375l-.03-.03c-.105-.09-.24-.12-.405-.12h-.015c-.165.015-.285.045-.375.15l-.03.03c-.09.105-.12.225-.12.375 0 .015 0 .03.015.045v.015c.015.135.045.225.15.3l.03.03c.09.075.21.09.345.09h.015c.135-.015.24-.045.315-.135l.03-.03c.075-.09.09-.195.09-.315v-.015c-.015-.105-.045-.195-.135-.255l-.03-.03c-.09-.06-.18-.075-.285-.075h-.015c-.105.015-.18.03-.255.105l-.03.03c-.06.075-.075.165-.075.27 0 .015 0 .015.015.03v.015c.015.09.03.15.105.195l.03.03c.06.045.135.06.225.06h.015c.09 0 .15-.03.21-.09l.03-.03c.045-.06.06-.135.06-.225v-.015c0-.075-.03-.135-.09-.18l-.03-.03c-.06-.045-.12-.045-.195-.045h-.015c-.075 0-.135.015-.18.075l-.03.03c-.03.06-.045.12-.045.195 0 .015 0 .015.015.03v.015c0 .06.015.105.06.135l.03.03c.045.03.09.045.15.045h.015c.06 0 .105-.015.135-.06l.03-.03c.03-.045.03-.09.03-.15v-.015c0-.045-.015-.09-.06-.12l-.03-.03c-.045-.03-.075-.03-.12-.03h-.015c-.045 0-.09.015-.12.045l-.03.03c-.015.03-.03.075-.03.12 0 .015 0 .015.015.03v.015c0 .03.015.06.045.075l.03.03c.03.015.045.015.075.015h.015c.03 0 .06 0 .09-.03l.03-.03c.015-.03.015-.06.015-.09v-.015c0-.03-.015-.06-.03-.075l-.03-.03c-.03-.015-.045-.015-.075-.015h-.015c-.03 0-.045.015-.075.03l-.03.03c-.015.015-.015.045-.015.075 0 0 0 .015.015.015v.015c0 .015.015.03.015.045l.03.03c.015.015.03.015.045.015h.015c.015 0 .03-.015.045-.03l.03-.03c0-.015.015-.03.015-.045v-.015c0-.015 0-.03-.015-.045l-.03-.03c-.015-.015-.03-.015-.045-.015h-.015c-.015 0-.03 0-.045.015l-.03.03c0 .015-.015.03-.015.045 0 0 0 .015.015.015v.015c0 .015 0 .015.015.03l.03.03c.015 0 .015.015.03.015h.015c.015 0 .015 0 .03-.015l.03-.03c0-.015 0-.015.015-.03v-.015-.015l-.015-.03-.03-.03c-.015 0-.015-.015-.03-.015h-.015-.03l-.03.03c0 .015-.015.015-.015.03"/>
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
