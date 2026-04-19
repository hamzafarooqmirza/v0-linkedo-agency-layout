import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Linkedo",
  description:
    "Browse our portfolio of web development, SEO, and digital marketing projects. See the work we have delivered for clients across the UK.",
  alternates: { canonical: "/portfolio" },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
