import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export interface Metadata {
  title: string
  description: string
  image?: string
}

export default function Metadata({
  metadata,
  noindex,
}: {
  metadata: Metadata
  noindex?: boolean
}): React.ReactElement {
  const { pathname } = useRouter()
  const { title, description, image } = metadata

  return (
    <Head>
      <meta charSet="UTF-8" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <meta http-equiv="x-ua-compatible" content="ie=edge" />

      <meta
        key="apple-mobile-web-app-capable"
        name="apple-mobile-web-app-capable"
        content="yes"
      />

      <meta
        key="apple-mobile-web-app-status-bar-style"
        name="apple-mobile-web-app-status-bar-style"
        content="black"
      />

      {/* OPENGRAPH */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://trafo-eng.eu/${pathname}`} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}

      {/* TWITTER  */}
      <meta name="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {noindex && <meta name="robots" content="noindex" />}
    </Head>
  )
}
