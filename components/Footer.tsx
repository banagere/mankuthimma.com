import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mx-auto">
      <hr className="w-56 mx-auto border border-gold-300 dark:border-gold-500" />
      <div className="pt-3 text-center">
        <span className="font-bold tracking-wider uppercase text-black-100 hover:text-gold-500 dark:text-gray-300">
          <Link href="/about">About</Link>
        </span>
      </div>
    </footer>
  );
}
