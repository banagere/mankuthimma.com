// External Libraries
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useMDXComponent } from "next-contentlayer/hooks";

// Internal Libraries
import { allPosts } from "contentlayer/generated";
import { PostMetrics } from "ui/PostMetrics";
import * as config from "@/src/seo/index";
import { notFound } from "next/navigation";

// Function to find a post by its slug
const findPostBySlug = (slug) => allPosts.find((post) => post.slug === slug);

export default async function Kagga({ params }) {
  const post = findPostBySlug(params?.slug);

  if (!post) {
    notFound();
    return null; // Return null to avoid rendering errors
  }

  return (
    <div className="max-w-2xl px-4 mx-auto">
      <BackToHomeButton />

      <div>
        <h1 className="mt-5 text-3xl font-bold dark:text-white-100">
          {post.title}
        </h1>
        <p className="text-lg font-semibold tracking-wider text-gold-500">
          {post.number}
          {/* <PostMetrics slug={post.slug} /> */}
        </p>
      </div>

      <article className="pt-5 prose dark:prose-invert prose-h1:text-2xl prose-h2:text-3xl prose-h2:text-gold-500 prose-h3:text-lg prose-h3:text-gold-500 prose-h3:mt-2 prose-headings:mb-1 prose-img:rounded-md">
        {/* <MDXContent /> */}
      </article>
    </div>
  );
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

  // SEO Configuration
  const seoConfig = {
    title: `Kagga | ${post.title}`,
    canonical: `${config.baseUrl}/kagga/${post.slug}`,
    openGraph: {
      title: `Kagga | ${post.title}`,
      url: `${config.baseUrl}/kagga/${post.slug}`,
      type: "article",
      article: {
        authors: [config.authorName],
      },
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };

  return (
    <>
      <NextSeo {...seoConfig} />
    </>
  );
};
