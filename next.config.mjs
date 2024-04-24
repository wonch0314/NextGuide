import withBundleAnalyzer from "@next/bundle-analyzer";

//// Default
// const nextConfig = {};

// export default nextConfig;

//// Bundle Analyzer
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   })

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
// export default withBundleAnalyzer(nextConfig)
