import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Metadata } from "next";
import { Suspense } from "react";
import ViewCounter from "@/app/components/view-counter";

// Precompute sorted slugs and posts map
const sortedSlugs = allPosts
  .sort((a, b) => (a.weight ?? 0) - (b.weight ?? 0))
  .map((post) => post.slug);
const postsBySlug = new Map(allPosts.map((post) => [post.slug, post]));

export default function Kagga({ params }) {
  const { slug } = params;
  const post = postsBySlug.get(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = sortedSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? sortedSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < sortedSlugs.length - 1
      ? sortedSlugs[currentIndex + 1]
      : null;

  return (
    <div className="px-5 pb-10 mx-auto max-w-7xl">
      <NavigationLinks prevSlug={prevSlug} nextSlug={nextSlug} />
      <article className="max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
        <p className="pb-5 font-semibold tracking-wider text-red-700">
          {post.number}
          <Suspense fallback={<span className="opacity-0">Loading...</span>}>
            <ViewCounter slug={post.slug} />
          </Suspense>
        </p>
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}

function NavigationLinks({ prevSlug, nextSlug }) {
  return (
    <div className="flex justify-between mb-2">
      {prevSlug && (
        <Link
          href={`/kagga/${prevSlug}`}
          className="duration-500 hover:opacity-70"
        >
          &larr; Previous
        </Link>
      )}
      {nextSlug && (
        <Link
          href={`/kagga/${nextSlug}`}
          className="duration-500 hover:opacity-70"
        >
          Next &rarr;
        </Link>
      )}
    </div>
  );
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = postsBySlug.get(params.slug);
  if (!post) return;

  const meta = {
    title: "Mankuthimmana Kagga",
    description:
      "An accessible repository for the people who love Mankuthimmana Kagga, written by DV Gundappa.",
    url: "https://mankuthimma.com",
  };

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      type: "article",
      url: `${meta.url}/kagga/${post.slug}`,
      images: `${meta.url}/opengraph-image.jpg`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
    },
  };
}
