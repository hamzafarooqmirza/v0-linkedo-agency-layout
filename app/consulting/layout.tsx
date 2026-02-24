import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Consulting UK | Linkedo Agency",
  description:
    "Strategic digital marketing consulting to accelerate your growth, make informed decisions, and build winning online strategies.",
  alternates: { canonical: "/consulting" },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
