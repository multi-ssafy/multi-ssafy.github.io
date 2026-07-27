import { ArrowRight } from "@/lib/icons";

// AI·SW CURRICULUM — 3단계 커리큘럼 + AI 학습 지원 환경

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
            삼성의 현업 경험을 담아, 도구를 넘어 AI가 적용된 서비스를 구현하는 역량까지 설계했어요
          </p>
        </div>

        {/* AI 역량 성장 단계 */}
        <div className="reveal mt-10 flex items-center justify-center gap-2 text-xs font-bold text-ink-400">
          <span className="px-3 py-1.5 rounded-full bg-white border border-ink-100">
            AI 이해
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-ink-300" />
          <span className="px-3 py-1.5 rounded-full bg-white border border-ink-100">
            AI 모델 실습
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-ink-300" />
          <span className="px-3 py-1.5 rounded-full bg-white border border-ink-100">
            AI 서비스 설계
          </span>
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
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                다양한 체험과 미니 프로젝트를 통해 AI의 원리와 활용 가능성을
                발견합니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="tag bg-ink-50 text-ink-600">AI 기본 이해</span>
                <span className="tag bg-ink-50 text-ink-600">디자인 사고</span>
                <span className="tag bg-ink-50 text-ink-600">
                  AI 아이디에이션
                </span>
              </div>
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
                AI 핵심 이론과 모델 실습
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                AI·머신러닝의 기본 개념부터 생성형 AI와 주요 모델 활용법까지
                체계적으로 학습합니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="tag bg-ink-50 text-ink-600">AI·머신러닝</span>
                <span className="tag bg-ink-50 text-ink-600">생성형 AI</span>
                <span className="tag bg-ink-50 text-ink-600">프롬프트</span>
                <span className="tag bg-ink-50 text-ink-600">RAG</span>
                <span className="tag bg-ink-50 text-ink-600">알고리즘</span>
              </div>
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
                프로젝트로 증명하는 AI 역량
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                다양한 AI 기술을 프로젝트에 적용해 실제로 작동하는 AI 서비스를
                완성합니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="tag bg-ink-50 text-ink-600">컴퓨터 비전</span>
                <span className="tag bg-ink-50 text-ink-600">LLM</span>
                <span className="tag bg-ink-50 text-ink-600">파인튜닝</span>
                <span className="tag bg-ink-50 text-ink-600">AI 에이전트</span>
                <span className="tag bg-ink-50 text-ink-600">MLOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI 학습 지원 환경 */}
        <div className="reveal mt-8 card p-6 sm:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="lg:w-1/3">
              <h3 className="mt-2 text-xl font-extrabold text-ink-900">
                오직 실습에만 집중할 수 있는 
                <br />AI 학습 환경 제공
              </h3>
              {/* <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                학습부터 프로젝트 구현까지
              </p> */}
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-2xl bg-ink-50 px-4 py-4">
                <p className="text-sm font-extrabold text-ink-900">AI 전문가</p>
                <p className="mt-1 text-xs text-ink-500">강의·멘토링</p>
              </div>
              <div className="rounded-2xl bg-ink-50 px-4 py-4">
                <p className="text-sm font-extrabold text-ink-900">AI 포털</p>
                <p className="mt-1 text-xs text-ink-500">강의·학습 콘텐츠</p>
              </div>
              <div className="rounded-2xl bg-ink-50 px-4 py-4">
                <p className="text-sm font-extrabold text-ink-900">학습 데이터</p>
                <p className="mt-1 text-xs text-ink-500">데이터 통합 관리</p>
              </div>
              <div className="rounded-2xl bg-ink-50 px-4 py-4">
                <p className="text-sm font-extrabold text-ink-900">
                  GPU 인프라
                </p>
                <p className="mt-1 text-xs text-ink-500">AI 프로젝트 지원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
