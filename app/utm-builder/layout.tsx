import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free UTM Builder | Linkedo",
  description:
    "Build accurate UTM tracking links for your campaigns in seconds. Track the performance of every marketing channel with our free UTM builder.",
  alternates: { canonical: "/utm-builder" },
}

export default function UTMBuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
