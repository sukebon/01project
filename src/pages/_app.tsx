import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { TopicsProvider } from "context/TopicsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TopicsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TopicsProvider>
  );
}
export default MyApp;
