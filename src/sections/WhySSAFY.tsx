// 교육 혜택 — 혜택 카드 그리드 (설명 문구 + 파란 강조만)
// 이미 다른 파트에서 언급된 혜택(교육지원금, 취업률85%·취업컨설팅)은 제외

type Benefit = {
  lead: React.ReactNode; // 카드 문구 (파란 강조 포함)
};

const BENEFITS: Benefit[] = [
  {
    lead: (
      <>
        초고속 엔비디아 GPU 서버로
        <br />
        <span className="text-brand-600">현업 수준의 AI 개발 경험 축적</span>
      </>
    ),
  },
  {
    lead: (
      <>
        100만원 상당 교보재 제공
        <br />
        <span className="text-brand-600">취업 포트폴리오 완성</span>
      </>
    ),
  },
  {
    lead: (
      <>
        <span className="text-brand-600">서버 대기 없는 무한한 AI 실습</span>
        <br />
        1인당 고성능 1GPU 제공
      </>
    ),
  },
  {
    lead: (
      <>
        국내 최정상급 AI 석박사
        <br />
        <span className="text-brand-600">최신 기술 마스터</span>
      </>
    ),
  },
  {
    lead: (
      <>
        삼성 SW 역량 테스트 응시 기회로
        <br />
        <span className="text-brand-600">취업 실전 대비</span>
      </>
    ),
  },
  {
    lead: (
      <>
        삼성·금융권 기업 프로젝트 수행
        <br />
        <span className="text-brand-600">이력서에 바로 쓰는 핵심 스펙</span>
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
            학습부터 취업까지 SSAFY가 확실하게 지원할게요
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-content mx-auto">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="reveal card p-6 sm:p-7 flex items-center justify-center text-center min-h-[140px] hover:shadow-card-hover hover:-translate-y-1"
              style={i > 0 ? { animationDelay: `${i * 0.05}s` } : undefined}
            >
              <p className="text-lg sm:text-xl font-bold text-ink-800 leading-relaxed break-keep">
                {b.lead}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
