// 교육 혜택 — 다크 배경 + 세로로 이어지는 pill(알약) 형태
// (카드 그리드 대신 세로 흐름 디자인)

type Benefit = { text: React.ReactNode };

const BENEFITS: Benefit[] = [
  {
    text: (
      <>
        <span className="text-brand-600">전액 무료</span>로 배우는 AI·SW 교육
      </>
    ),
  },
  {
    text: (
      <>
        <span className="text-brand-600">삼성 표준 AI 인증체계</span> 기반의 체계적 커리큘럼
      </>
    ),
  },
  {
    text: (
      <>
        조건 없이 매월 <span className="text-brand-600">최대 160만원</span> 교육지원금 지급
      </>
    ),
  },
  {
    text: (
      <>
        학습에 필요한 <span className="text-brand-600">OO만원 상당</span> 교보재 제공
      </>
    ),
  },
  {
    text: (
      <>
        <span className="text-brand-600">1:1 취업과외</span>부터 맞춤형 취업지원 서비스까지
      </>
    ),
  },
  {
    text: (
      <>
        삼성·네이버·카카오·금융권까지, <span className="text-brand-600">무차별 취업 등용문</span>
      </>
    ),
  },
];

export default function WhySSAFY() {
  return (
    <section
      id="why"
      className="scroll-mt-20 relative overflow-hidden py-20 md:py-28 bg-ink-900"
    >
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[620px] rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:30px_30px]" />
      </div>

      <div className="relative max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-brand-300">
            BENEFIT
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
            교육 혜택
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-300 leading-relaxed">
            배움부터 취업까지, SSAFY가 확실하게 지원합니다
          </p>
        </div>

        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto flex flex-col gap-3.5 sm:gap-4">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="reveal rounded-full bg-white px-6 py-4 sm:py-5 text-center shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5"
              style={i > 0 ? { animationDelay: `${i * 0.06}s` } : undefined}
            >
              <p className="text-base sm:text-lg font-bold text-ink-900 leading-snug break-keep">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
