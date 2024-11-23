import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { useMemo } from "react";

const paragraph = "font-medium py-4 text-2xl";

function PostsList({ posts }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
      {posts.map(({ slug, title, number }) => (
        <li className="flex items-baseline justify-between" key={slug}>
          <Link
            href={`/kagga/${slug}`}
            className="text-lg font-medium truncate hover:text-red-700"
          >
            {title}
          </Link>
          <p className="font-medium tracking-wider text-red-700">{number}</p>
        </li>
      ))}
    </ul>
  );
}

function InfoSection() {
  return (
    <div className="max-w-5xl px-5 py-10 mx-auto text-center">
      {[
        "Mankuthimmana Kagga, written by Devanahalli Venkataramanaiah Gundappa (DVG) was first published in 1943. It stands as a prominent piece of Kannada literature. This collection comprises 945 poems, each spanning four lines, with several written in old Kannada (ಹಳೆಗನ್ನಡ).",
        "This book explores deeper questions of life, reflects on the essence of Ultimate Truth (reality), and suggests leading a balanced life amidst the complexities and constant changes of our world. It encourages adopting a moderate approach, with one hand reaching for the Ultimate Truth and the other engaged with the tangible world.",
        "Mankuthimmana Kagga fascinated me the first time I read it at school. I wished to revisit it and share some snippets, but I couldn't find it online. This led me to create this website. This treasure should be accessible to all and shouldn't be hidden.",
        "The content for this site was sourced from books and websites, and all credit goes to the original authors and publishers.",
        "I earn no money from this website and did this out of gratitude for DVG's craft.",
        "I hope these Kagga's change your outlook towards life, as it did to mine!",
        "Please buy the book to support the publishers, printers, editors and authors!",
        <>
          Also, this website&apos;s code is publicly accessible. If you&apos;d like to
          check it, visit{" "}
          <Link
            href="https://github.com/banagere/mankuthimma.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github (opens in a new tab)"
            className="underline duration-500 hover:opacity-70 underline-offset-4"
          >
            Github
          </Link>
          .
        </>,
      ].map((text, index) => (
        <p key={index} className={paragraph}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default function Index() {
  const sortedPosts = useMemo(
    () => allPosts?.sort((a, b) => a.weight - b.weight) ?? [],
    []
  );

  if (!sortedPosts.length) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="snap-y snap-mandatory">
      <div className="min-h-screen px-5 pb-5 mx-auto max-w-7xl snap-center snap-always">
        <PostsList posts={sortedPosts} />
      </div>

      <div className="min-h-screen text-white bg-red-700 snap-center snap-always">
        <InfoSection />
      </div>
    </div>
  );
}
