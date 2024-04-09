import { MetadataRoute } from "next";
import site from "@/src/components/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}`,
    short_name: `${site.domain}`,
    description: `${site.description}`,
    start_url: "/",
    // display: "standalone",
    display: "browser",
    lang: "en-IN",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
