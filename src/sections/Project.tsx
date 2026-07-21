import { Building2, Rocket } from "@/lib/icons";

// PROJECT — 기업연계 프로젝트 (5단계 과정 + 원소프트다임 대표 사례)

const STEPS = [
  {
    num: "01",
    label: "기업 선택",
    icon: <Building2 className="w-7 h-7" />,
    delay: undefined,
    span: false,
  },
  {
    num: "02",
    label: "지원·선정",
    icon: (
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </svg>
    ),
    delay: ".05s",
    span: false,
  },
  {
    num: "03",
    label: "요구사항 분석",
    icon: (
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
    ),
    delay: ".1s",
    span: false,
  },
  {
    num: "04",
    label: "기업 멘토링",
    icon: (
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      </svg>
    ),
    delay: ".15s",
    span: false,
  },
];

export default function Project() {
  return (
    <section id="project" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">PROJECT</p>
          <h2 className="section-title mt-3">기업연계 프로젝트</h2>
          <p className="section-desc">
            기업의 요구사항을 직접 구현하는 프로젝트를 진행합니다.{" "}
            <span className="text-ink-400">(자율프로젝트 中)</span>
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="reveal text-center"
              style={s.delay ? { animationDelay: s.delay } : undefined}
            >
              <div className="mx-auto w-16 h-16 rounded-3xl bg-ink-50 flex items-center justify-center text-brand-600">
                {s.icon}
              </div>
              <p className="mt-3 text-xs font-bold text-ink-400">{s.num}</p>
              <p className="text-sm font-bold text-ink-800">{s.label}</p>
            </div>
          ))}
          {/* 05 서비스 구현 (강조) */}
          <div
            className="reveal text-center col-span-2 sm:col-span-1"
            style={{ animationDelay: ".2s" }}
          >
            <div className="mx-auto w-16 h-16 rounded-3xl bg-brand-600 flex items-center justify-center text-white shadow-soft">
              <Rocket className="w-7 h-7" />
            </div>
            <p className="mt-3 text-xs font-bold text-ink-400">05</p>
            <p className="text-sm font-bold text-ink-800">서비스 구현</p>
          </div>
        </div>

        {/* 기업연계 프로젝트 대표 사례 */}
        <div className="mt-14">
          <div className="reveal flex items-center gap-4" />

          <div className="reveal mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-900 leading-snug">
              프로젝트 경험은 실제 채용으로 이어집니다
            </h3>
          </div>

          <article className="reveal card mt-8 overflow-hidden hover:shadow-card-hover">
            <div className="grid lg:grid-cols-2">
              {/* 프로젝트 사진/영상 */}
              <div className="relative bg-ink-900">
                <a
                  href="영상 주소 입력"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full h-full overflow-hidden"
                  aria-label="원소프트다임 기업연계 프로젝트 영상 보기"
                  style={{ minHeight: "390px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/photos/project-wonsofteam.jpg"
                    alt="원소프트다임 기업연계 프로젝트"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/icons/youtube-logo.svg"
                      alt=""
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{
                        width: "68px",
                        height: "auto",
                        filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))",
                      }}
                    />
                  </span>
                  <span className="absolute left-6 bottom-6">
                    <span className="inline-flex rounded-full bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                      프로젝트 영상 보기
                    </span>
                  </span>
                </a>
              </div>

              {/* 프로젝트 상세정보 */}
              <div className="p-7 sm:p-9 lg:p-10 flex flex-col">
                <div>
                  <span className="tag bg-brand-50 text-brand-600 border border-brand-100">
                    채용연계형 기업연계 프로젝트
                  </span>
                  <h4 className="mt-5 text-2xl sm:text-3xl font-extrabold text-ink-900 leading-snug">
                    디바이스와 AI를 연결한
                    <br className="hidden sm:block" />
                    헬스케어 애플리케이션
                  </h4>
                  <p className="mt-3 text-sm font-bold text-brand-600">
                    원소프트다임 × SSAFY 12기
                  </p>
                  <p className="mt-5 text-sm text-ink-500 leading-relaxed">
                    블루투스로 측정한 건강 데이터를 스마트폰에서 관리하고, 고령
                    사용자도 쉽게 이해할 수 있도록 AI 기반 피드백을 제공하는
                    헬스케어 서비스입니다.
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-bold text-ink-400">
                      PARTICIPATION
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="tag bg-ink-50 text-ink-600">기획</span>
                      <span className="tag bg-ink-50 text-ink-600">
                        UX/UI 디자인
                      </span>
                      <span className="tag bg-ink-50 text-ink-600">
                        프론트엔드
                      </span>
                      <span className="tag bg-ink-50 text-ink-600">영상 제작</span>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-8 rounded-2xl p-5 sm:p-6"
                  style={{
                    background: "linear-gradient(135deg, #2145f0, #1534c7)",
                  }}
                >
                  <div className="flex items-center gap-4" />
                </div>
              </div>
            </div>

            {/* 교육생 소감 */}
            <div className="border-t border-ink-100 p-7 sm:p-9">
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-5 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photos/project-park-jinhyeon.png"
                  alt="SSAFY 구미캠퍼스 12기 박진현 수료생"
                  className="w-14 h-14 rounded-full object-cover bg-ink-100"
                />
                <div>
                  <blockquote className="text-base sm:text-lg font-bold text-ink-800 leading-relaxed">
                    “이 경험이 저의 취업으로 이어지는 가장 직접적이고 결정적인
                    계기가 되었습니다.”
                  </blockquote>
                  <p className="mt-2 text-sm text-ink-500">
                    박진현 · SSAFY 구미캠퍼스 12기 · 원소프트다임
                  </p>
                </div>
                <a
                  href="인터뷰 원문 주소 입력"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 font-bold text-brand-600 hover:text-brand-700"
                >
                  전체 인터뷰 보기
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
