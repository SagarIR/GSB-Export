import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/content/company";

export const viewport: Viewport = {
  themeColor: "#10263D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gsbexport.com"),
  title: {
    default: "GSB Export | Industrial Heat Exchanger Solutions & Supply",
    template: "%s | GSB Export",
  },
  description:
    "GSB Export provides industrial heat exchanger solutions and equipment supply services for global process industries through reliable sourcing, technical coordination and quality-focused supply.",
  keywords: [
    "Industrial Heat Exchanger Supplier",
    "Shell and Tube Heat Exchanger Supplier",
    "Plate Heat Exchanger Supplier",
    "Air-Cooled Heat Exchanger",
    "Double Pipe Heat Exchanger",
    "Spiral Heat Exchanger",
    "Industrial Heat Exchanger Exporter India",
    "Vadodara Heat Exchanger Export",
    "ASME TEMA Heat Exchangers",
  ],
  authors: [{ name: "GSB Export" }],
  creator: "GSB Export",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gsbexport.com",
    title: "GSB Export | Industrial Heat Exchanger Solutions & Supply",
    description:
      "Reliable sourcing, technical coordination and quality-focused export of industrial heat exchangers from India.",
    siteName: "GSB Export",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: "https://gsbexport.com",
    logo: "https://gsbexport.com/logo/gsb-logo.svg",
    description: COMPANY_INFO.heroSupportText,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_INFO.headquarters.city,
      addressRegion: COMPANY_INFO.headquarters.state,
      addressCountry: COMPANY_INFO.headquarters.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Technical Sales",
      email: COMPANY_INFO.contact.email,
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Shell and Tube Heat Exchanger",
          description: "High-pressure, ASME/TEMA compliant shell and tube heat exchangers for refining and chemical processing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Plate Heat Exchanger",
          description: "Compact gasketed and welded plate heat exchangers for dairy, food, and HVAC district cooling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Air-Cooled Heat Exchanger",
          description: "Water-free fin-fan air-cooled heat exchangers for power plants and desert gas compression.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-graphite bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
