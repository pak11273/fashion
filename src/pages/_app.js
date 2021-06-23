// import App from 'next/app'

import "../styles/globals.scss";

import AdminToolbar from "../components/AdminToolbar";
import { AuthProvider } from "../context/auth";
import Head from "next/head";
import HomepageLayout from "../layouts/HomepageLayout";
import React from "react";
import { wrapper } from "../redux/createStore";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="mainContainer">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            rel="stylesheet"
          ></link>
        </Head>
        <AdminToolbar />
        <HomepageLayout>
          <Component {...pageProps} />
        </HomepageLayout>
      </div>
    </AuthProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default wrapper.withRedux(MyApp);
