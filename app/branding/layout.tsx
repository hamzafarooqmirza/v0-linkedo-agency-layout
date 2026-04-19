import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Branding & Identity Services UK | Linkedo",
  description:
    "Strategic branding that creates memorable impressions, builds lasting connections with your audience, and differentiates your business.",
  alternates: { canonical: "/branding" },
}

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
