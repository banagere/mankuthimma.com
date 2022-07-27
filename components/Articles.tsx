import Link from "next/link";
import type { PostMeta } from "./api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <ul className="flex flex-col gap-1">
        {posts.map((post) => (
          <li className="py-px" key={post.slug}>
            <text className="px-5 font-medium tracking-widest align-middle">{post.number}</text>
            <span className="text-xl font-bold align-top hover:text-bronze-500">
              <Link href={`/kagga/${post.slug}`}>{post.title}</Link>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
