import Link from "next/link";
import type { PostMeta } from "./api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li className="grid grid-cols-2 text-lg" key={post.slug}>
            <span className="font-semibold hover:text-gold-500 dark:text-white-100">
              <Link href={`/kagga/${post.slug}`}>{post.title}</Link>
            </span>
            <text className="font-medium tracking-widest text-right text-gold-500">
              {post.number}
            </text>
          </li>
        ))}
      </ul>
    </>
  );
}
