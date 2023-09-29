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
      <div className="max-w-2xl mx-auto prose dark:prose-invert prose-headings:text-center prose-h1:text-2xl prose-hr:my-4 prose-hr:border-gray-400">
        <h1>About</h1>

        {/* Introduction */}
        <Paragraph>
          Mankuthimmana Kagga, written by Devanahalli Venkataramanaiah Gundappa
          (DVG) and published in 1943, is one of the best-known major literary
          works in Kannada.
        </Paragraph>

        {/* Details about Kagga */}
        <Paragraph>
          Kagga is a collection of 945 poems, each being four lines in length.
          Some of these poems are written in old Kannada (ಹಳೆಗನ್ನಡ). They are
          profound, poetic, and many can be sung.
        </Paragraph>

        {/* Philosophy */}
        <Paragraph>
          Kagga explores deeper questions of life and contemplates the meaning
          of the Ultimate Truth. It advises us to lead a balanced life.
        </Paragraph>

        <hr />

        {/* Personal Experience */}
        <Paragraph>
          Mankuthimmana Kagga fascinated me the first time I read it. I created
          this repository to make this gem easily accessible.
        </Paragraph>

        {/* Credits and Monetization */}
        <Paragraph>
          All credit goes to the original authors. This is a non-profit
          endeavor.
        </Paragraph>

        {/* Conclusion */}
        <Paragraph>
          I hope this changes your outlook towards life, as it did to mine!
        </Paragraph>

        {/* Buying the Book */}
        <Paragraph>
          Please buy the book to support the stakeholders involved!
        </Paragraph>

        <hr />

        {/* Call to Action */}
        <Paragraph>
          500+ unique visitors come here every month. You can help by{" "}
          <ExternalLink href="https://github.com/banagere/mankuthimma.com">
            Sponsoring on Github
          </ExternalLink>
          .
        </Paragraph>
      </div>
    </>
  );
}
