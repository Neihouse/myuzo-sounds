const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;