import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import * as config from "@/src/seo/index";
import { notFound } from "next/navigation";
import { Mdx } from "components/mdx";
import { Metadata } from "next";
import { Suspense } from "react";
import ViewCounter from "components/view-counter";

const postsBySlug = new Map(allPosts.map((post) => [post.slug, post]));

export default async function Kagga({ params }) {
  const post = postsBySlug.get(params?.slug);
  const allSlugs = Array.from(postsBySlug.keys()).sort((slugA, slugB) => {
    const postA = postsBySlug.get(slugA);
    const postB = postsBySlug.get(slugB);
    return (postA?.weight ?? 0) - (postB?.weight ?? 0);
  });
  const currentIndex = allSlugs.indexOf(params.slug);
  const prevSlug = allSlugs[currentIndex - 1] || null;
  const nextSlug = allSlugs[currentIndex + 1] || null;

  if (!post) {
    notFound();
    return null;
  }

  return (
    <>
      <div>
        <div className="flex justify-between mb-2">
          {prevSlug && (
            <Link href={`/kagga/${prevSlug}`} className="hover:opacity-70">
              &larr; Previous
            </Link>
          )}
          {nextSlug && (
            <Link href={`/kagga/${nextSlug}`} className="hover:opacity-70">
              Next &rarr;
            </Link>
          )}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <p className="font-semibold tracking-wider text-red-700">
            {post.number}
            {/* <Suspense>
              <ViewCounter slug={post.slug} />
            </Suspense> */}
          </p>

          <Mdx code={post.body.code} />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = postsBySlug.get(params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      type: "article",
      url: `${config.baseUrl}/kagga/${post.slug}`,
      images: `${config.baseUrl}/images/opengraph-image.jpg`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
    },
  };
}
