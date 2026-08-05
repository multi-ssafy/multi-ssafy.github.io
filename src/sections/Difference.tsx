// SSAFY는 무엇이 다른가? — 교육 혜택과 유사한 세로 pill (3가지 차별점)

type Item = { text: React.ReactNode };

const ITEMS: Item[] = [
  {
    text: (
      <>
        삼성의 AI 인증 체계 기반 커리큘럼으로{" "}
        <span className="text-brand-600">현업 수준의 AI 인재로 성장할 수 있습니다.</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span className="text-brand-600">매월 100만원+α,{" "}</span>
        오직 교육과 성장에만 몰입할 수 있도록 아낌없이 지원합니다.
      </>
    ),
  },
  {
    text: (
      <>
        멈추지 않고 이어온 열여섯 기수의 교육 노하우가{" "}
        <span className="text-brand-600">85% 취업률로 증명합니다.</span>
      </>
    ),
  },
  {
    text: (
      <>
        입과부터 취업까지, 1:1 전담 컨설턴트가{" "}
        <span className="text-brand-600">나만의 취업 성공 로드맵을 밀착 지원합니다.</span>
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

        <div className="mt-12 sm:mt-14 max-w-4xl mx-auto flex flex-col gap-3.5 sm:gap-4">
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
