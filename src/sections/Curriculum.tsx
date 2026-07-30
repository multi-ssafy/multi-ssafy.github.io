// AI·SW CURRICULUM — AI 역량 로드맵 + 3단계 커리큘럼 + AI 학습 지원 환경

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        {/* 섹션 제목 */}
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">AI</p>
          <h2 className="section-title mt-3">
            AI 커리큘럼
          </h2>
          <p className="section-desc">
            1년의 밀도 있는 몰입 과정을 통해
            <br />
            AI를 이해하고 서비스를 완성해요
          </p>
        </div>

        {/* 3단계 커리큘럼 */}
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {/* STEP 1 */}
          <div className="reveal relative">
            <div className="card p-7 h-full hover:shadow-card-hover hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="tag bg-brand-50 text-brand-600">STEP 1</span>
              </div>
              <div className="mt-6 w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.65.66-1.12 1.2-1.82A6 6 0 1 0 7.71 12.18c.54.7 1.02 1.17 1.2 1.82" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink-900">
                AI 인사이트 기르기
              </h3>
              <p className="mt-2 text-sm font-bold text-brand-600">
                체험으로 시작하는 AI 맛보기
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                <li>· AI와 SW세계에 대해 배우는 첫 단계</li>
                <li>· AI 트렌드, 노하우 습득</li>
                <li>· 미니프로젝트로 체험해보는 AI</li>
              </ul>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="reveal relative" style={{ animationDelay: ".08s" }}>
            <div className="card p-7 h-full hover:shadow-card-hover hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="tag bg-brand-50 text-brand-600">STEP 2</span>
              </div>
              <div className="mt-6 w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="6" height="6" x="9" y="9" rx="1" />
                  <path d="M9 1v3" />
                  <path d="M15 1v3" />
                  <path d="M9 20v3" />
                  <path d="M15 20v3" />
                  <path d="M20 9h3" />
                  <path d="M20 14h3" />
                  <path d="M1 9h3" />
                  <path d="M1 14h3" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink-900">
                AI 핵심 이론 + 알고리즘
              </h3>
              <p className="mt-2 text-sm font-bold text-brand-600">
                기본 개념 학습부터 시작하는 AI 첫걸음
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                <li>· AI / 머신러닝 기본 원리 이해</li>
                <li>· 생성형 AI와 프롬프트 이해</li>
                <li>· 다양한 AI 모델 이해</li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="reveal" style={{ animationDelay: ".16s" }}>
            <div className="card p-7 h-full hover:shadow-card-hover hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="tag bg-brand-50 text-brand-600">STEP 3</span>
              </div>
              <div className="mt-6 w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 15v5" />
                  <path d="M8 20h8" />
                  <path d="M4 4h16v11H4z" />
                  <path d="m8 11 2-2 2 2 4-4" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink-900">
                프로젝트로 증명하는 AI 실전 경험
              </h3>
              <p className="mt-2 text-sm font-bold text-brand-600">
                AI 프로젝트로 완성하는 실무형 포트폴리오
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                <li>· 다양한 AI를 활용한 프로젝트 경험</li>
                <li>· AI 모델 성능 개선 실습 및 AI Agent 개발</li>
                <li>· AI 서비스 배포와 운영</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI 학습 지원 환경 — STEP과 구분되는 별도 카테고리임을 명시 */}
        <div className="reveal mt-16 card p-6 sm:p-8">
          <div className="text-center sm:text-left">
            <span className="tag bg-brand-50 text-brand-600">SUPPORT</span>
            <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-ink-900">
              오직 실습에만 집중할 수 있는 AI 학습 환경 제공
            </h3>
          </div>

          <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-ink-50 px-5 py-5">
              <p className="text-base font-extrabold text-ink-900">AI 전문가</p>
              <p className="mt-1.5 text-sm leading-relaxed break-keep">
                강사진·멘토링 체계 구축
              </p>
            </div>
            <div className="rounded-2xl bg-ink-50 px-5 py-5">
              <p className="text-base font-extrabold text-ink-900">AI 포털</p>
              <p className="mt-1.5 text-sm leading-relaxed break-keep">
                강의·학습 콘텐츠 라이브러리 제공
              </p>
            </div>
            <div className="rounded-2xl bg-ink-50 px-5 py-5">
              <p className="text-base font-extrabold text-ink-900">학습 데이터</p>
              <p className="mt-1.5 text-sm leading-relaxed break-keep">
                SSAFY 데이터셋 통합 관리 및 제공
              </p>
            </div>
            <div className="rounded-2xl bg-ink-50 px-5 py-5">
              <p className="text-base font-extrabold text-ink-900">GPU 인프라</p>
              <p className="mt-1.5 text-sm leading-relaxed break-keep">
                AI 프로젝트 지원
              </p>
            </div>
          </div>
        </div>
      </div>
      
        {/* AI 역량 로드맵 */}
        {/* <div className="reveal mt-12 sm:mt-14 max-w-2xl mx-auto">
          {/* <p className="text-center text-lg font-bold text-brand-600 mb-6">
            AI 역량 성장 로드맵
          </p> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src="/assets/images/ai-roadmap.png"
            alt="AI 역량 성장 로드맵: 입과 전 AI 이해부터 2학기 AI 서비스 설계 능력까지 5단계"
            className="w-full max-w-xl mx-auto h-auto"
          /> */}
        {/* </div> */}
    </section>
  );
}