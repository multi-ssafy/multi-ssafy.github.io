import { PARTNER_LOGOS } from "@/data/site";
import NotifyButton from "@/components/NotifyButton";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-brand-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-10 right-0 w-[380px] h-[380px] bg-coral-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.ink.100)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
      </div>

      {/* 상단 이미지 캐러셀 (자동 롤링) — 콘텐츠 폭에 맞춰 양쪽 여백 + 중앙정렬 */}
      <div className="w-full max-w-content mx-auto px-5 sm:px-8 pt-6 sm:pt-8">
        <HeroCarousel />
      </div>

      <div className="flex-1 flex items-center">
      <div className="w-full max-w-content mx-auto px-5 sm:px-8 py-8 text-center">
        {/* 아카데미명 — 크게, 양옆 구분선으로 분리 */}
        <div className="reveal in-view flex items-center justify-center gap-4 sm:gap-5 mb-5">
          <span className="w-8 sm:w-12 bg-ink-300" />
            <p className="text-3xl font-bold text-brand-600 tracking-wider">
              AI로 연결되는 기회, SSAFY로 완성되는 미래
            </p>
          <span className="w-8 sm:w-12 bg-ink-300" />
        </div>

        {/* 메인 헤드라인 — 얇은 테두리 박스, 장식 없음 */}
        <div className="reveal in-view border border-ink-200 rounded-[1.75rem] px-6 py-8 sm:px-12 sm:py-10">
          <h1 className="break-keep text-4xl sm:text-5xl md:text-6xl font-black tracking-widest text-ink-900 leading-[1.15]">
            {/* <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              AI
            </span>
            로 연결되는 기회
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              SSAFY
            </span>
            로 완성되는 미래 */}
          삼성청년SW·AI아카데미
          </h1>
        </div>

        {/* 3가지 메인 키워드 */}
        <div className="reveal in-view mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-5">
          <p className="text-4xl sm:text-6xl font-black text-brand-600 leading-none">
            취업률 85<span className="text-2xl sm:text-4xl align-top">%</span>
          </p>
          <p className="text-4xl sm:text-6xl font-black text-ink-900 leading-tight break-keep">
            삼성이 만든 AI 전문 교육
          </p>
          <p className="text-4xl sm:text-6xl font-black text-brand-600 leading-tight break-keep">
            교육지원금 100만원 +α
          </p>
        </div>

        <div className="reveal in-view mt-9 flex items-center justify-center">
          <NotifyButton className="btn bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            알림 신청하기
          </NotifyButton>
        </div>

        <div className="reveal in-view mt-12 sm:mt-16 relative overflow-hidden marquee-mask -mx-5 sm:-mx-8">
          <div className="flex w-max items-center gap-14 animate-marquee px-7">
            {marqueeLogos.map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={i < PARTNER_LOGOS.length ? logo.alt : ""}
                aria-hidden={i >= PARTNER_LOGOS.length}
                className="h-6 sm:h-7 w-auto shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}