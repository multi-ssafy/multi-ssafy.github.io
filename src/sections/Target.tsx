// WHO IS IT FOR — 나도 가능할까? (전공자 · 비전공자 · 지역 지원자)

const TARGETS = [
  {
    icon: (
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
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    title: "전공자라면",
    desc: "심화·실전 프로젝트로 바로 도약",
    tags: ["AI 심화", "기업연계 프로젝트"],
    delay: undefined,
  },
  {
    icon: (
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
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
    title: "비전공자라면",
    desc: "전공 무관, 기초 사전학습부터 체계적으로",
    tags: ["전공 무관", "기초부터"],
    delay: ".06s",
  },
  {
    icon: (
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
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "지역 지원자라면",
    desc: "전국 5개 캠퍼스에서 동일한 교육",
    tags: ["셔틀버스 운영", "지역 최대 월140만원"],
    delay: ".12s",
  },
];

export default function Target() {
  return (
    <section id="target" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">WHO IS IT FOR</p>
          <h2 className="section-title mt-3">나도 가능할까?</h2>
          <p className="section-desc">
            출발점이 어디든, 실전형 SW·AI 인재로 성장합니다
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TARGETS.map((t) => (
            <div
              key={t.title}
              className="reveal card p-8 hover:shadow-card-hover hover:-translate-y-1"
              style={t.delay ? { animationDelay: t.delay } : undefined}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
                {t.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                {t.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-brand-600 px-2 py-1 rounded-full bg-brand-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
