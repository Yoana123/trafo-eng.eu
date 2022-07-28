import type { AppProps } from 'next/app'
import Script from 'next/script'

import Layout from '../components/Layout'

import '../styles/globals.css'

function TrafoEngApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Wrap component in Layout */}
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* Before body end scripts */}
      <Script
        id="google-gtag-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-9G358BTR19"
      />

      {/* Start google tracking */}
      <Script id="google-site-tag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9G358BTR19');
            gtag('event', 'page_view');        
        `}
      </Script>
    </>
  )
}

export default TrafoEngApp
