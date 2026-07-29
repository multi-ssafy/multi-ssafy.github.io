// 브랜드 메시지 — 히어로 직후, 소개문구를 담는 섹션
// "저마다의 전공과 배경은 달라도, AI 시대가 원하는 인재로 새롭게 시작하세요"

export default function IntroMessage() {
  return (
    <section
      id="intro-message"
      className="relative overflow-hidden py-24 md:py-32 bg-ink-50/60"
    >
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-[420px] w-[680px] rounded-full bg-brand-100 opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.ink.100)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <h2 className="reveal break-keep text-2xl font-black tracking-tight text-ink-900 sm:text-4xl md:text-[2.75rem]">
          <span className="block mb-5">저마다의 전공과 배경은 달라도</span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              AI 시대가 원하는 인재
            </span>
            로
          </span>
          <span className="block mt-2">새롭게 시작하세요</span>
        </h2>
        {/* SSAFY 가디언즈 */}
        <div className="reveal mt-14">
          <div className="grid grid-cols-2 items-end justify-items-center gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 max-w-lg mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/guardians/statty.png" alt="스타티" className="w-full max-w-[12rem] h-auto" />
            <img src="/assets/images/guardians/alg.png" alt="알지" className="w-full max-w-[12rem] h-auto" />
            <img src="/assets/images/guardians/fit.png" alt="핏" className="w-full max-w-[12rem] h-auto" />
            <img src="/assets/images/guardians/wise.png" alt="와이즈" className="w-full max-w-[12rem] h-auto" />
          </div>
          {/* <p className="mt-6 text-center text-base sm:text-lg font-bold text-ink-700 break-keep leading-relaxed">
            도전하고, 고민하고, 함께 성장하는
            <br />
            여러분의 순간을 닮은 SSAFY 가디언즈
          </p> */}
        </div>

        
        <p className="reveal mt-28 break-keep text-base leading-relaxed sm:text-xl">
          <span className="font-bold text-ink-800">삼성이 만든 SSAFY</span>가{" "}
          <span className="font-bold text-ink-800">전문 AI 교육</span>과{" "}
          <span className="font-bold text-brand-600">월 최대 160만원</span>의 든든한
          지원금으로 함께합니다.
        </p>

      </div>
    </section>
  );
}