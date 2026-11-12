import type { Metadata } from "next";
import { COMPANY_INFO } from "@/content/company";
import { PRODUCTS, type Product } from "@/content/products";
import type { ResourceArticle } from "@/content/resources";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://gsbexport.com"
).replace(/\/+$/, "");

export const DEFAULT_OG_IMAGE = "/images/hero/industrial-plant.png";
export const SITE_LAST_UPDATED = new Date("2026-11-12T00:00:00Z");

export interface PageMetadataOptions {
  title: string | { absolute: string };
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Builds canonical, Open Graph, Twitter Card, and robots metadata consistently across routes.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "GSB Export — Industrial Heat Exchanger Solutions & Engineering",
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const canonicalUrl = normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
  const resolvedTitle = typeof title === "string" ? `${title} | ${COMPANY_INFO.name}` : title.absolute;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: normalizedPath,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: "en_US",
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      title: resolvedTitle,
      description,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [imageUrl],
    },
  };
}

export interface BreadcrumbItemInput {
  name: string;
  path: string;
}

/**
 * Builds a valid Schema.org BreadcrumbList JSON-LD object.
 */
export function buildBreadcrumbJsonLd(items: BreadcrumbItemInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => {
      const normalized = item.path === "/" ? "" : `/${item.path.replace(/^\/+|\/+$/g, "")}`;
      return {
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: `${SITE_URL}${normalized}`,
      };
    }),
  };
}

/**
 * Builds root Organization and WebSite JSON-LD graph using verified company facts only.
 */
export function buildOrganizationAndWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo/gsb-logo.png`,
          width: 1024,
          height: 341,
        },
        description: COMPANY_INFO.heroSupportText,
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY_INFO.headquarters.city,
          addressRegion: COMPANY_INFO.headquarters.state,
          addressCountry: COMPANY_INFO.headquarters.countryCode,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales and technical support",
          email: COMPANY_INFO.contact.email,
          telephone: COMPANY_INFO.contact.phoneRaw,
          availableLanguage: ["English"],
        },
        areaServed: COMPANY_INFO.targetMarkets.map((market) => ({
          "@type": "Place",
          name: market.name,
        })),
        knowsAbout: [
          "Industrial Heat Exchangers",
          "Shell and Tube Heat Exchangers",
          "Plate Heat Exchangers",
          "Air-Cooled Heat Exchangers",
          "ASME Section VIII",
          "TEMA Standards",
          "API 660",
          "API 661",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Industrial Heat Exchangers",
          itemListElement: PRODUCTS.map((prod) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: prod.name,
              url: `${SITE_URL}/products/${prod.slug}`,
              description: prod.shortDescription,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY_INFO.name,
        description: COMPANY_INFO.heroSupportText,
        inLanguage: "en",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

/**
 * Builds Product JSON-LD for a heat exchanger product detail page without fabricated prices or reviews.
 */
export function buildProductJsonLd(product: Product) {
  const url = `${SITE_URL}/products/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.shortDescription} ${product.overview}`.slice(0, 500),
    image: `${SITE_URL}${product.image}`,
    url,
    sku: product.id,
    category: "Industrial Heat Exchangers",
    brand: {
      "@type": "Brand",
      name: COMPANY_INFO.name,
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Architecture",
        value: product.schematicType,
      },
      ...product.indicativeSpecs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.indicativeValue,
      })),
    ],
  };
}

/**
 * Builds TechArticle JSON-LD for engineering knowledge base articles.
 */
export function buildArticleJsonLd(article: ResourceArticle) {
  const url = `${SITE_URL}/resources/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    articleSection: article.category,
    inLanguage: "en",
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: `${COMPANY_INFO.name} Engineering Desk`,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * Builds FAQPage JSON-LD matching visible FAQ accordion questions and answers.
 */
export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Builds WebPage / AboutPage / ContactPage / CollectionPage / Service JSON-LD.
 */
export function buildWebPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
}) {
  const normalized = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${SITE_URL}${normalized}`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

