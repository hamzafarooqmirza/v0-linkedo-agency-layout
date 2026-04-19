import { TeamClient } from "./team-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Linkedo",
  description: "Meet the talented team behind Linkedo. Experts in web development, SEO, and digital marketing.",
  alternates: { canonical: "/team" },
}

export default function TeamPage() {
  return <TeamClient />
}
