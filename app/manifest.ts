import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mankuthimmana Kagga",
    short_name: "Mankuthimmana Kagga",
    description:
      "An accessible repository for the people who love Mankuthimmana Kagga, written by DV Gundappa.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
