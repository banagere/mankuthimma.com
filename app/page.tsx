import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";

export default function Index() {
  const sortedPosts = allPosts?.sort((a, b) => a.weight - b.weight) ?? [];

  if (!sortedPosts.length) {
    return (
      <>
        <p>No posts found.</p>
      </>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        {sortedPosts.map(({ slug, title, number }) => (
          <li className="flex items-baseline justify-between" key={slug}>
            <Link
              href={`/kagga/${slug}`}
              className="text-lg font-medium truncate hover:text-gold-500 dark:text-white-100"
            >
              {title}
            </Link>
            <p className="tracking-wider text-gold-500">{number}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
