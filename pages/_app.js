import '../styles/globals.css'
import '../styles/Login.module.css'
import { Provider } from 'react-redux';
import configureStore from '../store/ConfigStore';

const store = configureStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
