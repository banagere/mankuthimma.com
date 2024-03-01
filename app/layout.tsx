import "src/ui/main.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col max-w-5xl px-5 mx-auto">
        <header className="flex justify-between mt-5 mb-3 border-b-2 border-gold-300">
          <Link
            href="/"
            className="text-xl font-medium md:text-2xl hover:text-gold-500"
          >
            Mankuthimmana Kagga
          </Link>
          <nav className="pt-1 md:pt-2">
            <Link href="/about" className="font-medium hover:opacity-60">
              About
            </Link>
            {/* {" • "}
            <Link
              href={"https://twitter.com/Kagga_BOT"}
              className={footerLinkClassName}
              rel="noreferrer noopener"
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
        </footer>
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
  },
  icons: {
    shortcut: "https://mankuthimma.com/favicon.ico",
  },
};
