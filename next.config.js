/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, 
   images: {
    domains: ['datamall.lta.gov.sg'], 
     unoptimized: true,
  },
  env:{
   NEXT_PUBLIC_API_URL: 'https://admin.extramiless.com/api/'
  }
}
module.exports = nextConfig
