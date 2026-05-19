import type { Metadata } from "next"
import { HomePageContent } from "@/components/sections/home-page-content"
import { SchemaMarkup } from "@/components/seo/schema-markup"

const title = "Digital Marketing Agency UK | Linkedo"
const description =
  "Linkedo helps UK businesses grow with SEO, Google Ads, web design & digital marketing. Trusted by 100+ businesses. Get real results & measurable ROI."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://linkedo.co.uk",
  },
  keywords: [
    "digital marketing agency UK",
    "SEO agency UK",
    "Google Ads agency UK",
    "web development UK",
    "Meta ads agency",
    "B2B marketing UK",
    "B2C marketing UK",
    "Linkedo",
  ],
  openGraph: {
    title,
    description,
    url: "https://linkedo.co.uk",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo — Digital Marketing Agency UK",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
}

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://linkedo.co.uk/#webpage",
  url: "https://linkedo.co.uk",
  name: "Digital Marketing Agency UK | Linkedo",
  description,
  isPartOf: { "@id": "https://linkedo.co.uk/#website" },
  about: { "@id": "https://linkedo.co.uk/#organization" },
  inLanguage: "en-GB",
  breadcrumb: { "@id": "https://linkedo.co.uk/#breadcrumb" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2"],
  },
}

const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://linkedo.co.uk/#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://linkedo.co.uk" },
  ],
}

const homeServiceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Linkedo Digital Marketing Services",
  description:
    "Full-service digital marketing services for UK businesses including SEO, web development, Google Ads, Meta Ads, branding and consulting.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Web Development",
        url: "https://linkedo.co.uk/web-development",
        provider: { "@id": "https://linkedo.co.uk/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "SEO Services",
        url: "https://linkedo.co.uk/seo",
        provider: { "@id": "https://linkedo.co.uk/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Google Ads Management",
        url: "https://linkedo.co.uk/google-ads",
        provider: { "@id": "https://linkedo.co.uk/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Meta Ads",
        url: "https://linkedo.co.uk/meta-ads",
        provider: { "@id": "https://linkedo.co.uk/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Branding",
        url: "https://linkedo.co.uk/branding",
        provider: { "@id": "https://linkedo.co.uk/#organization" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Digital Marketing Consulting",
        url: "https://linkedo.co.uk/consulting",
        provider: { "@id": "https://linkedo.co.uk/#organization" },
      },
    },
  ],
}

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital marketing services does Linkedo offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linkedo offers SEO, Google Ads management, Meta Ads, web development, branding, and digital marketing consulting — all focused on driving leads, sales, and long-term ROI for UK businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Does Linkedo work with both B2B and B2C businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Linkedo works with both B2B and B2C companies across the UK, tailoring strategies to match each business model, target audience, and growth objective.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of the UK does Linkedo serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linkedo serves businesses across the entire United Kingdom, including London, Manchester, Birmingham, Leeds, Liverpool, Glasgow, and surrounding regions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a long-term strategy. Most businesses begin seeing measurable improvements in rankings and organic traffic within 3 to 6 months, depending on competition, website authority, and strategy execution.",
      },
    },
    {
      "@type": "Question",
      name: "Can Linkedo manage my Google Ads campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Linkedo builds and manages strategic Google Ads campaigns focused on maximising conversions, reducing cost per acquisition, and delivering a strong return on investment.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Linkedo different from other UK digital marketing agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linkedo combines data-driven strategy, performance tracking, and tailored execution across SEO, paid ads, and web development — with a clear focus on measurable business growth rather than vanity metrics.",
      },
    },
    {
      "@type": "Question",
      name: "Does Linkedo build websites as well as run marketing campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Linkedo offers custom web development services, building fast, SEO-optimised websites designed for user experience, lead generation, and long-term business growth.",
      },
    },
    {
      "@type": "Question",
      name: "How does Linkedo's process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linkedo follows a four-step process: Discovery & Research, Strategy & Planning, Campaign Execution, and Optimisation & Growth — ensuring every campaign is built on solid data and continuously improved.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any free tools available on the Linkedo website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Linkedo offers free AI-powered marketing tools including an AI Meta Title Generator, AI Meta Description Generator, and AI Blog Outline Generator to help businesses improve their SEO quickly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Linkedo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get started by reaching out through the Linkedo website to book a consultation. The team will analyse your business, discuss your goals, and recommend a customised digital marketing strategy.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={homePageSchema} />
      <SchemaMarkup schema={homeBreadcrumbSchema} />
      <SchemaMarkup schema={homeServiceListSchema} />
      <SchemaMarkup schema={homeFaqSchema} />
      <HomePageContent />
    </>
  )
}
