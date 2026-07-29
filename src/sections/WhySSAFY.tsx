// 교육 혜택 — 혜택 카드 그리드 (레퍼런스 스타일: 혜택 배지 + 이모지 + 문구)
// 이미 다른 파트에서 언급된 혜택(교육지원금, 취업률85%·취업컨설팅)은 제외

type Benefit = {
  emoji: string;
  title: React.ReactNode;
  note?: string;
  badge: string;
};

const BENEFITS: Benefit[] = [
  {
    emoji: "🖥️",
    title: (
      <>
        고사양 NVIDIA
        <br />
        GPU 서버 보유
      </>
    ),
    badge: "bg-sky-100 text-sky-700",
  },
  {
    emoji: "🖨️",
    title: (
      <>
        전국 캠퍼스
        <br />
        3D 프린터·스캐너 제공
      </>
    ),
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    emoji: "⚡",
    title: "1인 1GPU 제공",
    note: "* 5060급",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    emoji: "🎤",
    title: "국내 최고 대학 AI 교수의 라이브강의",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    emoji: "📊",
    title: (
      <>
        삼성 SW 역량 테스트
        <br />
        응시 기회 제공
      </>
    ),
    badge: "bg-brand-100 text-brand-700",
  },
  {
    emoji: "🏆",
    title: (
      <>
        삼성·5대은행 등
        <br />
        기업 연계 프로젝트
      </>
    ),
    badge: "bg-coral-100 text-coral-600",
  }
  // {
  //   emoji: "📚",
  //   title: "실무형 프로젝트 포트폴리오",
  //   badge: "bg-rose-100 text-rose-700",
  // },
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

        <div className="mt-14 flex flex-wrap justify-center gap-5 max-w-[790px] mx-auto">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="reveal card p-6 flex flex-col items-center justify-center aspect-square w-[250px] text-center hover:shadow-card-hover hover:-translate-y-1"
              style={i > 0 ? { animationDelay: `${i * 0.05}s` } : undefined}
            >
              <span className={`tag ${b.badge}`}>혜택 {i + 1}</span>
              <div className="mt-4 text-4xl sm:text-5xl" aria-hidden="true">
                {b.emoji}
              </div>
              <p className="mt-3 text-base sm:text-lg font-bold text-ink-900 leading-snug break-keep">
                {b.title}
              </p>
              {b.note && (
                <p className="mt-1 text-xs font-semibold text-ink-400">
                  {b.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
