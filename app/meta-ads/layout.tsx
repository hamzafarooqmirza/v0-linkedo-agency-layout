import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meta Ads Management (Facebook & Instagram) | Linkedo Agency",
  description:
    "Strategic Meta advertising on Facebook and Instagram that reaches your target audience and drives measurable business results.",
  alternates: { canonical: "/meta-ads" },
}

export default function MetaAdsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
