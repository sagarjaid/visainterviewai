/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/undefined',
        destination: '/',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['/node_modules/@ffmpeg/core/dist/ffmpeg-core.js'] =
      '/node_modules/@ffmpeg/core/dist/esm/ffmpeg-core.js';
    config.resolve.alias['fs'] = false;
    return config;
  },
};

module.exports = nextConfig;
