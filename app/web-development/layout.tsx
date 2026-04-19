import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services UK | Linkedo Agency",
  description:
    "Professional web development combining stunning design with powerful functionality. Custom websites and web apps built to grow your business.",
  alternates: { canonical: "/web-development" },
}

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
