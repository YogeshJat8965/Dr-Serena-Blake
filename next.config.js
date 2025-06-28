/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] }
      }
    ]
  },
  // Increase font load timeout to prevent AbortError
  fontLoadTimeout: 60000, // 60 seconds
};

module.exports = nextConfig;