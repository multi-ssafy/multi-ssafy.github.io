// 기업이 먼저 알아본 SSAFY — 현업(기업 담당자)의 목소리
// 레퍼런스: SSAFY 16기 기업 담당자 후기 (말풍선 스타일)

type Voice = {
  company: string;
  role: string;
  quote: string;
  delay?: string;
};

const VOICES: Voice[] = [
  {
    company: "농심NDS",
    role: "인사담당자",
    quote:
      "경력직 이상의 퍼포먼스와 우수한 적응력, 협업에서 인정받는 인재는 단연 SSAFY 출신입니다.",
  },
  {
    company: "우리은행",
    role: "채용담당자",
    quote:
      "프로젝트 경험 기반의 압도적인 기술 이해도와 협업 역량을 갖춘, 빠르게 성장하는 인재입니다.",
    delay: ".08s",
  },
  {
    company: "아이포트폴리오",
    role: "채용담당자",
    quote:
      "채용 박람회에서 지원자들의 주도적인 태도와 긍정적인 에너지를 보며, 함께 일하고 싶은 인재라고 생각했고, 계획에 없던 채용 포지션을 오픈하여 영입했습니다.",
    delay: ".16s",
  },
];

function Avatar() {
  return (
    <div className="shrink-0 w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-soft">
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

export default function CompanyVoices() {
  return (
    <section
      id="company-voices"
      className="scroll-mt-20 py-20 md:py-28 bg-white"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">COMPANY VOICE</p>
          <h2 className="section-title mt-3">
            기업이 먼저 알아본 SSAFY!
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              현업의 목소리
            </span>
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto flex flex-col gap-6">
          {VOICES.map((v, i) => (
            <div
              key={v.company}
              className={`reveal flex items-start gap-4 ${
                i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
              }`}
              style={v.delay ? { animationDelay: v.delay } : undefined}
            >
              <Avatar />
              <div
                className={`card p-6 sm:p-7 flex-1 ${
                  i % 2 === 1 ? "md:rounded-tr-none" : "md:rounded-tl-none"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    i % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="tag bg-brand-600 text-white">
                    {v.company}
                  </span>
                  <span className="text-sm font-bold text-ink-500">
                    {v.role}
                  </span>
                </div>
                <blockquote className="mt-3 text-base sm:text-lg font-bold text-ink-800 leading-relaxed">
                  “{v.quote}”
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
