import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Development Services UK | Linkedo Agency",
  description:
    "Professional website development services for UK businesses. Custom-built, high-performance websites designed to convert visitors into customers.",
  alternates: { canonical: "/website-development" },
}

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
