import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { TopicsProvider } from "context/TopicsContext";

import * as gtag from "../../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <TopicsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TopicsProvider>
  );
}
export default MyApp;
