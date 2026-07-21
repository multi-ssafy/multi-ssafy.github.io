import { CalendarDays, ArrowRight } from "@/lib/icons";

// EMPLOYMENT OUTCOME — 취업률 카운터·바차트 + SSAFY만의 취업 솔루션

// Tailwind JIT는 소스의 리터럴 문자열만 스캔하므로 클래스는 완전한 형태로 보관한다.
const BARS = [
  {
    gen: "13기",
    height: "40%",
    barClass:
      "w-full max-w-[44px] bg-gradient-to-t from-brand-200 to-brand-100 rounded-t-lg origin-bottom scale-y-0 transition-transform duration-700",
    labelClass: "text-[11px] font-bold text-ink-400",
  },
  {
    gen: "14기",
    height: "55%",
    barClass:
      "w-full max-w-[44px] bg-gradient-to-t from-brand-300 to-brand-200 rounded-t-lg origin-bottom scale-y-0 transition-transform duration-700 delay-100",
    labelClass: "text-[11px] font-bold text-ink-400",
  },
  {
    gen: "15기",
    height: "68%",
    barClass:
      "w-full max-w-[44px] bg-gradient-to-t from-brand-400 to-brand-300 rounded-t-lg origin-bottom scale-y-0 transition-transform duration-700 delay-200",
    labelClass: "text-[11px] font-bold text-ink-400",
  },
  {
    gen: "16기",
    height: "82%",
    barClass:
      "w-full max-w-[44px] bg-gradient-to-t from-brand-500 to-brand-400 rounded-t-lg origin-bottom scale-y-0 transition-transform duration-700 delay-300",
    labelClass: "text-[11px] font-bold text-ink-400",
  },
  {
    gen: "17기",
    height: "100%",
    barClass:
      "w-full max-w-[52px] bg-gradient-to-t from-brand-700 to-brand-500 rounded-t-lg origin-bottom scale-y-0 transition-transform duration-700 delay-500",
    labelClass: "text-[11px] font-bold text-brand-600",
  },
];

export default function Career() {
  return (
    <section id="career" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">EMPLOYMENT OUTCOME</p>
          <h2 className="section-title mt-3 !leading-snug">
            교육과 취업지원의 결과,
            <br className="hidden sm:block" />
            취업률은 꾸준히 성장했습니다
          </h2>
          <p className="section-desc">
            수료 이후까지 이어지는 취업지원으로 만들어낸 성과
          </p>
        </div>

        {/* 취업률 스탯 + 바차트 */}
        <div className="reveal mt-14 card p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-ink-400">현재 취업률</p>
            <p
              className="mt-1 text-6xl md:text-7xl font-black text-brand-600 leading-none"
              data-counter
              data-target="85"
            >
              0<span className="text-3xl align-top">%</span>
            </p>
            <p className="mt-3 text-sm text-ink-400">
              누적 취업 성과 · 지속적인 성장 추이{" "}
              <span className="block text-ink-300">
                (그래프는 예시 데이터입니다)
              </span>
            </p>
          </div>
          <div
            className="flex items-end justify-between gap-3 sm:gap-5 h-40 md:h-48 border-b border-ink-100 pb-0"
            id="bar-chart"
          >
            {BARS.map((b) => (
              <div
                key={b.gen}
                className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
              >
                <div
                  className={b.barClass}
                  style={{ height: b.height }}
                  data-bar
                />
                <span className={b.labelClass}>{b.gen}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto reveal">
          <h3 className="text-2xl font-extrabold text-ink-900">
            SSAFY만의 확실한 취업 솔루션
          </h3>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* 1:1 취업 컨설팅 */}
          <div className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1">
            <div className="aspect-[16/10] overflow-hidden bg-ink-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/photos/consulting.jpg"
                alt="1:1 취업 컨설팅 상담 모습"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7">
              <div className="w-11 h-11 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </div>
              <h4 className="mt-4 font-bold text-ink-900">1:1 취업 컨설팅</h4>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                전담 컨설턴트의 상시 상담
              </p>
            </div>
          </div>

          {/* Only SSAFY 채용행사 */}
          <div
            className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1"
            style={{ animationDelay: ".06s" }}
          >
            <div className="aspect-[16/10] overflow-hidden bg-ink-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/photos/job-fair.jpg"
                alt="SSAFY 채용행사 부스 현장"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7">
              <div className="w-11 h-11 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h4 className="mt-4 font-bold text-ink-900">
                Only SSAFY 채용행사
              </h4>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                캠퍼스 채용설명회·박람회
              </p>
            </div>
          </div>

          {/* 170여 개 우대기업 */}
          <div
            className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1"
            style={{ animationDelay: ".12s" }}
          >
            <div className="aspect-[16/10] overflow-hidden bg-ink-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/photos/partner-companies.png"
                alt="우대기업 채용공고 예시"
                className="w-full h-full object-cover"
                style={{ objectPosition: "left center" }}
              />
            </div>
            <div className="p-7">
              <div className="w-11 h-11 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <h4 className="mt-4 font-bold text-ink-900">170여 개 우대기업</h4>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                서류 가점 · 코테 면제 · 단독채용
              </p>
            </div>
          </div>
        </div>

        <div className="reveal text-center mt-10">
          <p className="text-sm text-ink-500">
            수료 이후에도 취업할 때까지 이어지는 상담·교육·채용 연계
          </p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-1.5 font-bold text-brand-600 hover:text-brand-700"
          >
            취업지원 자세히 보기 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
