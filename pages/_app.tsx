// External Libraries
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

// Internal Libraries
import "@/src/ui/main.scss";
import Layout from "components/layout";
import { Analytics } from "@vercel/analytics/react";

// SEO Configuration
import { defaultSeo } from "@/src/seo/seo";
import * as config from "@/src/seo/index";

// Helper function to construct the canonical URL
const getCanonicalUrl = (pathname) => {
  const path = pathname === "/" ? "" : pathname;
  return `${config.baseUrl}${path}/`;
};

// Main Application Component
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const canonical = getCanonicalUrl(router.pathname);

  return (
    <>
      {/* SEO Configuration */}
      <DefaultSeo
        {...defaultSeo}
        canonical={canonical}
        openGraph={{
          ...defaultSeo.openGraph,
          url: canonical,
        }}
      />

      {/* Main Layout */}
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
};

export default MyApp;
