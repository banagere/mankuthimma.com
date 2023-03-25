import * as config from ".";
import type { StaticImageData } from "next/image";
import type {
  DefaultSeoProps,
  SocialProfileJsonLdProps,
  ArticleJsonLdProps,
} from "next-seo";

// favicons (some used here, some re-exported and used elsewhere)
import faviconIco from "../../public/favicons/favicon.ico";
// import faviconPng from "../../public/favicons/favicon.png";
import appleTouchIconPng from "../../public/favicons/apple-touch-icon.png";
import chrome512Png from "../../public/favicons/android-chrome-512x512.png";
import chrome192Png from "../../public/favicons/android-chrome-192x192.png";
import shareImage from "../../public/images/share-image.png";

export const defaultSeo: DefaultSeoProps = {
  defaultTitle: `${config.siteName}`,
  description: config.longDescription,
  openGraph: {
    site_name: config.siteName,
    title: config.siteName,
    locale: config.siteLocale,
    type: "website",
    images: [
      {
        url: `${config.baseUrl}${shareImage.src}`,
        alt: `${config.siteName} | ${config.shortDescription}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: `@${config.authorSocial?.twitter}`,
    site: `@${config.authorSocial?.twitter}`,
    cardType: "summary",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "author",
      content: config.authorName,
    },
    // {
    //   name: "google-site-verification",
    //   content: config.verifyGoogle,
    // },
    // {
    //   name: "msvalidate.01",
    //   content: config.verifyBing,
    // },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: faviconIco.src,
    },
    {
      rel: "apple-touch-icon",
      href: appleTouchIconPng.src,
      sizes: `${appleTouchIconPng.width}x${appleTouchIconPng.height}`,
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    // {
    //   rel: "alternate",
    //   href: "/feed.xml",
    //   type: "application/rss+xml",
    //   // @ts-ignore
    //   title: `${config.siteName} (RSS)`,
    // },
    // {
    //   rel: "alternate",
    //   href: "/feed.atom",
    //   type: "application/atom+xml",
    //   // @ts-ignore
    //   title: `${config.siteName} (Atom)`,
    // },
    // {
    //   rel: "humans",
    //   href: "/humans.txt",
    // },
    // {
    //   rel: "pgpkey",
    //   href: "/pubkey.asc",
    //   type: "application/pgp-keys",
    // },
  ],
};

// https://github.com/garmeeh/next-seo#social-profile
export const socialProfileJsonLd: SocialProfileJsonLdProps = {
  type: "Person",
  name: config.authorName,
  url: `${config.baseUrl}/`,
  sameAs: [
    `${config.baseUrl}/`,
    `https://github.com/${config.authorSocial?.github}`,
    `https://twitter.com/${config.authorSocial?.twitter}`,
  ],
};

// Just the basic items applicable to all notes, extended by pages/notes/[slug].tsx
// https://github.com/garmeeh/next-seo#article-1
export const articleJsonLd: Pick<
  ArticleJsonLdProps,
  "authorName" | "publisherName"
> = {
  authorName: [config.authorName],
  publisherName: config.siteName,
};

// Re-export icons to use their static image data elsewhere
export const favicons: Record<string, StaticImageData> = {
  faviconIco,
  appleTouchIconPng,
  chrome512Png,
  chrome192Png,
  shareImage,
};
