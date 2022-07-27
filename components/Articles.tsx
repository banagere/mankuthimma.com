import Link from "next/link";
import type { PostMeta } from "./api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <ul className="flex flex-col gap-1">
        {posts.map((post) => (
          <li className="py-px" key={post.slug}>
            <div className="flex items-start">
              <text className="px-5 font-medium tracking-widest text-right text-gold-500">
                {post.number}
              </text>
              <span className="ml-1 text-xl font-semibold hover:text-gold-500 dark:text-white-100">
                <Link href={`/kagga/${post.slug}`}>{post.title}</Link>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
