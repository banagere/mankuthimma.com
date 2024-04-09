"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Shortcuts = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the "Right Arrow" key was pressed
      if (event.key === "ArrowRight") {
        // Prevent default action to avoid scrolling or other side effects
        event.preventDefault();
        // Navigate to the next page. Update '/next-page' to your desired route
        router.push("/next-page");
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]); // Empty dependency array means this effect runs once on mount

  return <></>;
};

export default Shortcuts;
