import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  buildOrganizationAndWebsiteJsonLd,
} from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#0A1C33",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GSB Export | Industrial Heat Exchanger Supplier & Exporter India",
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
  publisher: "GSB Export",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GSB Export",
    title: "GSB Export | Industrial Heat Exchanger Supplier & Exporter India",
    description:
      "Reliable sourcing, technical coordination and quality-focused export of industrial heat exchangers from Vadodara, India.",
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        alt: "GSB Export — Industrial Heat Exchanger Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSB Export | Industrial Heat Exchanger Supplier & Exporter India",
    description:
      "Reliable sourcing, technical coordination and quality-focused export of industrial heat exchangers from Vadodara, India.",
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  robots: {
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgAndSiteJsonLd = buildOrganizationAndWebsiteJsonLd();

  return (
    <html lang="en">
      <head>
        <JsonLd data={orgAndSiteJsonLd} />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-graphite bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
