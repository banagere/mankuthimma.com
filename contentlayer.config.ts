import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
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
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "kagga",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
