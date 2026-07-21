import type { Metadata, Viewport } from "next";
import "./globals.css";

const faviconSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='24' fill='%232145f0'/%3E%3Ctext x='50' y='68' font-family='Arial, sans-serif' font-weight='900' font-size='58' fill='white' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "SSAFY 17기 모집 | 삼성청년 SW·AI아카데미",
  description:
    "차세대 SW·AI 인재, SSAFY에서 시작됩니다. 비전공자도 기초부터 실전까지, 교육부터 취업까지 이어지는 성장 시스템. SSAFY 17기 모집 안내.",
  openGraph: {
    title: "SSAFY 17기 모집 | 삼성청년 SW·AI아카데미",
    description: "차세대 SW·AI 인재, SSAFY에서 시작됩니다.",
    type: "website",
  },
  icons: { icon: faviconSvg },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans">{children}</body>
    </html>
  );
}
