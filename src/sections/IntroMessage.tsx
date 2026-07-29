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
        <h2 className="reveal break-keep text-2xl font-black leading-[1.7] tracking-tight text-ink-900 sm:text-4xl md:text-[2.75rem]">
          저마다의 전공과 배경은 달라도
          <br />
          <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
            AI 시대가 원하는 인재
          </span>
          로
          <br />
          새롭게 시작하세요
        </h2>

        <p className="reveal mt-7 break-keep text-base leading-relaxed text-ink-500 sm:text-xl">
          <span className="font-bold text-ink-800">삼성이 만든 SSAFY</span>가{" "}
          <span className="font-bold text-ink-800">전문 AI 교육</span>과{" "}
          <span className="font-bold text-brand-600">월 최대 160만원</span>의 든든한
          지원금으로 함께합니다.
        </p>

        {/* 포인트 칩 */}
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-ink-800 shadow-soft ring-1 ring-ink-100">
            <svg
              className="h-4 w-4 text-brand-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            전문 AI 교육
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-soft">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
            월 최대 160만원 지원금
          </span>
        </div>
      </div>
    </section>
  );
}
