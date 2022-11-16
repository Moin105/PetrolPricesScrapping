/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, 
   images: {
    domains: ['datamall.lta.gov.sg'],
  },
}
module.exports = nextConfig
