/** @type {import('next').NextConfig} */


const nextConfig = {
  basePath: '/test_web_exh', // remove on prod. build
  reactStrictMode: true,
  output: 'export',
  images:{
    unoptimized: true
  },
}

module.exports = nextConfig
