import Head from 'next/head';

import { SignUpPage } from '../../exports/exports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ultra | Sign Up</title>
        <meta
          name="Ultra"
          content="A web app template for a marketing organization. Built with Next.js, TypeScript, TailwindCSS & styled-components."
        />
        <link rel="icon" href="/iconC.ico" />
      </Head>

      <SignUpPage />
    </div>
  );
}
