/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other config options...
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Match any API route
        destination: 'http://localhost:3001/api/:path*',  // Forward to Rust server
         has: [
           {
             type: 'header',
             key: 'host',
             value: 'localhost:3000',
           },
         ],
      }
    ];
  },
};

export default nextConfig;
