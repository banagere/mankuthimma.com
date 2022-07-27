import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { getPostFromSlug, getSlugs, PostMeta } from "../../components/api";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>

      <span className="font-semibold text-bronze-600 hover:text-bronze-400">
        <Link href="/">← Home</Link>
      </span>

      <div className="">
        <h1 className="mt-5 text-2xl font-bold">{post.meta.title}</h1>
        <p className="text-lg font-semibold text-neutral-500">
          {post.meta.number}
        </p>
      </div>

      <article className="pt-5 prose prose-h1:text-2xl prose-h2:text-xl prose-h2:text-gray-400 prose-h3:text-lg prose-h3:text-bronze-500 prose-h3:mt-2 prose-headings:m-0 prose-img:rounded-md">
        <MDXRemote {...post.source} components={{ Image }} />
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeHighlight,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      remarkPlugins: [remarkGfm],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
