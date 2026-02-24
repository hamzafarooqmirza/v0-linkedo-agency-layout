import type { MetadataRoute } from "next"

const BASE_URL = "https://linkedo.co.uk"

// Static top-level routes with priority 0.9
const topLevelRoutes = [
  "/about",
  "/services",
  "/blog",
  "/case-studies",
  "/team",
  "/portfolio",
  "/pricing",
  "/contact",
  "/locations",
  "/uk",
  "/free-ai-tools-online",
  "/privacy",
  "/terms",
]

// City/location nested routes
const cityRoutes = [
  "/london",
  "/manchester",
  "/birmingham",
  "/leeds",
  "/liverpool",
  "/sheffield",
  "/bristol",
  "/edinburgh",
  "/glasgow",
  "/newcastle",
  "/leicester",
  "/nottingham",
]

// Services nested routes
const serviceRoutes = [
  "/services/seo",
  "/services/google-ads",
  "/services/meta-ads",
  "/services/web-development",
  "/services/website-development",
  "/services/branding",
  "/services/consulting",
]

// Free AI Tools nested routes
const aiToolRoutes = [
  "/free-ai-tools-online/blog-outline-generator",
  "/free-ai-tools-online/meta-description-generator",
  "/free-ai-tools-online/meta-title-generator",
  "/free-ai-tools-online/utm-builder",
]

// London nested routes
const londonNestedRoutes = ["/london/seo"]

// Team member slugs
const teamSlugs = [
  "waleed-sabbir",
  "sarmad-shabir",
  "jamshaid-ahmed",
  "waleed-hussain",
  "kawish-azeem",
]

// Case study slugs
const caseStudySlugs = ["techflow", "manufacturing-co", "legal-partners"]

// Blog post slugs (static for now; extend dynamically if a CMS is added)
const blogSlugs = ["seo-trends-2025", "local-seo-strategies", "technical-seo-checklist"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Top-level routes
  const topLevel: MetadataRoute.Sitemap = topLevelRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // City routes (treated as top-level pages)
  const cities: MetadataRoute.Sitemap = cityRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // Nested service routes
  const services: MetadataRoute.Sitemap = serviceRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  // Nested AI tool routes
  const aiTools: MetadataRoute.Sitemap = aiToolRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // London nested routes
  const londonNested: MetadataRoute.Sitemap = londonNestedRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Team member dynamic routes
  const teamMembers: MetadataRoute.Sitemap = teamSlugs.map((slug) => ({
    url: `${BASE_URL}/team/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Case study dynamic routes
  const caseStudies: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Blog post dynamic routes
  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    ...homepage,
    ...topLevel,
    ...cities,
    ...services,
    ...aiTools,
    ...londonNested,
    ...teamMembers,
    ...caseStudies,
    ...blogPosts,
  ]
}
