/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 사이트로 export (서버 불필요 · 기존 Vercel 정적 호스팅 모델과 동일)
  output: "export",
  images: {
    // next/image 최적화 서버가 없으므로 비활성화 (정적 export 필수 설정)
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
