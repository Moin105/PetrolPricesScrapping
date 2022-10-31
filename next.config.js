/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
   images: {
    domains: ['datamall.lta.gov.sg'],
  },
}
module.exports = nextConfig
