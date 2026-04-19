import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services UK | Linkedo",
  description:
    "Data-driven SEO strategies that improve your search rankings, drive organic traffic, and generate qualified leads for your business across the UK.",
  alternates: { canonical: "/seo" },
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
