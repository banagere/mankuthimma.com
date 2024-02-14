import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { PostMetrics } from "ui/PostMetrics";
import * as config from "@/src/seo/index";
import { notFound } from "next/navigation";
import { Mdx } from "components/mdx";
import { Metadata } from "next";

const findPostBySlug = (slug) => allPosts.find((post) => post.slug === slug);

export default async function Kagga({ params }) {
  const post = findPostBySlug(params?.slug);

  if (!post) {
    notFound();
    return null; // Return null to avoid rendering errors
  }

  return (
    <>
      <div className="">
        <BackToHomeButton />
        <div className="max-w-xl mx-auto text-center">
          <div className="relative mt-2">
            <h1 className="text-2xl font-semibold dark:text-white-100">
              {post.title}
            </h1>
            <p className="font-semibold tracking-wider text-gold-500">
              {post.number}
              <PostMetrics slug={post.slug} />
            </p>
          </div>

          <Mdx code={post.body.code} />
        </div>
      </div>
    </>
  );
}

const BackToHomeButton = () => (
  <button className="px-2 py-1 mb-2 text-sm font-medium text-white duration-500 rounded-full shadow md:mb-0 md:absolute hover:shadow-md bg-gold-600 hover:bg-opacity-80">
    <Link href="/">← Home</Link>
  </button>
);

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = findPostBySlug(params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      type: "article",
      url: `${config.baseUrl}/kagga/${post.slug}`,
      authors: "Ravi Banagere",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
    },
  };
}
