import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Linkedo Agency",
  description:
    "Get in touch with Linkedo Agency. Book a free consultation to discuss your web development, SEO, or paid advertising needs.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
