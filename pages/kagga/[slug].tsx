import Head from "next/head";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="max-w-2xl px-4 mx-auto">
        <button className="px-2 py-1 font-semibold rounded-md shadow-md text-white-100 hover:from-gold-500 hover:to-gold-700 from-gold-500 via-gold-600 to-gold-700 bg-gradient-to-br">
          <Link href="/">← Home</Link>
        </button>

        <div className="">
          <h1 className="mt-5 text-3xl font-bold dark:text-white-100">
            {post.title}
          </h1>
          <p className="text-lg font-semibold tracking-wider text-gold-500">
            {post.number}
          </p>
        </div>

        <article className="pt-5 prose dark:prose-invert prose-h1:text-2xl prose-h2:text-3xl prose-h2:text-gold-500 prose-h3:text-lg prose-h3:text-gold-500 prose-h3:mt-2 prose-headings:mb-1 prose-img:rounded-md">
          <MDXContent />
        </article>
      </div>
    </>
  );
};

export default PostLayout;
