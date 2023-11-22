import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  url: {
    type: "string",
    resolve: (doc) => `/kagga/${doc._raw.flattenedPath}`,
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    weight: { type: "number", required: true },
    number: { type: "string", required: true },
    slug: { type: "string", required: false },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "kagga",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     properties: {
      //       className: ["anchor"],
      //     },
      //   },
      // ],
    ],
  },
});
