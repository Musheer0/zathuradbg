import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZathuraDbg",
    short_name: "ZathuraDbg",
    description: "The easiest GUI tool to learn and debug assembly",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#121212",
    icons: [
      {
        src: "/manifest/icon512_maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest/icon512_rounded.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Contact Creator",
        short_name: "Creator",
        description: "Want to discuss about Zathura or anything else?",
        url: "/contact-creator",
        icons: [
          {
            src: "/manifest/creator.png", 
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    ],
  };
}
