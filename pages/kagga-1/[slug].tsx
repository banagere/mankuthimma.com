// External Libraries
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

// Internal Libraries
import { allPosts } from "contentlayer/generated";

// Generate static paths based on available posts
export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

// Fetch the post for the given slug
export async function getStaticProps({ params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: { post },
  };
}

// Helper component for the Back to Home button
const BackToHomeButton = () => (
  <button className="px-2 py-1 font-medium duration-300 rounded-full shadow hover:shadow-md text-white-100 hover:from-gold-500 hover:to-gold-700 from-gold-500 via-gold-600 to-gold-700 bg-gradient-to-br">
    <Link href="/">← Home</Link>
  </button>
);

// Main Post Layout
const PostLayout = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return <></>;
};

export default PostLayout;
