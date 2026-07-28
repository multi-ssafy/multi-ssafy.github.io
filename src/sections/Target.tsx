// WHO IS IT FOR — 나도 가능할까? (전공자 · 비전공자 · 어디에 있든)

const TARGETS = [
  {
    icon: (
      <svg
        className="h-5 w-5"
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
    headline: "기술을 실제 문제를 해결하는 역량으로",
    desc: "전공 지식을 반복하는 데 그치지 않고 프로젝트를 통해 설계·협업·구현 경험을 확장합니다.",
    tags: ["전공지식 확장", "실전 경험 강화"],
    delay: undefined,
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
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
    headline: "내 전공에 AI를 더하는 커리어 확장",
    desc: "전공을 버리는 진로 전환이 아닙니다. 경험에 AI 역량을 더해, 나만의 커리어를 확장할 수 있습니다.",
    tags: ["단계별 성장", "꾸준한 실습"],
    delay: ".06s",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
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
    title: "전국 5개 캠퍼스",
    headline: "어디에 있어도 성장의 기회는 가까이",
    desc: "익숙한 곳에서 교육에 집중하면서 비슷한 목표를 가진 동료들과 함께 취업을 준비할 수 있습니다.",
    tags: ["교육 몰입", "함께하는 취업 준비"],
    delay: ".12s",
  },
];

export default function Target() {
  return (
    <section id="target" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">WHO</p>

          <h2 className="section-title mt-3">
            나도 가능할까?
          </h2>

          <p className="section-desc">
            어떤 스토리를 갖고 있더라도 각자의 출발점에서 함께 성장할 수
            있어요
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TARGETS.map((target) => (
            <article
              key={target.title}
              className="reveal card flex h-full flex-col p-8 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={
                target.delay
                  ? { animationDelay: target.delay }
                  : undefined
              }
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                {target.icon}
              </div>

              <h3 className="mt-5 text-sm font-bold text-brand-600">
                {target.title}
              </h3>

              <p className="mt-2 text-lg font-bold leading-snug text-ink-900">
                {target.headline}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {target.desc}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {target.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-50 px-2 py-1 text-[11px] font-bold text-brand-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}