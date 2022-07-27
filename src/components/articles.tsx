import Link from "next/link";
import type { PostMeta } from "../api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="list-none">
      {posts.map((post) => (
        <li key={post.slug} className="flex flex-col max-w-xl mx-auto">
          <div className="">
            <text className="text-white align-bottom font-sm">{post.description}</text>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}