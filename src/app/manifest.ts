import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GSB Export — Industrial Heat Exchanger Solutions",
    short_name: "GSB Export",
    description: "B2B Industrial Heat Exchanger Solutions, Sourcing & Technical Supply",
    start_url: "/",
    display: "standalone",
    background_color: "#10263D",
    theme_color: "#10263D",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logo/gsb-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
