import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Meta Description Generator | Linkedo",
  description:
    "Write compelling meta descriptions that boost click-through rates. Generate SEO-optimised descriptions for any page with our free AI tool.",
  alternates: { canonical: "/meta-description-generator" },
}

export default function MetaDescriptionGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
