"use client"

import { useState } from "react"
import { Check } from "lucide-react"

type Service = "webdev" | "googleads" | "seo"

interface PricingState {
  selectedServices: Service[]
  webdev: {
    domainHosting: "has-both" | "has-domain" | "needs-both"
    websiteType: "single" | "4pages" | ""
    additionalPages: number
    addons: {
      backend: boolean
      basicForm: boolean
      advancedForm: boolean
      blog: boolean
      basicSEO: boolean
      speed: boolean
      security: boolean
      payment: boolean
      booking: boolean
    }
  }
  googleads: {
    option: "setup" | "setup-1month" | "monthly" | ""
    addons: {
      conversion: boolean
      ga4: boolean
    }
  }
  seo: {
    option: "1month" | "3months" | "6months" | ""
    addons: {
      technicalAudit: boolean
      localSEO: boolean
    }
  }
}

export function PricingCalculator() {
  const [state, setState] = useState<PricingState>({
    selectedServices: [],
    webdev: {
      domainHosting: "has-both",
      websiteType: "",
      additionalPages: 0,
      addons: {
        backend: false,
        basicForm: false,
        advancedForm: false,
        blog: false,
        basicSEO: false,
        speed: false,
        security: false,
        payment: false,
        booking: false,
      },
    },
    googleads: {
      option: "",
      addons: {
        conversion: false,
        ga4: false,
      },
    },
    seo: {
      option: "",
      addons: {
        technicalAudit: false,
        localSEO: false,
      },
    },
  })

  const toggleService = (service: Service) => {
    setState((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }))
  }

  const calculateWebDevPrice = () => {
    let price = 0

    // Domain & Hosting
    if (state.webdev.domainHosting === "has-domain" || state.webdev.domainHosting === "needs-both") {
      price += 40
    }

    // Website Type
    if (state.webdev.websiteType === "single") price += 70
    if (state.webdev.websiteType === "4pages") price += 99

    // Additional Pages
    price += state.webdev.additionalPages * 10

    // Addons
    if (state.webdev.addons.backend) price += 150
    if (state.webdev.addons.basicForm) price += 30
    if (state.webdev.addons.advancedForm) price += 60
    if (state.webdev.addons.blog) price += 40
    if (state.webdev.addons.basicSEO) price += 50
    if (state.webdev.addons.speed) price += 40
    if (state.webdev.addons.security) price += 30
    if (state.webdev.addons.payment) price += 70
    if (state.webdev.addons.booking) price += 80

    return price
  }

  const calculateGoogleAdsPrice = () => {
    let price = 0

    if (state.googleads.option === "setup") price = 120
    if (state.googleads.option === "setup-1month") price = 250
    if (state.googleads.option === "monthly") price = 180

    if (state.googleads.addons.conversion) price += 50
    if (state.googleads.addons.ga4) price += 40

    return price
  }

  const calculateSEOPrice = () => {
    let price = 0

    if (state.seo.option === "1month") price = 150
    if (state.seo.option === "3months") price = 400
    if (state.seo.option === "6months") price = 750

    if (state.seo.addons.technicalAudit) price += 120
    if (state.seo.addons.localSEO) price += 80

    return price
  }

  const webdevTotal = state.selectedServices.includes("webdev") ? calculateWebDevPrice() : 0
  const googleadsTotal = state.selectedServices.includes("googleads") ? calculateGoogleAdsPrice() : 0
  const seoTotal = state.selectedServices.includes("seo") ? calculateSEOPrice() : 0
  const grandTotal = webdevTotal + googleadsTotal + seoTotal

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card/50 border border-border rounded-2xl p-6 lg:p-8">
        {/* Service Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Select Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: "webdev" as Service, label: "Web Development" },
              { id: "googleads" as Service, label: "Google Ads" },
              { id: "seo" as Service, label: "SEO" },
            ].map((service) => (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                  state.selectedServices.includes(service.id)
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <span className="font-medium">{service.label}</span>
                {state.selectedServices.includes(service.id) && <Check size={18} />}
              </button>
            ))}
          </div>
        </div>

        {/* Web Development Options */}
        {state.selectedServices.includes("webdev") && (
          <div className="mb-8 p-6 bg-background/50 rounded-xl border border-border/50">
            <h4 className="font-semibold text-foreground mb-4">Web Development Options</h4>

            {/* Domain & Hosting */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Domain & Hosting</label>
              <select
                value={state.webdev.domainHosting}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    webdev: { ...prev.webdev, domainHosting: e.target.value as any },
                  }))
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                <option value="has-both">Client has domain & hosting (£0)</option>
                <option value="has-domain">Client has domain, needs hosting (+£40)</option>
                <option value="needs-both">Client needs hosting (+£40)</option>
              </select>
            </div>

            {/* Website Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Website Type</label>
              <select
                value={state.webdev.websiteType}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    webdev: { ...prev.webdev, websiteType: e.target.value as any },
                  }))
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                <option value="">Select type</option>
                <option value="single">Single-page website (£70)</option>
                <option value="4pages">Up to 4 pages website (£99)</option>
              </select>
            </div>

            {/* Additional Pages */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Additional Pages (+£10 per page)</label>
              <input
                type="number"
                min="0"
                value={state.webdev.additionalPages}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    webdev: { ...prev.webdev, additionalPages: Number.parseInt(e.target.value) || 0 },
                  }))
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Add-ons</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: "backend", label: "Backend / Admin Panel (+£150)" },
                  { key: "basicForm", label: "Contact Form (basic) (+£30)" },
                  { key: "advancedForm", label: "Advanced Form (+£60)" },
                  { key: "blog", label: "Blog setup (+£40)" },
                  { key: "basicSEO", label: "Basic SEO setup (+£50)" },
                  { key: "speed", label: "Speed optimisation (+£40)" },
                  { key: "security", label: "Security setup (+£30)" },
                  { key: "payment", label: "Payment integration (+£70)" },
                  { key: "booking", label: "Booking system (+£80)" },
                ].map((addon) => (
                  <label key={addon.key} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={state.webdev.addons[addon.key as keyof typeof state.webdev.addons]}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          webdev: {
                            ...prev.webdev,
                            addons: { ...prev.webdev.addons, [addon.key]: e.target.checked },
                          },
                        }))
                      }
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">{addon.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Google Ads Options */}
        {state.selectedServices.includes("googleads") && (
          <div className="mb-8 p-6 bg-background/50 rounded-xl border border-border/50">
            <h4 className="font-semibold text-foreground mb-4">Google Ads Options</h4>

            {/* Package Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Package</label>
              <select
                value={state.googleads.option}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    googleads: { ...prev.googleads, option: e.target.value as any },
                  }))
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                <option value="">Select package</option>
                <option value="setup">Account setup only (£120)</option>
                <option value="setup-1month">Setup + 1 month management (£250)</option>
                <option value="monthly">Monthly management (£180/month)</option>
              </select>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Add-ons</label>
              <div className="space-y-3">
                {[
                  { key: "conversion", label: "Conversion tracking setup (+£50)" },
                  { key: "ga4", label: "GA4 & Google Ads linking (+£40)" },
                ].map((addon) => (
                  <label key={addon.key} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={state.googleads.addons[addon.key as keyof typeof state.googleads.addons]}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          googleads: {
                            ...prev.googleads,
                            addons: { ...prev.googleads.addons, [addon.key]: e.target.checked },
                          },
                        }))
                      }
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">{addon.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SEO Options */}
        {state.selectedServices.includes("seo") && (
          <div className="mb-8 p-6 bg-background/50 rounded-xl border border-border/50">
            <h4 className="font-semibold text-foreground mb-4">SEO Options</h4>

            {/* Package Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Package</label>
              <select
                value={state.seo.option}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    seo: { ...prev.seo, option: e.target.value as any },
                  }))
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                <option value="">Select package</option>
                <option value="1month">1 month SEO (£150)</option>
                <option value="3months">3 months SEO (£400)</option>
                <option value="6months">6 months SEO (£750)</option>
              </select>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Add-ons</label>
              <div className="space-y-3">
                {[
                  { key: "technicalAudit", label: "Technical SEO audit (+£120)" },
                  { key: "localSEO", label: "Local SEO (GBP optimisation) (+£80)" },
                ].map((addon) => (
                  <label key={addon.key} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={state.seo.addons[addon.key as keyof typeof state.seo.addons]}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          seo: {
                            ...prev.seo,
                            addons: { ...prev.seo.addons, [addon.key]: e.target.checked },
                          },
                        }))
                      }
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">{addon.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Summary */}
        {state.selectedServices.length > 0 && (
          <div className="border-t border-border pt-6">
            <div className="space-y-3 mb-4">
              {state.selectedServices.includes("webdev") && webdevTotal > 0 && (
                <div className="flex justify-between text-foreground">
                  <span>Web Development:</span>
                  <span className="font-semibold">£{webdevTotal}</span>
                </div>
              )}
              {state.selectedServices.includes("googleads") && googleadsTotal > 0 && (
                <div className="flex justify-between text-foreground">
                  <span>Google Ads:</span>
                  <span className="font-semibold">£{googleadsTotal}</span>
                </div>
              )}
              {state.selectedServices.includes("seo") && seoTotal > 0 && (
                <div className="flex justify-between text-foreground">
                  <span>SEO:</span>
                  <span className="font-semibold">£{seoTotal}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center text-lg font-bold text-foreground pt-3 border-t border-border">
              <span>Grand Total:</span>
              <span className="text-primary text-2xl">£{grandTotal}</span>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Prices shown are starting estimates. Final pricing may vary based on project scope.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
