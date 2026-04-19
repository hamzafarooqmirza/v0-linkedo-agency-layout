import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Ads Management UK | Linkedo",
  description:
    "Expert Google Ads management that maximises your advertising budget with strategic PPC campaigns delivering measurable ROI.",
  alternates: { canonical: "/google-ads" },
}

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
