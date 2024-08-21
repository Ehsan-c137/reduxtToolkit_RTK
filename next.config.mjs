/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.dummyjson.com",
            port: "",
            pathname: "/products/images/**",
         },
         {
            protocol: "https",
            hostname: "img.icons8.com",
            port: "",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
