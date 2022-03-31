/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg'],
    localeDetection: false,
  },

  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
