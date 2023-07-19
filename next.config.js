/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@acme/ui"],
  },
};

module.exports = nextConfig;
