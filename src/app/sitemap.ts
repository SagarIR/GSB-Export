import { MetadataRoute } from "next";
import { PRODUCTS } from "@/content/products";
import { INDUSTRIES } from "@/content/industries";
import { ARTICLES } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gsbexport.com";
  const now = new Date();

  // Core Pages
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
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route === "/request-a-quote" || route === "/products" ? 0.9 : 0.8,
  }));

  // 7 Product Detail Pages
  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // 7 Industry Detail Pages
  const industryRoutes = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // 8 Resource Article Detail Pages
  const articleRoutes = ARTICLES.map((art) => ({
    url: `${baseUrl}/resources/${art.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainRoutes, ...productRoutes, ...industryRoutes, ...articleRoutes];
}
