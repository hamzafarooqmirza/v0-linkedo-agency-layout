import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Blog Outline Generator | Linkedo",
  description:
    "Generate structured blog outlines instantly with our free AI tool. Create well-organised content frameworks to maximise engagement and SEO.",
  alternates: { canonical: "/blog-outline-generator" },
}

export default function BlogOutlineGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
