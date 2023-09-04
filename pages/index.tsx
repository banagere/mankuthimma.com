// External Libraries
import Link from "next/link";

// Internal Libraries
import { allPosts, Post } from "contentlayer/generated";
import { pick } from "contentlayer/client";

// Types
type HomeProps = {
  posts: Post[];
};

type ArticleProps = Post;

// Fetch and sort posts for static site generation
export async function getStaticProps() {
  const sortedPosts = allPosts
    .sort((a, b) => a.weight - b.weight)
    .map((post) => pick(post, ["url", "title", "number"]));

  return { props: { posts: sortedPosts } };
}

// Component to display a single article
const Article: React.FC<ArticleProps> = ({ url, title, number }) => (
  <li className="flex justify-between text-lg">
    <Link
      href={url}
      className="font-medium hover:text-gold-500 dark:text-white-100"
    >
      {title}
    </Link>
    <span className="w-24 tracking-widest text-center text-gold-500">
      {number}
    </span>
  </li>
);

// Home component that renders a list of articles
const Home: React.FC<HomeProps> = ({ posts }) => (
  <ul className="flex flex-col">
    {posts.map((post) => (
      <Article key={post.url} {...post} />
    ))}
  </ul>
);

export default Home;
