/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // Use the prefix in production and on GitHub Pages
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/alexakten.github.io/" : "",
};
