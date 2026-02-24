"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Code,
  FileCode,
  Zap,
  Link2,
  Settings,
  ChevronRight,
  Plus,
  Pencil,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FormInput } from "@/components/ui/form-input"
import { FormSelect } from "@/components/ui/form-select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin", active: false },
  { icon: Code, label: "Global Scripts", href: "/admin/tracking", active: true },
  { icon: FileCode, label: "Page-Specific Scripts", href: "/admin/tracking", active: false },
  { icon: Zap, label: "Events", href: "#", disabled: true },
  { icon: Link2, label: "Integrations", href: "#", disabled: true },
]

const placementOptions = [
  { value: "head", label: "Header (<head>)" },
  { value: "body-start", label: "Body Start" },
  { value: "body-end", label: "Body End (Footer)" },
]

const scriptTypes = {
  gtm: { label: "GTM", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  gads: { label: "GAds", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  fbpixel: { label: "FB Pixel", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  tiktok: { label: "TikTok", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  linkedin: { label: "LinkedIn", color: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
  custom: { label: "Custom", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
}

type ScriptType = keyof typeof scriptTypes

interface GlobalScript {
  id: string
  name: string
  type: ScriptType
  placement: string
  status: "active" | "inactive"
  lastUpdated: string
  code: string
}

interface PageScript {
  id: string
  path: string
  headerCode: string
  bodyCode: string
  footerCode: string
  status: "active" | "inactive"
  lastUpdated: string
}

const initialGlobalScripts: GlobalScript[] = [
  {
    id: "1",
    name: "Google Tag Manager",
    type: "gtm",
    placement: "head",
    status: "active",
    lastUpdated: "2024-01-15",
    code: "<!-- Google Tag Manager -->\n<script>...</script>",
  },
  {
    id: "2",
    name: "Google Ads Conversion",
    type: "gads",
    placement: "head",
    status: "active",
    lastUpdated: "2024-01-10",
    code: "<!-- Google Ads -->\n<script>...</script>",
  },
  {
    id: "3",
    name: "Meta Pixel",
    type: "fbpixel",
    placement: "head",
    status: "active",
    lastUpdated: "2024-01-08",
    code: "<!-- Meta Pixel -->\n<script>...</script>",
  },
  {
    id: "4",
    name: "TikTok Pixel",
    type: "tiktok",
    placement: "head",
    status: "inactive",
    lastUpdated: "2024-01-05",
    code: "<!-- TikTok Pixel -->\n<script>...</script>",
  },
  {
    id: "5",
    name: "LinkedIn Insight",
    type: "linkedin",
    placement: "body-end",
    status: "active",
    lastUpdated: "2024-01-03",
    code: "<!-- LinkedIn Insight -->\n<script>...</script>",
  },
]

const initialPageScripts: PageScript[] = [
  {
    id: "1",
    path: "/contact/thank-you",
    headerCode: "<!-- GAds Conversion -->",
    bodyCode: "",
    footerCode: "",
    status: "active",
    lastUpdated: "2024-01-14",
  },
  {
    id: "2",
    path: "/seo",
    headerCode: "",
    bodyCode: "<!-- Hotjar -->",
    footerCode: "",
    status: "active",
    lastUpdated: "2024-01-12",
  },
  {
    id: "3",
    path: "/london/seo",
    headerCode: "<!-- TikTok Event -->",
    bodyCode: "",
    footerCode: "",
    status: "inactive",
    lastUpdated: "2024-01-09",
  },
]

export default function AdminTrackingPage() {
  const [activeTab, setActiveTab] = useState<"global" | "page">("global")
  const [globalScripts, setGlobalScripts] = useState<GlobalScript[]>(initialGlobalScripts)
  const [pageScripts, setPageScripts] = useState<PageScript[]>(initialPageScripts)
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false)
  const [isPageModalOpen, setIsPageModalOpen] = useState(false)

  // Form state for global script modal
  const [globalForm, setGlobalForm] = useState({
    name: "",
    placement: "head",
    code: "",
    active: true,
  })

  // Form state for page script modal
  const [pageForm, setPageForm] = useState({
    path: "",
    headerCode: "",
    bodyCode: "",
    footerCode: "",
    active: true,
  })

  const toggleGlobalStatus = (id: string) => {
    setGlobalScripts((prev) =>
      prev.map((script) =>
        script.id === id ? { ...script, status: script.status === "active" ? "inactive" : "active" } : script,
      ),
    )
  }

  const togglePageStatus = (id: string) => {
    setPageScripts((prev) =>
      prev.map((script) =>
        script.id === id ? { ...script, status: script.status === "active" ? "inactive" : "active" } : script,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">Linkedo Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    item.active
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : item.disabled
                        ? "text-muted-foreground/50 cursor-not-allowed"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.disabled && (
                    <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                      Soon
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-sidebar-border">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <span>Admin</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">Tracking & Pixels</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Tracking & Pixels</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Manage Tag Manager, Ads conversion tags, and remarketing pixels.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("global")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === "global"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground",
              )}
            >
              Global Scripts
            </button>
            <button
              onClick={() => setActiveTab("page")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === "page"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground",
              )}
            >
              Page-Specific Scripts
            </button>
          </div>

          {/* Global Scripts Tab */}
          {activeTab === "global" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Info Card */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Global scripts are injected on all pages unless overridden by page-specific scripts.
                </p>
              </div>

              {/* Table Card */}
              <div className="rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <h2 className="font-semibold text-foreground">Global Scripts</h2>
                  <AnimatedButton size="sm" onClick={() => setIsGlobalModalOpen(true)}>
                    <Plus className="w-4 h-4" />
                    <span>Add Global Script</span>
                  </AnimatedButton>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Name
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Type
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Placement
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Status
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Last Updated
                        </th>
                        <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {globalScripts.map((script) => (
                        <tr
                          key={script.id}
                          className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-4 py-4">
                            <span className="font-medium text-foreground">{script.name}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={cn(
                                "inline-flex px-2 py-1 rounded text-xs font-medium border",
                                scriptTypes[script.type].color,
                              )}
                            >
                              {scriptTypes[script.type].label}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-muted-foreground">
                            {script.placement === "head"
                              ? "Header"
                              : script.placement === "body-start"
                                ? "Body Start"
                                : "Footer"}
                          </td>
                          <td className="px-4 py-4">
                            <button onClick={() => toggleGlobalStatus(script.id)} className="flex items-center gap-2">
                              {script.status === "active" ? (
                                <ToggleRight className="w-6 h-6 text-green-500" />
                              ) : (
                                <ToggleLeft className="w-6 h-6 text-muted-foreground" />
                              )}
                              <span
                                className={cn(
                                  "text-xs font-medium",
                                  script.status === "active" ? "text-green-500" : "text-muted-foreground",
                                )}
                              >
                                {script.status === "active" ? "Active" : "Inactive"}
                              </span>
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm text-muted-foreground">{script.lastUpdated}</td>
                          <td className="px-4 py-4">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Page-Specific Scripts Tab */}
          {activeTab === "page" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Info Card */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Attach unique tracking to specific URLs (e.g., /seo, /contact, /london/seo).
                </p>
              </div>

              {/* Table Card */}
              <div className="rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <h2 className="font-semibold text-foreground">Page-Specific Scripts</h2>
                  <AnimatedButton size="sm" onClick={() => setIsPageModalOpen(true)}>
                    <Plus className="w-4 h-4" />
                    <span>Add Page Script</span>
                  </AnimatedButton>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Page Path
                        </th>
                        <th className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Header
                        </th>
                        <th className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Body
                        </th>
                        <th className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Footer
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Status
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Last Updated
                        </th>
                        <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageScripts.map((script) => (
                        <tr
                          key={script.id}
                          className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-4 py-4">
                            <code className="text-sm font-mono text-primary">{script.path}</code>
                          </td>
                          <td className="px-4 py-4 text-center">
                            {script.headerCode ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-green-500/20 items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                              </span>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {script.bodyCode ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-green-500/20 items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                              </span>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {script.footerCode ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-green-500/20 items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                              </span>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4">
                            <button onClick={() => togglePageStatus(script.id)} className="flex items-center gap-2">
                              {script.status === "active" ? (
                                <ToggleRight className="w-6 h-6 text-green-500" />
                              ) : (
                                <ToggleLeft className="w-6 h-6 text-muted-foreground" />
                              )}
                              <span
                                className={cn(
                                  "text-xs font-medium",
                                  script.status === "active" ? "text-green-500" : "text-muted-foreground",
                                )}
                              >
                                {script.status === "active" ? "Active" : "Inactive"}
                              </span>
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm text-muted-foreground">{script.lastUpdated}</td>
                          <td className="px-4 py-4">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples Section */}
              <div className="rounded-xl bg-card/30 border border-border/30 p-6">
                <h3 className="font-semibold text-foreground mb-4">Usage Examples</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <h4 className="text-sm font-medium text-foreground mb-2">Google Ads Conversion</h4>
                    <p className="text-xs text-muted-foreground">
                      Add Google Ads conversion tag only on <code className="text-primary">/contact/thank-you</code> to
                      track form submissions.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <h4 className="text-sm font-medium text-foreground mb-2">TikTok Landing Page</h4>
                    <p className="text-xs text-muted-foreground">
                      Add TikTok pixel on <code className="text-primary">/promo/tiktok</code> for campaign-specific
                      tracking.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Global Script Modal */}
      <Dialog open={isGlobalModalOpen} onOpenChange={setIsGlobalModalOpen}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle>Add Global Script</DialogTitle>
            <DialogDescription>Add a new tracking script that will be injected on all pages.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <FormInput
              label="Script Name"
              placeholder="e.g., Google Tag Manager"
              value={globalForm.name}
              onChange={(e) => setGlobalForm({ ...globalForm, name: e.target.value })}
            />
            <FormSelect
              label="Placement"
              options={placementOptions}
              value={globalForm.placement}
              onChange={(e) => setGlobalForm({ ...globalForm, placement: e.target.value })}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Script Code</label>
              <textarea
                className="w-full h-32 px-4 py-3 rounded-lg bg-input border border-border text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Paste your script code here..."
                value={globalForm.code}
                onChange={(e) => setGlobalForm({ ...globalForm, code: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Active</span>
              <button
                onClick={() => setGlobalForm({ ...globalForm, active: !globalForm.active })}
                className="flex items-center"
              >
                {globalForm.active ? (
                  <ToggleRight className="w-8 h-8 text-green-500" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsGlobalModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsGlobalModalOpen(false)}>Save Script</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Page Script Modal */}
      <Dialog open={isPageModalOpen} onOpenChange={setIsPageModalOpen}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle>Add Page-Specific Script</DialogTitle>
            <DialogDescription>Attach tracking scripts to a specific page URL.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <FormInput
              label="Page Path"
              placeholder="/seo"
              value={pageForm.path}
              onChange={(e) => setPageForm({ ...pageForm, path: e.target.value })}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Header Code (optional)</label>
              <textarea
                className="w-full h-20 px-4 py-3 rounded-lg bg-input border border-border text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Scripts for <head>..."
                value={pageForm.headerCode}
                onChange={(e) => setPageForm({ ...pageForm, headerCode: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Body Code (optional)</label>
              <textarea
                className="w-full h-20 px-4 py-3 rounded-lg bg-input border border-border text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Scripts for <body>..."
                value={pageForm.bodyCode}
                onChange={(e) => setPageForm({ ...pageForm, bodyCode: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Footer Code (optional)</label>
              <textarea
                className="w-full h-20 px-4 py-3 rounded-lg bg-input border border-border text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Scripts before </body>..."
                value={pageForm.footerCode}
                onChange={(e) => setPageForm({ ...pageForm, footerCode: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Active</span>
              <button
                onClick={() => setPageForm({ ...pageForm, active: !pageForm.active })}
                className="flex items-center"
              >
                {pageForm.active ? (
                  <ToggleRight className="w-8 h-8 text-green-500" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPageModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsPageModalOpen(false)}>Save Script</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
