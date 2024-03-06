import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="w-full pt-5 prose max-w-none prose-h1:text-xl prose-h2:text-2xl prose-h2:text-red-700 prose-h3:text-lg prose-h3:text-red-500 prose-h3:mt-2 prose-headings:mb-1 prose-img:rounded-md">
      <Component components={{ ...components }} />
    </article>
  );
}
