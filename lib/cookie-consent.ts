export type ConsentCategory = "analytics" | "marketing" | "functional"

export interface CookieConsent {
  necessary: true
  analytics: boolean
  marketing: boolean
  functional: boolean
  timestamp: number
  version: string
}

const CONSENT_KEY = "linkedo_cookie_consent"
const CONSENT_VERSION = "1.0"

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored) as CookieConsent
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function saveConsent(preferences: Omit<CookieConsent, "necessary" | "timestamp" | "version">): void {
  const consent: CookieConsent = {
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    functional: preferences.functional,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
  } catch {
    // localStorage unavailable
  }
}

export function acceptAll(): void {
  saveConsent({ analytics: true, marketing: true, functional: true })
}

export function rejectAll(): void {
  saveConsent({ analytics: false, marketing: false, functional: false })
}

export function hasConsented(): boolean {
  return getConsent() !== null
}
