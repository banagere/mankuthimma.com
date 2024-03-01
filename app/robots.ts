import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: "/private/",
    },
    // sitemap: "https://mankuthimma.com/sitemap.xml",
    sitemap: "https://mankuthimma.com/sitemap.xml",
  };
}
