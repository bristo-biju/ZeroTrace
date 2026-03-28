/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Set basePath if your repository name is not exactly the same as your account root.
  basePath: '/ZeroTrace',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
