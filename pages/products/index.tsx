import Head from 'next/head';

import { ProductsPage } from '../../exports/exports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ultra | Products</title>
        <meta
          name="Ultra"
          content="A web app template for a marketing organization. Built with Next.js, TypeScript, TailwindCSS & styled-components."
        />
        <link rel="icon" href="/iconC.ico" />
      </Head>

      <ProductsPage />
    </div>
  );
}
