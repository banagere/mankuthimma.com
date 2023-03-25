import Link from "next/link";
import Main from "./Head";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col h-screen">

        <header className="py-8 text-center">
          <Link
            href="/"
            className="text-2xl font-medium my-9 hover:text-gold-500 dark:text-white-100"
          >
            Mankuthimmana Kagga
          </Link>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="py-8 mx-auto">
          <div className="pt-3 text-center text-black-100 dark:text-gray-300">
            <Link
              href="/about"
              className="font-medium text-black-100 hover:text-gold-500 dark:text-gray-300"
            >
              About
            </Link>
            {" • "}
            <Link
              href="https://github.com/banagere/mankuthimma.com"
              className="font-medium text-black-100 hover:text-gold-500 dark:text-gray-300"
              rel="noreferrer noopener"
              target={"_blank"}
            >
              Github
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
