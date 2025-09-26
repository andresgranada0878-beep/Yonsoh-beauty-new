/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: '/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/auth/callback',
        destination: '/auth/callback',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
