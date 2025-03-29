import { MetadataRoute } from "next";
export const dynamic = "force-static"; // Ensure static export
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://zathuradbg.github.io/sitemap.xml",
  };
}
