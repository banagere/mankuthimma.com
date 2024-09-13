"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

const postsBySlug = new Map(allPosts.map((post) => [post.slug, post]));

function useArrowNavigation({ params }) {
  const router = useRouter();

  // const post = postsBySlug.get(params?.slug);
  const allSlugs = Array.from(postsBySlug.keys()).sort((slugA, slugB) => {
    const postA = postsBySlug.get(slugA);
    const postB = postsBySlug.get(slugB);
    return (postA?.weight ?? 0) - (postB?.weight ?? 0);
  });
  const currentIndex = allSlugs.indexOf(params.slug);
  const prevSlug = allSlugs[currentIndex - 1] || null;
  const nextSlug = allSlugs[currentIndex + 1] || null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" && nextSlug) {
        // Add check for nextSlug
        router.push(`/kagga/${nextSlug}`);
      } else if (event.key === "ArrowLeft" && prevSlug) {
        // Add check for prevSlug
        router.push(`/kagga/${prevSlug}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, nextSlug, prevSlug]); // Include nextSlug and prevSlug as dependencies

  return null; // Custom hooks often don't need to return anything
}

export default useArrowNavigation;
