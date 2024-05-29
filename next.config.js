/** @type {import('next').NextConfig} */

const nextConfig = {
    // basePath: "/studiesofchange-web",
    reactStrictMode: true,
    output: 'export',
    images:{
      unoptimized: true
    },
    // trailingSlash: true, // enable if you want to fix the .html and 404 refresh issue
  }
  
  module.exports = nextConfig