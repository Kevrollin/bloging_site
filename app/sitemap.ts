import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cybersecuritynews.pro"

  // Generate blog post URLs
  const blogPosts = Array.from({ length: 12 }, (_, i) => ({
    url: `${baseUrl}/blog/${i + 1}`,
    lastModified: new Date("2025-04-08"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Generate marketplace product URLs
  const marketplaceProducts = Array.from({ length: 3 }, (_, i) => ({
    url: `${baseUrl}/marketplace/${i + 1}`,
    lastModified: new Date("2025-04-08"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketplace`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date("2025-04-08"),
      changeFrequency: "always",
      priority: 0.6,
    },
    ...blogPosts,
    ...marketplaceProducts,
  ]
}
