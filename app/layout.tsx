import "../public/global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/apple-touch-icon.png";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col scroll-smooth selection:bg-black selection:text-white">
        <header className="">
          <div className="flex p-5 mx-auto max-w-7xl">
            <Link href="/" className="duration-500 hover:opacity-80">
              <Image
                src={logo}
                alt={"Kagga Logo"}
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
        </header>

        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}

const meta = {
  title: "Mankuthimmana Kagga",
  description:
    "An accessible repository for the people who love Mankuthimmana Kagga, written by DV Gundappa.",
  url: "https://mankuthimma.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${meta.url}`),
  title: {
    default: `${meta.title}`,
    template: "%s",
  },
  description: `${meta.description}`,
  keywords: "DV Gundappa, Kagga, Kannada",
  openGraph: {
    title: `${meta.title}`,
    description: `${meta.description}`,
    url: `${meta.url}`,
    siteName: `${meta.title}`,
    images: [
      {
        url: `${meta.url}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${meta.title}`,
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${meta.title}`,
    card: "summary_large_image",
    images: `${meta.url}/opengraph-image.jpg`,
    site: `${meta.url}`,
    description: `${meta.description}`,
  },
  icons: {
    shortcut: `${meta.url}/favicon.ico`,
  },
  verification: {
    // google: "qQhmLTwjNWYgQ7W42nSTq63xIrTch13X_11mmxBE9zk",
    yandex: "",
    other: {
      // bing: "164551986DA47F7F6FC0D21A93FFFCA6",
    },
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
};
