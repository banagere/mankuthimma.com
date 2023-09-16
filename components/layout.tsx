import Link from "next/link";

// Type definitions
interface Props {
  children?: React.ReactNode;
}

// Constants for class names
const headerClassName =
  "text-2xl font-medium my-9 hover:text-gold-500 dark:text-white-100";
const footerLinkClassName =
  "font-medium text-black-100 hover:text-gold-500 dark:text-gray-300";

// Layout component that includes header, main content, and footer
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <header className="py-8 text-center">
        <Link href="/" className={headerClassName}>
          Mankuthimmana Kagga
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

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
    </div>
  </>
);

export default Layout;
