import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design Offer | Linkedo",
  description: "Claim Linkedo's limited web design offer for a responsive business website.",
  alternates: { canonical: "/offer" },
  robots: { index: false, follow: true },
}

export default function OfferLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
