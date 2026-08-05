// 학습 로드맵 — 1년(12개월) 성장 여정: 학기별 6개월씩, 과정/잡페어 너비 차등

type Step = {
  title: string;
  desc: string;
  fair?: boolean;
};

type Group = { label: string; steps: Step[] };

const GROUPS: Group[] = [
  {
    label: "1학기 (6개월)",
    steps: [
      { title: "1학기 기본과정", desc: "알고리즘 및 AI 중심 교육" },
      { title: "1차 Job Fair", desc: "자기탐색 및 진로설계", fair: true },
    ],
  },
  {
    label: "2학기 (6개월)",
    steps: [
      { title: "2학기 심화과정", desc: "AI 기반 자기주도형 실전 프로젝트" },
      { title: "2차 Job Fair", desc: "SSAFY만의 채용박람회", fair: true },
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">ROADMAP</p>
          <h2 className="section-title mt-3">1년의 학습 로드맵</h2>
          <p className="section-desc">
            취업까지 12개월 성장 여정을 함께해요
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:gap-8 lg:grid-cols-2">
          {GROUPS.map((group, gi) => (
            <div key={gi}>
              {/* 학기 헤더 바 */}
              <div className="rounded-xl bg-brand-600 py-2.5 text-center text-base font-bold text-white shadow-soft">
                {group.label}
              </div>

              {/* 과정(넓게) + 잡페어(좁게) 너비 차등 */}
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1.7fr_1fr]">
                {group.steps.map((s, si) => {
                  const num = gi * 2 + si + 1;
                  return (
                    <div
                      key={s.title}
                      className="card relative p-5 min-h-[150px] h-full flex flex-col items-center justify-center text-center hover:shadow-card-hover hover:-translate-y-1"
                    >
                      <span
                        className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white ${
                          s.fair ? "bg-coral-500" : "bg-brand-600"
                        }`}
                      >
                        {num}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-ink-900 whitespace-nowrap">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-ink-500 whitespace-nowrap">
                        {s.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
