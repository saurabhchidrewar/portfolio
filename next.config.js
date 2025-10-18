/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/saurabh_portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/saurabh_portfolio' : '',
}

module.exports = nextConfig
