import { Users, Cpu, Handshake, Building2, MessageSquare, Code2, Rocket, ArrowRight } from "@/lib/icons";

// WHY SSAFY — SSAFY는 무엇이 다른가? (01/02/03 카드)

export default function WhySSAFY() {
  return (
    <section id="why" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">WHY SSAFY</p>
          <h2 className="section-title mt-3">SSAFY는 무엇이 다른가?</h2>
          <p className="section-desc">
            교육–프로젝트–취업이 하나의 과정으로 연결됩니다
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
                16기 동안 쌓아온
                <br />
                성장의 시스템
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                전국 5개 캠퍼스와 약 1,000명의 동기가 함께하는 오프라인 몰입교육
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
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900 leading-snug">
                삼성의 현업 경험을 담은
                <br />
                체계적인 AI·SW 교육
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                비전공자도 기초부터 실전까지 단계적으로 역량을 완성
              </p>
              <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-brand-600">
                <span className="px-2.5 py-1 rounded-full bg-brand-50">
                  기초
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-ink-300" />
                <span className="px-2.5 py-1 rounded-full bg-brand-50">
                  심화
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-ink-300" />
                <span className="px-2.5 py-1 rounded-full bg-brand-50">
                  실전
                </span>
              </div>
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
                기업 멘토와 소통하며 실제 요구사항을 서비스로 구현
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
