import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>大丸白衣</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex justify-center h-screen items-center`}>
        <h1 className={`text-5xl`}>WELCOME</h1>
      </div>
    </div>
  );
};

export default Home;
