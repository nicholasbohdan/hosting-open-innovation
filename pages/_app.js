// import '../styles/globals.css'
// import '../styles/Login.module.css'
// import { Store } from "../store";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Store>
//       <Component {...pageProps} />
//     </Store>
//   )
// }

// export default MyApp

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import { Store } from "../store";
import Head from "next/head";
import '../styles/globals.css'
import '../styles/Login.module.css'
import ResizeObserver from "resize-observer-polyfill";
import '@/components/dummy-data'

const App = ({ Component, pageProps }) => {
  if(typeof window !== "undefined") {
    if (!window.ResizeObserver) {
      window.ResizeObserver = ResizeObserver;
    }
  }

  return (
    <>
      <Store>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Store>
    </>
  );
};

export default App;
