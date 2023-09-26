import { Analytics } from "@vercel/analytics/react";
import "src/ui/main.scss";
import { Metadata } from "next";
import Link from "next/link";

// Props type definition for RootLayout component
interface RootLayoutProps {
  children: React.ReactNode;
}

// Constants for class names
const headerClassName =
  "text-2xl font-medium my-9 hover:text-gold-500 dark:text-white-100";
const footerLinkClassName =
  "font-medium text-black-100 hover:text-gold-500 dark:text-gray-300";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {/* Header Section */}
        <header className="py-8 text-center">
          <Link href="/" className={headerClassName}>
            Mankuthimmana Kagga
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>

        {/* Footer Section */}
        <footer className="py-8 mx-auto">
          <div className="pt-3 text-center text-black-100 dark:text-gray-300">
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
        </footer>
      </body>
    </html>
  );
}
