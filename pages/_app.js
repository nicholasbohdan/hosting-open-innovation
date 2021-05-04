import '../styles/globals.css'
import '../styles/Login.module.css'
import { Store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  )
}

export default MyApp
