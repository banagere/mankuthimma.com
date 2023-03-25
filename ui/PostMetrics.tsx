/* eslint-disable react-hooks/exhaustive-deps */
import { usePostViews } from "components/usePostViews";
import React from "react";

export const PostMetrics = ({ slug }: { slug: string }) => {
  const { views, increment: incrementViews } = usePostViews(slug, {
    revalidateOnMount: false,
  });

  React.useEffect(() => {
    incrementViews();
  }, []);

  return <>{views ? ` • ${views?.toLocaleString()} views` : ``}</>;
};
