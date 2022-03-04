// import Header from "../components/Header";

import "../public/fonts/Arial/stylesheet.css";
import "../styles/reset.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
