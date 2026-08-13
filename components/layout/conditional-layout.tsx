"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingQuoteButton } from "@/components/ui/floating-quote-button"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isTeamPage = pathname?.startsWith("/team")
  const isOfferPage = pathname?.startsWith("/offer")

  console.log("[v0] ConditionalLayout render:", { pathname, isTeamPage })

  if (isTeamPage || isOfferPage) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingQuoteButton />
    </>
  )
}
