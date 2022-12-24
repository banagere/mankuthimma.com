import Head from "../components/Head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../library/main.scss";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Banner />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </>
  );
}

export default MyApp;
