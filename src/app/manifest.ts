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
        src: "/logo/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo/gsb-logo.png",
        sizes: "1024x341",
        type: "image/png",
      },
    ],
  };
}

