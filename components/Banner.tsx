import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="py-8 text-center">
        <span className="text-3xl font-bold my-9 hover:text-gold-500 dark:text-white-100">
          <Link href="/">Mankuthimmana Kagga</Link>
        </span>
      </header>
    </>
  );
}
