/** @type {import('next').NextConfig} */


const nextConfig = {
    basePath: '/studiesofchange-web', // remove on prod. build
    reactStrictMode: true,
    output: 'export',
    images:{
      unoptimized: true
    },
  }
  
  module.exports = nextConfig