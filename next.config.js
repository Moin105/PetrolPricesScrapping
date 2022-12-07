/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, 
   images: {
    domains: ['datamall.lta.gov.sg'],
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://192.168.18.89/api',
  },
}

module.exports = nextConfig
module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://192.168.18.89/api',
  },
}