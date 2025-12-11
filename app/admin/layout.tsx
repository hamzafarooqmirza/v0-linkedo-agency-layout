import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | Linkedo Agency",
  description: "Internal admin dashboard for managing tracking scripts and pixels.",
  robots: "noindex, nofollow",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
