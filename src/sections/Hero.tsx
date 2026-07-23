import { APPLY_URL, PARTNER_LOGOS } from "@/data/site";
import { ArrowUpRight } from "@/lib/icons";

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
        <div className="reveal in-view inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white border border-ink-100 shadow-card px-4 py-2 text-xs sm:text-sm font-bold text-ink-600">
          <span className="text-brand-600">취업률 85%</span>
          <span className="text-ink-300">·</span>
          <span>전국 5개 캠퍼스</span>
          <span className="text-ink-300">·</span>
          <span>170여 개 채용 우대기업</span>
        </div>

        <h1 className="reveal in-view mt-7 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-ink-900 leading-[1.15]">
          차세대 SW·AI 인재
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
            SSAFY
          </span>
          에서 시작됩니다
        </h1>

        <p className="reveal in-view mt-6 text-base sm:text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto">
          비전공자도 기초부터 실전까지, 교육부터 취업까지 이어지는 성장 시스템
        </p>

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
          <a href="#recruit-info" className="btn-outline w-full sm:w-auto">
            모집 핵심정보 보기
          </a>
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
