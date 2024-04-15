import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-h1:text-xl prose-headings:m-0 prose-headings:p-0">
      <Component components={{ ...components }} />
    </article>
  );
}
