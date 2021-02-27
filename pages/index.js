import Head from "next/head";

//component
import App from "./components/App";

export default function Home() {
  return (
    <>
      <Head>
        <meta lang="ko" />
        <title>foreverChoi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
