import "src/ui/main.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { Metadata } from "next";
import CMDK from "components/cmdk";
import Shortcuts from "components/shortcuts";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col max-w-5xl px-5 mx-auto">
        <header className="flex justify-between mt-5 mb-3 border-b border-neutral-900">
          <Link
            href="/"
            className="text-xl font-medium md:text-2xl hover:opacity-70"
          >
            Mankuthimmana Kagga
          </Link>
          <nav className="pt-1 md:pt-2">
            <Link href="/about" className="font-medium hover:opacity-70">
              About
            </Link>
            {/* {" • "}
            <Link
              href={"https://twitter.com/Kagga_BOT"}
              className={footerLinkClassName}
              target="_blank"
              aria-label="Twitter (opens in a new tab)"
            >
              Twitter
            </Link> */}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="py-5">
          <Analytics />
          <SpeedInsights />
          {/* <CMDK /> */}
          {/* <Shortcuts /> */}
        </footer>
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
        url: `${meta.url}/images/opengraph-image.jpg`,
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
    images: `${meta.url}/images/opengraph-image.jpg`,
    site: `${meta.url}`,
    description: `${meta.description}`,
  },
  icons: {
    shortcut: `${meta.url}/favicon.ico`,
  },
};
