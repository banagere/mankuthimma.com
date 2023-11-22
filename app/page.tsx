import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";

export default function Index() {
  const sortedPosts = allPosts.sort((a, b) => a.weight - b.weight);
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        {sortedPosts?.map((post) => (
          <li className="flex items-baseline justify-between" key={post.slug}>
            <Link
              href={`/kagga/${post.slug}`}
              className="text-lg font-medium truncate hover:text-gold-500 dark:text-white-100"
            >
              {post.title}
            </Link>
            <p className="tracking-wider text-gold-500">{post.number}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
