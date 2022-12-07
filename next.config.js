/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false, 
   images: {
    domains: ['datamall.lta.gov.sg'],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://192.168.18.89/api',
  },
  future: { webpack5: true }
}

module.exports = nextConfig
module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://192.168.18.89/api',
  },
}
const withImages = require('next-images')

module.exports = {
    ...withImages(),
    future: {
        webpack5: true,
    },

}