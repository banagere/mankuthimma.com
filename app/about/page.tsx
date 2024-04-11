/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Metadata } from "next";

export default function About() {
  return (
    <>
      {/* <div className="mx-auto prose text-center prose-h1:text-2xl prose-h1:font-semibold prose-p:text-neutral-950 prose-headings:text-center prose-hr:my-2 prose-hr:border-neutral-900"> */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="py-2">
          Mankuthimmana Kagga, is written by Devanahalli Venkataramanaiah
          Gundappa (DVG) and was first published in 1943. It stands as a
          prominent piece of Kannada literature. This collection comprises 945
          poems, each spanning four lines, with several written in old Kannada
          (ಹಳೆಗನ್ನಡ).
        </p>
        <p className="py-2">
          Mankuthimmana Kagga explores deeper questions of life, reflects on the
          essence of Ultimate Truth (reality), and suggests leading a balanced
          life amidst the complexities and constant changes of our world. It
          encourages adopting a moderate approach, with one hand reaching for
          the Ultimate Truth and the other engaged with the tangible world.
        </p>
        <hr className="divide-x-2 divide-black divide-solid divide" />
        <p className="py-2">
          Mankuthimmana Kagga fascinated me the first time I read it at school.
          I've been eager to revisit it online and share a snippet with others.
          But, I found it difficult to share it since I couldn't find it easily
          online.
          <br />
          This led me to create this website. This treasure should be accessible
          to all and shouldn't be hidden.
        </p>
        <p className="py-2">
          The content for this site was sourced from books and websites, and all
          credit goes to the original authors and publishers. I earn no money
          from this website and did this out of gratitude for DVG's craft.
        </p>
        <p className="py-2">
          I hope this changes your outlook towards life, as it did to mine!
        </p>
        <p className="py-2">
          Please buy the book to support the publishers, printers, editors and
          authors!
        </p>
        <hr className="divide-x-2 divide-black divide-solid divide" />
        <p className="py-2">
          Also, this website's code is publicly accessible. If you'd like to
          check it, visit{" "}
          <Link
            href="https://github.com/banagere/mankuthimma.com"
            target="_blank"
            aria-label="Github (opens in a new tab)"
            className="font-medium underline duration-500 underline-offset-2 hover:opacity-70"
          >
            Github
          </Link>
          .
        </p>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "%s",
  },
  openGraph: {
    title: "About",
  },
};
