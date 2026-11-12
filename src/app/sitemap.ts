import { MetadataRoute } from "next";
import { PRODUCTS } from "@/content/products";
import { INDUSTRIES } from "@/content/industries";
import { ARTICLES } from "@/content/resources";
import { SITE_URL, SITE_LAST_UPDATED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Core Indexable Pages (excludes /thank-you, /api/*, and non-indexable routes)
  const mainRoutes = [
    "",
    "/about-us",
    "/products",
    "/industries",
    "/engineering-solutions",
    "/quality-assurance",
    "/manufacturing-supply",
    "/global-markets",
    "/projects",
    "/resources",
    "/contact-us",
    "/request-a-quote",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route === "/request-a-quote" || route === "/products" ? 0.9 : 0.8,
  }));

  // Product Detail Pages
  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${SITE_URL}/products/${prod.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Industry Detail Pages
  const industryRoutes = INDUSTRIES.map((ind) => ({
    url: `${SITE_URL}/industries/${ind.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Resource Article Detail Pages
  const articleRoutes = ARTICLES.map((art) => ({
    url: `${SITE_URL}/resources/${art.slug}`,
    lastModified: new Date(`${art.publishDate}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainRoutes, ...productRoutes, ...industryRoutes, ...articleRoutes];
}
