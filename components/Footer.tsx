import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-neutral-500">
      <Link href="/notes">Release Notes</Link> •{" "}
      <Link href="/about">About</Link>
    </footer>
  );
}
