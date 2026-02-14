import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, Montserrat, Jost, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ConditionalLayout } from "@/components/layout/conditional-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Linkedo Agency | Web, SEO & Ads That Actually Bring Leads",
  description:
    "Linkedo Agency delivers premium web development, SEO optimization, and paid advertising services that generate real leads and measurable results for B2B businesses.",
  generator: "v0.app",
  keywords: ["digital agency", "web development", "SEO", "Google Ads", "lead generation", "B2B marketing"],
  authors: [{ name: "Linkedo Agency" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Linkedo | Digital Marketing Agency",
    description: "Web Development, SEO, and Google Ads services for growth-focused businesses.",
    url: "https://linkedo.co.uk",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Digital Marketing Agency",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkedo | Digital Marketing Agency",
    description: "Web Development, SEO, and Google Ads services for growth-focused businesses.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#050814",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} ${montserrat.variable} ${jost.variable} ${openSans.variable} font-sans antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  )
}
