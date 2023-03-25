import "@/src/ui/main.scss";
import Layout from "components/layout";
import { Analytics } from "@vercel/analytics/react";
import { defaultSeo } from "@/src/seo/seo";
import * as config from "@/src/seo/index";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonical = `${config.baseUrl}${
    router.pathname === "/" ? "" : router.pathname
  }/`;

  return (
    <>
      <DefaultSeo
        {...defaultSeo}
        canonical={canonical}
        openGraph={{
          ...defaultSeo.openGraph,
          url: canonical,
        }}
      />

      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
