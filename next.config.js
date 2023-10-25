/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      basePath: '',
      image:[],
      output: 'export',
}

module.exports = nextConfig
const withVideos = require('next-videos')
module.exports = withVideos()
