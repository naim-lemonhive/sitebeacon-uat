/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GTM_ID: process.env.GTM_ID,
  },
};

export default nextConfig;
