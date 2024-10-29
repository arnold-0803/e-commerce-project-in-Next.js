/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/<e-commerce-project-in-Next.js>" : "",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
