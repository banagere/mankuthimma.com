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
  filePathPattern: `**/*.md`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    weight: { type: "number", required: true },
    number: { type: "string", required: true },
    slug: { type: "string", required: true }
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
//# sourceMappingURL=compiled-contentlayer-config-RECOAQT3.mjs.map
