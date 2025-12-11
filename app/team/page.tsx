import { TeamClient } from "./team-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Linkedo Agency",
  description: "Meet the talented team behind Linkedo Agency. Experts in web development, SEO, and digital marketing.",
}

export default function TeamPage() {
  return <TeamClient />
}
