import Head from "../components/Head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../library/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
