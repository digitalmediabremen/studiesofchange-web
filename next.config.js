/** @type {import('next').NextConfig} */

const nextConfig = {
    // basePath: "/studiesofchange-web",
    reactStrictMode: true,
    output: 'export',
    images:{
      unoptimized: true
    },
    trailingSlash: true,
  }
  
  module.exports = nextConfig