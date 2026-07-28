import {
  MonitorSmartphone,
  ClipboardCheck,
  ListChecks,
  ChevronRight,
  ArrowUpRight,
} from "@/lib/icons";
import { APPLY_URL } from "@/data/site";

// APPLICATION GUIDE — 지원자격 및 선발 프로세스 (4개 박스로 압축)

const SELECT_STEPS = ["지원서 접수", "SW 적성진단", "인터뷰", "교육 시작"];

export default function Apply() {
  return (
    <section id="apply" className="scroll-mt-20 py-20 md:py-28 bg-cream-50">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="section-title mt-3">지원자격 및 선발 프로세스</h2>
          <p className="section-desc">
            <span className="font-bold text-brand-600">
              3분이면 끝나는 온라인 간편 지원
            </span>
            , 지금 바로 시작하세요
          </p>
        </div>

        {/* 카드 (세로 배치) */}
        <div className="reveal mt-14 max-w-2xl mx-auto grid gap-5">
          {/* 1. 지원 자격 */}
          <div className="card p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-ink-900">지원 자격</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                만 29세 이하 미취업자
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                4년제 대학 졸업(예정)자 또는 국내 지정 마이스터고 졸업자
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                <span>
                  전공 무관{" "}
                  <span className="text-ink-400">
                    (병역필 또는 면제자)
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* 2. 지원 방법 */}
          <div className="card p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-ink-900">지원 방법</h3>
            </div>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              홈페이지(
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener"
                className="font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2"
              >
                www.ssafy.com
              </a>
              ) 접속 후 지원서 작성
            </p>
            <p className="mt-1.5 text-sm text-ink-400">모바일로 간편 지원 가능</p>
          </div>

          {/* 3. 선발 프로세스 */}
          <div className="card p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <ListChecks className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-ink-900">선발 프로세스</h3>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs font-bold text-ink-600">
              {SELECT_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-x-1.5">
                  <span
                    className={`px-2.5 py-1.5 rounded-full ${
                      i === SELECT_STEPS.length - 1
                        ? "bg-brand-600 text-white"
                        : "bg-ink-50"
                    }`}
                  >
                    {step}
                  </span>
                  {i < SELECT_STEPS.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-ink-300 shrink-0" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-400">
              * 세부 일정은 단계별 합격자에게 개별 안내됩니다.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener"
            className="btn-primary w-full sm:w-auto"
          >
            지원하기 <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
