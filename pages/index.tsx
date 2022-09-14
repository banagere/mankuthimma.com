import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { pick } from "contentlayer/client";

export async function getStaticProps() {
  const sortedPosts = allPosts.sort((a, b) => {
    if (a.weight > b.weight) return 1;
    if (a.weight < b.weight) return -1;
    return 0;
  });

  const posts = sortedPosts.map((post) =>
    pick(post, ["url", "title", "number"])
  );

  return { props: { posts } };
}

function Articles(post: Post) {
  return (
    <>
      <ul>
        <li className="grid grid-cols-4 gap-16 text-lg">
          <Link href={`${post.url}`}>
            <a className="col-span-3 font-medium hover:text-gold-500 dark:text-white-100">
              {post.title}
            </a>
          </Link>

          <text className="w-24 tracking-widest text-center text-gold-500">
            {post.number}
          </text>
        </li>
      </ul>
    </>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <ul className="flex flex-col">
        {posts.map((post, idx) => (
          <Articles key={idx} {...post} />
        ))}
      </ul>
    </>
  );
}
