/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // API 프록시 설정
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://localhost:8000/api/v1/:path*',
      },
    ];
  },

  // 환경 변수 설정
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || '방화벽 로그 모니터링',
  },
};

module.exports = nextConfig;
