// 인용 배너 — 학습에서 끝나지 않고 현업에서 통하는 SW·AI 인재로

export default function QuoteBanner() {
  return (
    <section className="py-20 md:py-28 bg-ink-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-brand-800/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-coral-900/30 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto px-5 text-center reveal">
        <svg
          className="w-8 h-8 text-brand-400 mx-auto mb-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        </svg>
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
          기업에서 통하는 AI·SW 인재로
          <br />
          <span className="text-brand-400">취업 성공</span>
        </p>
      </div>
    </section>
  );
}
