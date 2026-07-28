// 학습 로드맵 — 1년(12개월) 성장 여정
// 기본과정(5.5) → 1차 Job Fair(0.5) → 심화과정(5) → 2차 Job Fair(1)

type Step = {
  dur: string;
  title: string;
  desc: string;
  fair?: boolean;
};

const STEPS: Step[] = [
  {
    dur: "5.5개월",
    title: "기본과정",
    desc: "AI 기초 지식과 알고리즘 중심의 몰입형 코딩 교육 (수준별 분반 운영)",
  },
  {
    dur: "0.5개월",
    title: "1차 Job Fair",
    desc: "취업역량 향상 집중교육과 개인별 취업지원 서비스 제공",
    fair: true,
  },
  {
    dur: "5개월",
    title: "심화과정",
    desc: "AI 프로젝트 기반 자기주도 학습, 실무와 동일한 개발 방식 활용",
  },
  {
    dur: "1개월",
    title: "2차 Job Fair",
    desc: "채용 박람회 개최와 개인별 맞춤형 경력 설계·취업지원",
    fair: true,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">ROADMAP</p>
          <h2 className="section-title mt-3">1년의 학습 로드맵</h2>
          <p className="section-desc">
            기초부터 취업까지, 12개월 성장 여정을 함께합니다
          </p>
        </div>

        <div className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative card p-6 hover:shadow-card-hover hover:-translate-y-1"
              style={i > 0 ? { animationDelay: `${i * 0.06}s` } : undefined}
            >
              {/* lg 연결 화살표 */}
              {i < STEPS.length - 1 && (
                <span className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white ring-1 ring-ink-100 items-center justify-center text-ink-300">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              )}

              <div className="flex items-center justify-between">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white ${
                    s.fair ? "bg-coral-500" : "bg-brand-600"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`tag ${
                    s.fair
                      ? "bg-coral-50 text-coral-500"
                      : "bg-brand-50 text-brand-600"
                  }`}
                >
                  {s.dur}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-6 text-center text-sm font-semibold text-ink-400">
          총 12개월 · AI 활용 능력과 문제 해결 능력을 갖춘 차세대 SW·AI 인재로 성장
        </p>
      </div>
    </section>
  );
}
