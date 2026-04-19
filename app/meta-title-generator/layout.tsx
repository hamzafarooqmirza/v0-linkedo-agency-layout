import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Meta Title Generator | Linkedo Agency",
  description:
    "Generate optimised meta titles for any page instantly. Boost your click-through rates with compelling, SEO-friendly title tags.",
  alternates: { canonical: "/meta-title-generator" },
}

export default function MetaTitleGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
