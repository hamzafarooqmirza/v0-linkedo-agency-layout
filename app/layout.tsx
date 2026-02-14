import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, Montserrat } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Linkedo Agency | Web, SEO & Ads That Actually Bring Leads",
  description:
    "Linkedo Agency delivers premium web development, SEO optimization, and paid advertising services that generate real leads and measurable results for B2B businesses.",
  generator: "v0.app",
  keywords: ["digital agency", "web development", "SEO", "Google Ads", "lead generation", "B2B marketing"],
  authors: [{ name: "Linkedo Agency" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} ${montserrat.variable} font-sans antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  )
}
