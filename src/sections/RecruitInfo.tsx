import { Timer, ChevronRight } from "@/lib/icons";

const PROCESS = ["지원서 접수", "SW 적성진단", "인터뷰", "입과"];

export default function RecruitInfo() {
  return (
    <section
      id="recruit-info"
      className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">
            <Timer className="w-4 h-4" />
            지원 전 30초 확인
          </p>
          <h2 className="section-title mt-3">모집 핵심정보</h2>
          <p className="section-desc">지원에 필요한 핵심 내용을 먼저 확인하세요</p>
        </div>

        <div className="mt-12 reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 지원 대상 (featured tile) */}
          <div className="rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <p className="text-sm font-bold text-brand-100 uppercase tracking-wide">
                지원 대상
              </p>
              <p className="mt-4 text-2xl font-extrabold leading-snug">
                29세 이하
              </p>
              <p className="mt-2 text-base font-bold text-brand-50 leading-snug">
                4년제 대학 졸업(예정)자
                <br className="hidden sm:block lg:hidden xl:block" />{" "}
                / 국내지정 마이스터고 졸업자
              </p>
            </div>
          </div>

          {/* 교육 기간 */}
          <div className="card p-8 hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-center">
            <p className="text-sm font-bold text-ink-400">교육 기간</p>
            <p className="mt-4 text-2xl font-extrabold text-ink-900 leading-snug">
              1년 과정
            </p>
            <span className="tag bg-coral-50 text-coral-500 mt-3 w-fit">
              9 to 6 몰입교육
            </span>
          </div>

          {/* 교육지원금 */}
          <div className="card p-8 hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-center">
            <p className="text-sm font-bold text-ink-400">교육지원금</p>
            <p className="mt-4 text-2xl font-extrabold text-brand-600 leading-snug">
              월 최대 160만원
            </p>
            <span className="tag bg-brand-50 text-brand-600 mt-3 w-fit">
              교육 기간 매월 지급
            </span>
          </div>

          {/* 모집 절차 */}
          <div className="card p-8 hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-center">
            <p className="text-sm font-bold text-ink-400">모집 절차</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs font-bold text-ink-600">
              {PROCESS.map((step, i) => (
                <div key={step} className="flex items-center gap-x-1.5">
                  <span
                    className={`px-2.5 py-1.5 rounded-full ${
                      i === PROCESS.length - 1
                        ? "bg-brand-600 text-white"
                        : "bg-ink-50"
                    }`}
                  >
                    {step}
                  </span>
                  {i < PROCESS.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-ink-300 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
