import { PARTNER_LOGOS } from "@/data/site";
import NotifyButton from "@/components/NotifyButton";

export default function Hero() {
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-brand-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-10 right-0 w-[380px] h-[380px] bg-coral-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.ink.100)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 text-center">
        {/* 아카데미명 — 크게, 양옆 구분선으로 분리 */}
        <div className="reveal in-view flex items-center justify-center gap-4 sm:gap-5 mb-5">
          <span className="w-8 sm:w-12 bg-ink-300" />
            <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider">
              삼성청년SW·AI아카데미
            </p>
          <span className="w-8 sm:w-12 bg-ink-300" />
        </div>

        {/* 메인 헤드라인 — 얇은 테두리 박스, 장식 없음 */}
        <div className="reveal in-view border border-ink-200 rounded-[1.75rem] px-6 py-8 sm:px-12 sm:py-10">
          <h1 className="break-keep text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-ink-900 leading-[1.15]">
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              AI
            </span>
            로 연결되는 기회
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              SSAFY
            </span>
            로 완성되는 미래
          </h1>
        </div>

        {/* 핵심 지표 3종 */}
        <div className="reveal in-view mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-14">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-brand-600 leading-none">
              85<span className="text-2xl sm:text-3xl align-top">%</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-bold text-ink-600">
              취업률
            </p>
          </div>
          <span className="hidden sm:block w-px h-12 bg-ink-200" />
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-ink-900 leading-none">
              1,025
              <span className="text-2xl sm:text-3xl align-top ml-0.5">시간</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-bold text-ink-600">
              AI 집중교육
            </p>
          </div>
          <span className="hidden sm:block w-px h-12 bg-ink-200" />
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-ink-900 leading-none">
              170
              <span className="text-2xl sm:text-3xl align-top ml-0.5">여 개</span>
            </p>
            <p className="mt-2 text-sm sm:text-base font-bold text-ink-600">
              채용 우대기업
            </p>
          </div>
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