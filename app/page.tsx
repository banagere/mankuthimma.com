import { allPosts } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import Link from "next/link";

export default function Index() {
  const sortedPosts = allPosts
    .sort((a, b) => a.weight - b.weight)
    .map((post) => pick(post, ["url", "title", "number"]));
  return (
    <>
      <ul className="flex flex-col">
        {sortedPosts?.map((post) => (
          <li className="flex justify-between text-lg" key={post.url}>
            <Link
              href={post.url}
              className="font-medium hover:text-gold-500 dark:text-white-100"
            >
              {post.title}
            </Link>
            <span className="w-24 tracking-widest text-center text-gold-500">
              {post.number}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
