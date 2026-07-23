import { APPLY_URL, PARTNER_LOGOS } from "@/data/site";
import { ArrowUpRight } from "@/lib/icons";
import NotifyButton from "@/components/NotifyButton";

export default function Hero() {
  // 무한 스크롤 마퀴용 로고 복제본
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* 배경 장식 (그라디언트 블롭) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-brand-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-10 right-0 w-[380px] h-[380px] bg-coral-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.ink.100)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 text-center">
        <h1 className="reveal in-view text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-ink-900 leading-[1.15]">
          차세대 SW·AI 인재
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
            SSAFY
          </span>
          에서 시작됩니다
        </h1>

        {/* 핵심 지표 3종 (강조) */}
        <div className="reveal in-view mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-brand-600 leading-none">
              85<span className="text-2xl sm:text-3xl align-top">%</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-bold text-ink-500">
              취업률
            </p>
          </div>
          <span className="hidden sm:block w-px h-12 bg-ink-200" />
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-ink-900 leading-none">
              5<span className="text-2xl sm:text-3xl align-top ml-0.5">개</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-bold text-ink-500">
              전국 캠퍼스
            </p>
          </div>
          <span className="hidden sm:block w-px h-12 bg-ink-200" />
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-ink-900 leading-none">
              170
              <span className="text-2xl sm:text-3xl align-top ml-0.5">여 개</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-bold text-ink-500">
              채용 우대기업
            </p>
          </div>
        </div>

        <div className="reveal in-view mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener"
            className="btn-primary w-full sm:w-auto"
          >
            지원하기
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <NotifyButton className="btn bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto">
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

        {/* 함께하는 기업 (삼성 계열사) - 자동 스크롤 로고 마퀴 */}
        <div className="reveal in-view mt-20 sm:mt-28 relative overflow-hidden marquee-mask -mx-5 sm:-mx-8">
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
    </section>
  );
}
