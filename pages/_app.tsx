import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
