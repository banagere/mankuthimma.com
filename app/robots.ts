import { MetadataRoute } from "next";
import site from "@/src/components/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.website}/sitemap.xml`,
    host: `${site.website}`,
  };
}
