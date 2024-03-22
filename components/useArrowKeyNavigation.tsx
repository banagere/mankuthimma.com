"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

// This hook accepts the previous and next slugs for navigation
const useArrowKeyNavigation = (
  prevSlug: string | null,
  nextSlug: string | null
) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight" && nextSlug) {
        router.push(`/kagga/${nextSlug}`);
      } else if (event.key === "ArrowLeft" && prevSlug) {
        router.push(`/kagga/${prevSlug}`);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router, nextSlug, prevSlug]); // React to changes in slugs or the router
};

export default useArrowKeyNavigation;
