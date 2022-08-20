// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
var computedFields = {
  url: {
    type: "string",
    resolve: (doc) => `/kagga/${doc._raw.flattenedPath}`
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    tags: { type: "string", required: false },
    slug: { type: "string", required: false }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "kagga",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4MOZVKBK.mjs.map
