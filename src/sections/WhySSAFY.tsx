// 교육 혜택 — SSAFY가 제공하는 6가지 혜택 (기존 "무엇이 다른가?" 개편)

type Benefit = {
  icon: React.ReactNode;
  title: React.ReactNode;
  desc: string;
};

const iconCls = "w-6 h-6";

const BENEFITS: Benefit[] = [
  {
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    ),
    title: "무엇이든 전액 무료",
    desc: "교육비 부담 없이 배움에만 집중할 수 있습니다.",
  },
  {
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "삼성 표준 AI 인증체계 기반의 AI·SW 교육",
    desc: "삼성의 AI·SW 역량 표준에 맞춘 체계적 커리큘럼.",
  },
  {
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
    title: (
      <>
        조건 없는 <span className="text-brand-600">월 최대 130만원</span> 교육지원금
      </>
    ),
    desc: "별도 조건 없이 교육 기간 매월 지급합니다.",
  },
  {
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    ),
    title: "OO만원 상당 교보재 제공",
    desc: "학습에 필요한 교보재를 지원합니다.",
  },
  {
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "1:1 취업과외, 맞춤형 취업지원 서비스",
    desc: "개인별 진단부터 컨설팅까지 밀착 지원합니다.",
  },
  {
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </svg>
    ),
    title: "삼성·네이버·카카오·금융권까지, 무차별 취업 등용문",
    desc: "폭넓은 산업군으로 진출하는 확실한 발판.",
  },
];

export default function WhySSAFY() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">BENEFIT</p>
          <h2 className="section-title mt-3">교육 혜택</h2>
          <p className="section-desc">
            배움부터 취업까지, SSAFY가 확실하게 지원합니다
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="reveal card p-7 hover:shadow-card-hover hover:-translate-y-1"
              style={i > 0 ? { animationDelay: `${i * 0.06}s` } : undefined}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
                {b.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900 leading-snug">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
