import NProgress from "nprogress";
import { useEffect } from "react";
import Router from "next/router";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const delay = 500; // in milliseconds
    let timer;
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };
    Router.events.on("routeChangeStart", () => load());
    Router.events.on("routeChangeComplete", () => stop());
    Router.events.on("routeChangeError", () => stop());
  }, []);
  return <Component {...pageProps} />;
};