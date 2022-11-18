import Head from 'next/head';

import { MainPage } from '../exports/exports';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ultra</title>
        <meta
          name="Ultra"
          content="A web app template for a marketing organization. Built with Next.js, TypeScript, TailwindCSS & styled-components."
        />
        <link rel="icon" href="/iconC.ico" />
      </Head>

      <MainPage />
    </div>
  );
}
