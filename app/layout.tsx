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
      <body className="flex flex-col h-screen max-w-xl px-5 mx-auto bg-white dark:bg-black-100">
        {/* Header Section */}
        <header className="flex justify-between mt-5 mb-3 border-b-2 border-gold-300">
          <Link
            href="/"
            className="text-2xl font-semibold hover:text-gold-500 dark:text-white-100"
          >
            Mankuthimmana Kagga
          </Link>
          <div className="pt-2 text-sm text-black-100 dark:text-gray-300">
            <Link href="/about" className={footerLinkClassName}>
              About
            </Link>
            {" • "}
            <Link
              href="https://github.com/banagere/mankuthimma.com"
              className={footerLinkClassName}
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Github (opens in a new tab)"
            >
              Github
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pb-5">
          {children}
          <Analytics />
        </main>

        {/* Footer Section */}
        <footer className="py-5 mx-auto">
          {/* <div className="pt-3 text-sm text-center text-black-100 dark:text-gray-300">
            <Link href="/about" className={footerLinkClassName}>
              About
            </Link>
            {" • "}
            <Link
              href="https://github.com/banagere/mankuthimma.com"
              className={footerLinkClassName}
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Github (opens in a new tab)"
            >
              Github
            </Link>
          </div> */}
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
  // description: "Musician, Writer and Developer!",
  openGraph: {
    title: "Mankuthimmana Kagga",
    // description: "Musician, Writer and Developer!",
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
    shortcut: "https://mankuthimma.com/favicons/favicon.ico",
  },
};
