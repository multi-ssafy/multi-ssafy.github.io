// SSAFY는 무엇이 다른가? — 교육 혜택과 유사한 세로 pill (3가지 차별점)

type Item = { text: React.ReactNode };

const ITEMS: Item[] = [
  {
    text: (
      <>
        삼성이 기획한 AI 교육 커리큘럼으로{" "}
        <span className="text-brand-600">현업 실무 수준의 AI 역량</span>을
        학습합니다.
      </>
    ),
  },
  {
    text: (
      <>
        16기까지 쌓아온 노하우,{" "}
        <span className="text-brand-600">매년 2,000여 명</span>의 교육생이
        SSAFY를 증명합니다.
      </>
    ),
  },
  {
    text: (
      <>
        전담 취업 컨설턴트가 취업 전 과정을{" "}
        <span className="text-brand-600">1:1 취업과외</span>로 지원합니다.
      </>
    ),
  },
];

export default function Difference() {
  return (
    <section id="difference" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">WHY SSAFY</p>
          <h2 className="section-title mt-3">SSAFY는 무엇이 다른가?</h2>
          {/* <p className="section-desc">
            쉽게 따라할 수 없는 확실한 차별점을 갖고 있어요
          </p> */}
        </div>

        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto flex flex-col gap-3.5 sm:gap-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal flex items-center gap-4 rounded-full bg-white px-5 sm:px-6 py-3.5 sm:py-4 shadow-card ring-1 ring-ink-100 transition-transform duration-300 hover:-translate-y-0.5"
              style={i > 0 ? { animationDelay: `${i * 0.06}s` } : undefined}
            >
              <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-black">
                0{i + 1}
              </span>
              <p className="text-base sm:text-lg font-bold text-ink-900 leading-snug break-keep">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
