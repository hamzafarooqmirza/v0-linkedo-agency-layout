import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Agency UK | Linkedo Agency",
  description:
    "Linkedo Agency serves businesses across the United Kingdom with expert web development, SEO, Google Ads, and Meta Ads services.",
  alternates: { canonical: "/uk" },
}

export default function UKLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
