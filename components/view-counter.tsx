"use client";

// import { kv } from "@vercel/kv";

// export default async function ViewCounter() {
//   const views = await kv.incr("views");

//   return (
//     <p className="text-sm text-gray-500">
//       {Intl.NumberFormat("en-us").format(views)} views
//     </p>
//   );
// }

// Specific slug
import { useEffect, useState } from "react";

export default function ViewCounter({ slug }) {
  const [views, setViews] = useState();

  useEffect(() => {
    // Function to fetch the view count
    const fetchViews = async () => {
      const response = await fetch(`/api/view-counter/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setViews(data.views);
      }
    };

    fetchViews();
  }, [slug]); // Re-fetch if the slug changes

  // Only render the view count if it has been set
  return views !== undefined ? (
    <>
      {" • "}
      {Intl.NumberFormat("en-us").format(views)} views
    </>
  ) : null;
}
