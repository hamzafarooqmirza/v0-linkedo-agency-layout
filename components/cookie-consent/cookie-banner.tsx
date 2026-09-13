"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CookieIcon } from "lucide-react"
import { acceptAll, rejectAll, saveConsent, hasConsented } from "@/lib/cookie-consent"
import { CookiePreferences } from "./cookie-preferences"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    if (!hasConsented()) {
      // Slight delay so page content renders first
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  // Expose a global function so footer "Cookie Settings" button can reopen
  useEffect(() => {
    ;(window as unknown as Record<string, unknown>).__openCookieSettings = () => setVisible(true)
    return () => {
      delete (window as unknown as Record<string, unknown>).__openCookieSettings
    }
  }, [])

  const handleAcceptAll = () => {
    acceptAll()
    setVisible(false)
  }

  const handleRejectAll = () => {
    rejectAll()
    setVisible(false)
  }

  const handleSavePrefs = () => {
    saveConsent(preferences)
    setShowPrefs(false)
    setVisible(false)
  }

  const handlePrefChange = (key: string, value: boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  if (!visible) return null

  return (
    <>
      {/* Banner */}
      <div
        role="region"
        aria-label="Cookie consent"
        className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
      >
        <div className="pointer-events-auto mx-auto max-w-screen-xl">
          <div className="rounded-2xl border border-white/10 bg-[oklch(0.13_0.02_260)]/95 backdrop-blur-md shadow-2xl shadow-black/40 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              {/* Text */}
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <CookieIcon
                  size={20}
                  className="shrink-0 mt-0.5 text-[oklch(0.72_0.19_195)]"
                  aria-hidden="true"
                />
                <p className="text-sm text-white/70 leading-relaxed">
                  We use cookies to improve your experience and analyse site usage. See our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-[oklch(0.72_0.19_195)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    Cookie Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={handleRejectAll}
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.19_195)]"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowPrefs(true)}
                  className="rounded-xl border border-[oklch(0.72_0.19_195)]/40 px-4 py-2 text-sm font-medium text-[oklch(0.72_0.19_195)] transition-colors hover:border-[oklch(0.72_0.19_195)]/80 hover:bg-[oklch(0.72_0.19_195)]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.19_195)]"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="rounded-xl bg-[oklch(0.72_0.19_195)] px-4 py-2 text-sm font-semibold text-[oklch(0.13_0.02_260)] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.13_0.02_260)]"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences modal */}
      {showPrefs && (
        <CookiePreferences
          preferences={preferences}
          onChange={handlePrefChange}
          onSave={handleSavePrefs}
          onClose={() => setShowPrefs(false)}
        />
      )}
    </>
  )
}
