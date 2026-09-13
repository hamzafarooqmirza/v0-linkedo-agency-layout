"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import type { CookieConsent } from "@/lib/cookie-consent"

interface Category {
  key: keyof Omit<CookieConsent, "necessary" | "timestamp" | "version">
  label: string
  description: string
  required?: boolean
}

const categories: Category[] = [
  {
    key: "analytics",
    label: "Analytics",
    description:
      "Help us understand how visitors interact with our website. Data is anonymised and used to improve performance.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Allow us to deliver personalised advertisements and measure campaign effectiveness across channels.",
  },
  {
    key: "functional",
    label: "Functional",
    description:
      "Enable enhanced features such as live chat, personalisation, and remembered preferences.",
  },
]

interface Props {
  preferences: { analytics: boolean; marketing: boolean; functional: boolean }
  onChange: (key: string, value: boolean) => void
  onSave: () => void
  onClose: () => void
}

export function CookiePreferences({ preferences, onChange, onSave, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    firstFocusRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-prefs-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-[oklch(0.13_0.02_260)] shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 id="cookie-prefs-title" className="text-base font-semibold text-white">
            Cookie Preferences
          </h2>
          <button
            ref={firstFocusRef}
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.19_195)]"
            aria-label="Close preferences"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">
          {/* Necessary — always on */}
          <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-white">Necessary</p>
              <p className="mt-0.5 text-xs text-white/50 leading-relaxed">
                Essential for the website to function. These cannot be disabled.
              </p>
            </div>
            <div className="shrink-0 mt-0.5">
              <span className="inline-flex items-center rounded-full bg-[oklch(0.72_0.19_195)]/20 px-2.5 py-0.5 text-xs font-medium text-[oklch(0.72_0.19_195)]">
                Always on
              </span>
            </div>
          </div>

          {categories.map((cat) => {
            const enabled = preferences[cat.key]
            const id = `toggle-${cat.key}`
            return (
              <div
                key={cat.key}
                className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div className="min-w-0">
                  <label htmlFor={id} className="text-sm font-medium text-white cursor-pointer">
                    {cat.label}
                  </label>
                  <p className="mt-0.5 text-xs text-white/50 leading-relaxed">{cat.description}</p>
                </div>
                {/* Toggle */}
                <button
                  id={id}
                  role="switch"
                  aria-checked={enabled}
                  aria-label={`${enabled ? "Disable" : "Enable"} ${cat.label} cookies`}
                  onClick={() => onChange(cat.key, !enabled)}
                  className={[
                    "shrink-0 mt-0.5 relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.19_195)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.13_0.02_260)]",
                    enabled ? "bg-[oklch(0.72_0.19_195)]" : "bg-white/20",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
                      enabled ? "translate-x-6" : "translate-x-1",
                    ].join(" ")}
                  />
                </button>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-white/10 px-6 py-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.72_0.19_195)]"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="flex-1 rounded-xl bg-[oklch(0.72_0.19_195)] px-4 py-2.5 text-sm font-semibold text-[oklch(0.13_0.02_260)] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.13_0.02_260)]"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
