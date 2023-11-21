import { allPosts } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import Link from "next/link";
import { Metadata } from "next";

export default function Index() {
  const sortedPosts = allPosts
    .sort((a, b) => a.weight - b.weight)
    .map((post) => pick(post, ["url", "title", "number"]));
  return (
    <>
      {/* <ul className="flex flex-wrap justify-around gap-x-6 gap-y-4">
        {sortedPosts?.map((post) => (
          <li className="" key={post.url}>
            <Link
              href={post.url}
              className="hover:text-gold-500 dark:text-white-100"
            >
              {post.title}
              <p className="text-gold-500">{post.number}</p>
            </Link>
          </li>
        ))}
      </ul> */}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        {sortedPosts?.map((post) => (
          <li className="flex items-baseline justify-between" key={post.url}>
            <Link
              href={post.url}
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
