import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function NotFound() {
  return (
    <div className="pt-10 text-xl text-center">
      <h2 className="font-bold tracking-wider uppercase">404 — Page Not Found</h2>
      <p className="flex justify-center gap-2 pt-2 font-medium">
        Looks like you've stumbled upon a missing page.
      </p>
      <p className="flex justify-center gap-2 font-medium">
        Click here to go back
        <Link href={"/"} className="text-red-700 hover:opacity-80">
          home &rarr;
        </Link>
      </p>
    </div>
  );
}
