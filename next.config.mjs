import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "img.gamepix.com" },
      { protocol: "https", hostname: "img.gamemonetize.com" },
    ],
  },
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});
export default withMDX(nextConfig);
