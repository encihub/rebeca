/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProduction ? '/rebeca' : undefined,
  output: isProduction ? 'export' : undefined,
  reactStrictMode: true,
};

module.exports = nextConfig;
