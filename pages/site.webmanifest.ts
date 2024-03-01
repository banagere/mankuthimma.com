// import * as config from "@/src/seo/index";
// import { favicons } from "@/src/seo/seo";
// import type { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps<
//   Record<string, never>
// > = async (context) => {
//   const { res } = context;

//   // https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest
//   res.setHeader("content-type", "application/manifest+json; charset=utf-8");
//   // cache on edge for one week
//   res.setHeader(
//     "cache-control",
//     "public, max-age=0, s-maxage=604800, stale-while-revalidate"
//   );

//   const manifest = {
//     name: config.siteName,
//     short_name: config.siteDomain,
//     description: config.longDescription,
//     lang: config.siteLocale,
//     icons: [
//       {
//         src: favicons.chrome512Png.src,
//         sizes: `${favicons.chrome512Png.width}x${favicons.chrome512Png.height}`,
//         type: "image/png",
//         purpose: "any",
//       },
//       {
//         src: favicons.chrome192Png.src,
//         sizes: `${favicons.chrome192Png.width}x${favicons.chrome192Png.height}`,
//         type: "image/png",
//         purpose: "any",
//       },
//     ],
//     display: "browser",
//     start_url: "/",
//   };

//   res.write(JSON.stringify(manifest));
//   res.end();

//   return {
//     props: {},
//   };
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => null;

export default function EMPTY() {}
