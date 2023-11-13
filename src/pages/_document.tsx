import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      className="h-full scroll-smooth antialiased"
      lang="en"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
