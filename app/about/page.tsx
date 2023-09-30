/* eslint-disable react/no-unescaped-entities */
// Helper function for paragraphs
const Paragraph = ({ children }) => <p>{children}</p>;

// Helper function for external links
const ExternalLink = ({ href, children }) => (
  <a href={href} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

// About Component
export default function About() {
  return (
    <>
      <title>About</title>

      <div className="max-w-2xl px-4 mx-auto prose dark:prose-invert prose-headings:text-center prose-h1:text-2xl prose-hr:my-4 prose-hr:border-gray-400">
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
          500+ unique visitors come to this site every month. If would be of
          great help if you could lend a hand keeping this site alive by{" "}
          <a
            href="https://github.com/banagere/mankuthimma.com"
            rel="noreferrer noopener"
            target={"_blank"}
          >
            Sponsoring on Github
          </a>
          .
        </p>
      </div>
    </>
  );
}
