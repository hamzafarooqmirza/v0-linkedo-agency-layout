import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Linkedo Agency",
  description:
    "Real results from real clients. Explore our case studies showing how Linkedo Agency has helped businesses grow through SEO, web development, and paid advertising.",
  alternates: { canonical: "/case-studies" },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
