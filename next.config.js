const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["external-content.duckduckgo.com"],
  },
};