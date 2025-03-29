import { MetadataRoute } from "next";
export const dynamic = "force-static"; // Ensure static export
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zathuradbg.github.io/",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://zathuradbg.github.io/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
