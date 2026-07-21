// EDUCATION BENEFIT — 몰입을 돕는 교육지원 혜택 (4개 카드)

const iconBoxStyle = {
  right: "28px",
  bottom: "28px",
  width: "88px",
  height: "88px",
  background: "#eef3ff",
} as const;

const BENEFITS = [
  {
    tag: "최대 월 140만 원",
    title: "교육지원금 지급",
    desc: "교육에만 집중할 수 있도록",
    delay: undefined,
    icon: (
      <svg
        className="w-11 h-11 text-brand-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    tag: "1인 1GPU",
    title: "고성능 AI 학습 환경",
    desc: "NVIDIA GPU 서버 상시 지원",
    delay: ".06s",
    icon: (
      <svg
        className="w-11 h-11 text-brand-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
        <path d="M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    tag: "전국 캠퍼스",
    title: "피지컬 AI 제작 지원",
    desc: "3D 프린터·스캐너 제공",
    delay: ".12s",
    icon: (
      <svg
        className="w-11 h-11 text-brand-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    tag: "AI 전문가 LIVE",
    title: "국내 최고 교수진 강의",
    desc: "AI 인사이트 라이브 강의",
    delay: ".18s",
    icon: (
      <svg
        className="w-11 h-11 text-brand-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
  },
];

export default function Benefit() {
  return (
    <section id="benefit" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">EDUCATION BENEFIT</p>
          <h2 className="section-title mt-3">몰입을 돕는 교육지원 혜택</h2>
          <p className="section-desc">
            교육에만 온전히 집중할 수 있도록, 최고의 학습 환경을 지원합니다
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="reveal card relative p-7 overflow-hidden hover:shadow-card-hover hover:-translate-y-1"
              style={{ minHeight: "270px", animationDelay: b.delay }}
            >
              <div className="relative z-10">
                <span className="tag bg-brand-50 text-brand-700 border border-brand-100 w-fit">
                  {b.tag}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-ink-900 leading-snug">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
              <div
                className="absolute rounded-3xl flex items-center justify-center"
                style={iconBoxStyle}
              >
                {b.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
