const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gmgmarkets.co.uk"],
  },
};

module.exports = withNextIntl(nextConfig);
