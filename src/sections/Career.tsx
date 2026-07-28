import { CalendarDays, GraduationCap, ArrowRight } from "@/lib/icons";

// EMPLOYMENT OUTCOME — 취업지원 서비스
// 1) 상단 통계 3종 (취업률 카운터 + 취업/우대 기업 수)
// 2) 취업 솔루션 3카드 (단계별 취업지원 프로그램 내용 통합)

/* ---------- 취업 솔루션 3카드 (단계별 프로그램 내용 통합) ---------- */
const SOLUTIONS = [
  {
    title: "취업특강",
    photo: { src: "/assets/photos/career-session.jpg", alt: "취업 실전 교육 현장" },
    icon: <GraduationCap className="w-5 h-5" />,
    items: [
      "단계별 취업 경쟁력 제고 교육",
      "비즈니스 매너 및 직무 지식 함양",
      "자기소개서·IT 포트폴리오 작성 지원",
    ],
    delay: undefined,
  },
  {
    title: "취업상담/컨설팅",
    photo: { src: "/assets/photos/consulting.jpg", alt: "1:1 취업 상담·컨설팅 모습" },
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
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
    items: [
      "직업 심리검사·취업역량 진단으로 진로 설계",
      "전문 컨설턴트 1:1 상담 · 면접 클리닉",
      "특별전형·서류가점 등 우대 기업 채용 정보 제공",
    ],
    delay: ".06s",
  },
  {
    title: "Job Fair",
    photo: { src: "/assets/photos/job-fair.jpg", alt: "SSAFY 채용박람회 현장" },
    icon: <CalendarDays className="w-5 h-5" />,
    items: [
      "채용박람회·캠퍼스 리크루팅·기업탐방",
      "우수 IT·AI기업 채용정보 제공",
      "개인별 진로 코칭, 취업활동 지원",
    ],
    delay: ".12s",
  },
];

export default function Career() {
  return (
    <section id="career" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">OUTCOME</p>
          <h2 className="section-title mt-3 !leading-snug">
            우수한 교육은
            <br className="hidden sm:block" />
            취업 성과로 증명합니다
          </h2>
          <p className="section-desc">
            전문가와 함께 AI 시대에 맞는 나의 진로를 설계해요
          </p>
        </div>

        {/* 상단 통계 3종 + 취업률 성장 추이 */}
        <div className="reveal mt-14 card p-8 md:p-10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-lg font-bold text-ink-900">수료생 취업실적</p>
            <span className="text-xs font-semibold text-ink-400">
              * 25.12월 기준
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {/* 취업률 */}
          <div className="relative min-h-[180px] rounded-2xl bg-brand-50/70 border border-brand-100 px-5 py-7 text-center flex flex-col items-center justify-center">
            <p
              className="relative inline-block text-5xl md:text-6xl font-black text-brand-600 leading-none"
              data-counter
              data-target="85"
            >
              0
              <span className="absolute left-full top-0 ml-0.5 text-3xl">%</span>
            </p>

            <p className="mt-3 text-sm font-bold text-ink-600">취업률</p>
          </div>

          {/* 취업 기업 수 */}
          <div className="relative min-h-[180px] rounded-2xl bg-ink-50 px-5 py-7 text-center flex flex-col items-center justify-center">
            <p className="text-5xl md:text-6xl font-black text-ink-900 leading-none">
              2,300
            </p>
            <p className="mt-3 text-sm font-bold text-ink-600">취업 기업 수</p>
          </div>

          {/* 우대 기업 수 */}
          <div className="relative min-h-[180px] rounded-2xl bg-ink-50 px-5 py-7 text-center flex flex-col items-center justify-center">
            <p className="text-5xl md:text-6xl font-black text-ink-900 leading-none">
              170
            </p>
            <p className="mt-3 text-sm font-bold text-ink-600">우대 기업 수</p>

            <p className="absolute bottom-3 left-4 right-4 text-[11px] text-ink-400 leading-snug">
              * 채용 시 특별전형, 서류 가점 등
            </p>
          </div>
        </div>

        </div>

        {/* 취업 솔루션 3카드 */}
        <div className="mt-20 text-center max-w-2xl mx-auto reveal">
          <h3 className="text-2xl font-extrabold text-ink-900">
            SSAFY만의 확실한 취업 솔루션
          </h3>
          <p className="mt-3 text-ink-500">
            취업 실전 교육과 개인별 상담·컨설팅으로 취업 성공까지 함께합니다
          </p>
        </div>
        
        <div className="mt-10 grid md:grid-cols-3 gap-6">
        {SOLUTIONS.map((s) => (
          <div
            key={s.title}
            className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 flex flex-col"
            style={s.delay ? { animationDelay: s.delay } : undefined}
          >
            {/* 사진 영역 */}
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-50">
              {s.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={s.photo.src}
                  alt={s.photo.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
                  <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                </div>
              )}
            </div>

            {/* 카드 내용 */}
            <div className="p-7 flex-1 flex flex-col">
              {/* 제목 위 아이콘 */}
              <div className="mb-4 w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                {s.icon}
              </div>

              <h4 className="text-lg font-extrabold text-ink-900">
                {s.title}
              </h4>

              <ul className="mt-4 space-y-2.5 text-sm text-ink-600 leading-relaxed">
                {s.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

        <div className="reveal text-center mt-14">
          {/* <p className="text-sm text-ink-500">
            수료 이후에도 취업할 때까지 이어지는 상담·교육·채용 연계
          </p> */}
          <a
            href="https://www.ssafy.com/ksp/servlet/swp.content.controller.SwpContentServlet"
            className="mt-3 inline-flex items-center gap-1.5 font-bold text-brand-600 hover:text-brand-700"
          >
            취업지원 자세히 보기 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
