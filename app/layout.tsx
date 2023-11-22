import { Analytics } from "@vercel/analytics/react";
import "src/ui/main.scss";
import { Metadata } from "next";
import Link from "next/link";

// Props type definition for RootLayout component
interface RootLayoutProps {
  children: React.ReactNode;
}

// Constants for class names
const footerLinkClassName =
  "font-medium text-black-100 hover:text-gold-500 dark:text-gray-300";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* safari tab colour https://www.amitmerchant.com/get-your-website-ready-tab-bar-theming-of-safari-15/ */}
        <meta
          name="theme-color"
          content="#F8F8F8"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#202022"
          media="(prefers-color-scheme: dark)"
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="index, follow" />
      </head>

      <body className="flex flex-col h-screen max-w-5xl px-5 mx-auto bg-white dark:bg-black-100">
        {/* Header Section */}
        <header className="flex justify-between mb-3 border-b-2 mt-7 border-gold-300">
          <Link
            href="/"
            className="text-2xl font-medium hover:text-gold-500 dark:text-white-100"
          >
            Mankuthimmana Kagga
          </Link>
          <div className="pt-2 text-black-100 dark:text-gray-300">
            <Link href="/about" className={footerLinkClassName}>
              About
            </Link>
            {" • "}
            <Link
              href={"https://twitter.com/Kagga_BOT"}
              className={footerLinkClassName}
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Twitter (opens in a new tab)"
            >
              Twitter
            </Link>
          </div>
        </header>

        <main className="flex-grow pb-5">
          {children}
          <Analytics />
        </main>

        <footer className="py-3"></footer>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://mankuthimma.com"),
  title: {
    default: "Mankuthimmana Kagga",
    template: "%s",
  },
  description:
    "An accessible repository for the people who love Mankuthimmana Kagga, written by DV Gundappa.",
  keywords: "DV Gundappa, Kagga, Kannada",
  openGraph: {
    title: "Mankuthimmana Kagga",
    description:
      "An accessible repository for the people who love Mankuthimmana Kagga, written by DV Gundappa.",
    url: "https://mankuthimma.com",
    siteName: "Mankuthimmana Kagga",
    images: [
      {
        url: "https://mankuthimma.com/images/share-image.png",
        width: 1200,
        height: 630,
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
    title: "Mankuthimmana Kagga",
    card: "summary_large_image",
    // site: "@banagere_",
    // creator: "@banagere_",
  },
  icons: {
    shortcut: "https://mankuthimma.com/favicons/favicon.ico",
  },
};
