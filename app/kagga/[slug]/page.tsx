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
import { Mdx } from "components/mdx";
import { Metadata } from "next";

// Function to find a post by its slug
const findPostBySlug = (slug) => allPosts.find((post) => post.slug === slug);

export default async function Kagga({ params }) {
  const post = findPostBySlug(params?.slug);

  if (!post) {
    notFound();
    return null; // Return null to avoid rendering errors
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative mt-2">
        <BackToHomeButton />
        <h1 className="text-2xl font-semibold dark:text-white-100">
          {post.title}
        </h1>
        <p className="font-semibold tracking-wider text-gold-500">
          {post.number}
          {/* <PostMetrics slug={post.slug} /> */}
        </p>
      </div>

      <Mdx code={post.body.code} />
    </div>
  );
}

// Helper component for the Back to Home button
const BackToHomeButton = () => (
  // <button className="px-2 py-1 text-sm font-medium rounded-full shadow duration-400 hover:shadow-md text-white-100 hover:from-gold-500 hover:to-gold-700 from-gold-500 via-gold-600 to-gold-700 bg-gradient-to-br">
  //   <Link href="/">← Home</Link>
  // </button>
  <button className="px-2 py-1 mb-2 text-sm font-medium rounded-full shadow md:mb-0 md:absolute md:-ml-24 duration-400 hover:shadow-md text-white-100 hover:from-gold-500 hover:to-gold-700 from-gold-500 via-gold-600 to-gold-700 bg-gradient-to-br">
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

// Function to generate metadata for the page
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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
    },
  };
}
