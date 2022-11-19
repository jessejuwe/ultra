import Head from 'next/head';

import { ServicesPage } from '../../exports/exports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ultra | Services</title>
        <meta
          name="Ultra"
          content="A web app template for a marketing organization. Built with Next.js, TypeScript, TailwindCSS & styled-components."
        />
        <link rel="icon" href="/iconC.ico" />
      </Head>

      <ServicesPage />
    </div>
  );
}
