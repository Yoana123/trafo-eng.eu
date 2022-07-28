import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="sitemap"
          type="application/xml"
          href="/sitemap/sitemap-index.xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Open+Sans:wght@700&display=swap"
        />
      </Head>
      <body className="font-sans antialiased text-gray-900 bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
