// 사이트 공통 데이터 (네비게이션 · 파트너 로고 등)

export const NAV_LINKS = [
  { href: "#why", label: "SSAFY 소개" },
  { href: "#curriculum", label: "AI 커리큘럼" },
  { href: "#career", label: "취업지원" },
  { href: "#story", label: "취업사례" },
  { href: "#campus", label: "캠퍼스" },
  { href: "#apply", label: "모집안내" },
  { href: "#faq", label: "FAQ" },
] as const;

export const APPLY_URL = "https://www.ssafy.com";

// 함께하는 기업 (삼성 계열사) — 히어로 마퀴에 사용
export const PARTNER_LOGOS = [
  { src: "/assets/logo/partners/samsung.png", alt: "Samsung" },
  { src: "/assets/logo/partners/samsung-sds.png", alt: "Samsung SDS" },
  { src: "/assets/logo/partners/samsung-display.png", alt: "Samsung Display" },
  { src: "/assets/logo/partners/samsung-sdi.png", alt: "삼성SDI" },
  {
    src: "/assets/logo/partners/samsung-electro-mechanics.png",
    alt: "삼성전기",
  },
  { src: "/assets/logo/partners/samsung-s1.png", alt: "에스원" },
  { src: "/assets/logo/partners/cheil.png", alt: "Cheil" },
  { src: "/assets/logo/partners/samsung-life.png", alt: "삼성생명" },
] as const;
