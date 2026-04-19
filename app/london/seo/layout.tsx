import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services London | Linkedo",
  description:
    "Expert SEO services for London businesses. Improve your search rankings and drive more organic traffic with Linkedo, London's trusted SEO agency.",
  alternates: { canonical: "/london/seo" },
}

export default function LondonSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
