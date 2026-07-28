// 교육 혜택 — 그레이 배경 + 세로로 이어지는 흰색 pill (왼쪽 체크 아이콘)
// (다크+가운데 정렬 pill 대신, 밝은 배경 + 좌측 아이콘 리스트형)

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
    <section id="why" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">BENEFIT</p>
          <h2 className="section-title mt-3">교육 혜택</h2>
          <p className="section-desc">
            배움부터 취업까지, SSAFY가 확실하게 지원합니다
          </p>
        </div>

        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto flex flex-col gap-3.5 sm:gap-4">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-4 rounded-full bg-white px-5 sm:px-6 py-3.5 sm:py-4 shadow-card ring-1 ring-ink-100 transition-transform duration-300 hover:-translate-y-0.5"
              style={i > 0 ? { animationDelay: `${i * 0.06}s` } : undefined}
            >
              <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
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
