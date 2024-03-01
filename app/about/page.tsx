/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Metadata } from "next";

export default function About() {
  return (
    <>
      <div className="mx-auto prose text-center prose-headings:text-center prose-h1:text-xl prose-hr:my-4 prose-hr:border-red-700">
        <h1>About</h1>
        <p>
          Mankuthimmana Kagga, written by Devanahalli Venkataramanaiah Gundappa
          (DVG) and published in 1943. It is one of the best known of the major
          literary works in Kannada.
        </p>
        <p>
          Kagga is a collection of 945 poems, each being four lines in length.
          Some of these poems are written in old Kannada (ಹಳೆಗನ್ನಡ). It is
          profound as well as poetic and most of them can be sung.
        </p>
        <p>
          Kagga explores deeper questions of life, contemplates the meaning of
          the Ultimate Truth (reality) and advises us to lead a balanced life in
          this complex and ever-changing world. Thus, Kagga advises us to follow
          the middle path while extending one hand towards the Ultimate Truth
          and the other hand to the phenomenal world.
        </p>
        <hr />
        <p>
          Mankuthimmana Kagga fascinated me the first time I read it at school.
          I found it difficult to share a snippet and had to dig the internet. I
          created this repository for people to access this easily, this gem
          mustn't be hidden.
        </p>
        <p>
          I used books and websites to organise this site. I give all credit to
          the original authors. I earn no money out of this webpage. I did this
          out of gratitude to the beauty of a craft by DVG.
        </p>
        <p>I hope this changes your outlook towards life, as it did to mine!</p>
        <p>
          Please buy the book to support the publishers, printers, editors and
          authors!
        </p>
        <hr />
        <p>
          This website's code is publicly accessible. If you'd like to check it,
          visit{" "}
          <Link
            href="https://github.com/banagere/mankuthimma.com"
            target="_blank"
            aria-label="Github (opens in a new tab)"
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
