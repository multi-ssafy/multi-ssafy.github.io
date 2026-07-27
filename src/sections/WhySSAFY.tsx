import { Users, Handshake, Building2, MessageSquare, Code2, Rocket } from "@/lib/icons";

// WHY SSAFY — SSAFY는 무엇이 다른가? (01/02/03 카드)

export default function WhySSAFY() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">WHY</p>
          <h2 className="section-title mt-3">SSAFY는 무엇이 다른가?</h2>
          <p className="section-desc">
            교육 + 프로젝트 + 취업을 하나의 과정으로 끝내요
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {/* 01 */}
          <div className="reveal relative card p-8 overflow-hidden hover:shadow-card-hover hover:-translate-y-1">
            <span className="absolute -top-1 right-2 text-7xl font-black text-ink-50 select-none">
              01
            </span>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900 leading-snug">
                16기 동안 검증된
                <br />
                집합교육의 힘
              </h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                AI 교육은 새로워야 하지만<br />사람을 성장시키는 과정은 검증되어야 합니다.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-[11px] font-bold text-ink-400">
                <span className="px-2 py-1 rounded-full bg-ink-50">1기</span>
                <span className="w-3 h-px bg-ink-200" />
                <span className="px-2 py-1 rounded-full bg-ink-50">2기</span>
                <span className="w-3 h-px bg-ink-200" />
                <span className="px-2 py-1 rounded-full bg-ink-50">…</span>
                <span className="w-3 h-px bg-ink-200" />
                <span className="px-2.5 py-1 rounded-full bg-brand-600 text-white">
                  17기
                </span>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div
            className="reveal relative card p-8 overflow-hidden hover:shadow-card-hover hover:-translate-y-1"
            style={{ animationDelay: ".08s" }}
          >
            <span className="absolute -top-1 right-2 text-7xl font-black text-ink-50 select-none">
              02
            </span>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
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
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900 leading-snug">
                교육에만 집중하도록
                <br />
                <span className="text-brand-600">월 최대 </span>
                <span className="text-2xl font-extrabold text-brand-600">
                  160만원
                </span>
                <span className="text-brand-600"> 지원</span>
              </h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                교육에만 집중할 수 있도록 매월 지원금을 지급합니다.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-bold text-brand-600">
                <span className="px-2.5 py-1 rounded-full bg-brand-50">
                  교육지원금 100만원
                </span>
                <span className="text-ink-300">+</span>
                <span className="px-2.5 py-1 rounded-full bg-brand-50">
                  KDT 훈련장려금 최대 60만원
                </span>
              </div>
              <p className="mt-2 text-[11px] font-semibold text-ink-400">
                * 캠퍼스별 상이
              </p>
            </div>
          </div>

          {/* 03 */}
          <div
            className="reveal relative card p-8 overflow-hidden hover:shadow-card-hover hover:-translate-y-1"
            style={{ animationDelay: ".16s" }}
          >
            <span className="absolute -top-1 right-2 text-7xl font-black text-ink-50 select-none">
              03
            </span>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900 leading-snug">
                기업 요구를 직접 구현하는
                <br />
                실전형 프로젝트
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                기업 멘토와 소통하며 
                <br />
                실제 현업에서의 과제를 해결합니다.
                <br />
              </p>
              <div className="mt-6 flex items-center gap-2 text-ink-400">
                <Building2 className="w-4 h-4" />
                <MessageSquare className="w-4 h-4" />
                <Code2 className="w-4 h-4" />
                <Rocket className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
