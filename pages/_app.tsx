import { setupStore, store } from "@/storage/store";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"

import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>
          Cars
        </title>
      </Head>
      <Component {...pageProps} />   
    </Provider>
  )
}
