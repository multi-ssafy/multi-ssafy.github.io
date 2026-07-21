import {
  CalendarDays,
  MonitorSmartphone,
  ClipboardCheck,
  ListChecks,
  FilePen,
  Users,
  GraduationCap,
  Info,
  ChevronRight,
  ArrowUpRight,
} from "@/lib/icons";
import { APPLY_URL } from "@/data/site";

// APPLICATION GUIDE — 지원자격 및 선발 프로세스

export default function Apply() {
  return (
    <section id="apply" className="scroll-mt-20 py-20 md:py-28 bg-cream-50">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          {/* <p className="eyebrow justify-center">APPLICATION GUIDE</p> */}
          <h2 className="section-title mt-3">지원자격 및 선발 프로세스</h2>
          <p className="section-desc">
            지원 직전, 상세 자격 요건과 선발 과정을 꼼꼼히 확인하세요
          </p>
        </div>

        {/* 모집 기간 & 지원 방법 */}
        <div className="reveal mt-14 grid sm:grid-cols-2 gap-5">
          <div className="card p-6 sm:p-7 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-400">모집 기간</p>
              <p className="mt-1.5 text-lg font-extrabold text-ink-900 leading-snug">
                2026년 4월 27일(월) ~ 5월 11일(월)
              </p>
            </div>
          </div>
          <div className="card p-6 sm:p-7 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <MonitorSmartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-400">지원 방법</p>
              <p className="mt-1.5 text-lg font-extrabold text-ink-900 leading-snug">
                홈페이지(
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener"
                  className="text-brand-600 hover:text-brand-700 underline underline-offset-2"
                >
                  www.ssafy.com
                </a>
                ) 접속 후 지원서 작성
              </p>
              <p className="mt-1 text-sm text-ink-500">PC·모바일 모두 지원 가능</p>
            </div>
          </div>
        </div>

        {/* 지원 자격 테이블 */}
        <div className="reveal mt-5 card overflow-hidden">
          <div className="flex items-center gap-2.5 px-6 sm:px-8 py-5 border-b border-ink-100 bg-ink-50/50">
            <ClipboardCheck className="w-5 h-5 text-brand-600" />
            <h3 className="text-lg font-extrabold text-ink-900">지원 자격</h3>
          </div>
          <div className="divide-y divide-ink-100">
            {/* 대상 */}
            <div className="grid sm:grid-cols-[140px_1fr] gap-x-6 gap-y-2 px-6 sm:px-8 py-6">
              <p className="text-sm font-bold text-brand-600">대상</p>
              <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  29세 이하 (96년 7월 1일 이후 출생자)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  국내외 4년제 대학(학사 이상) 졸업자 및 졸업 예정자{" "}
                  <span className="font-semibold text-brand-600">
                    (전공무관)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  국내 지정 마이스터고 졸업자 (학과무관)
                </li>
              </ul>
            </div>
            {/* 재직 여부 */}
            <div className="grid sm:grid-cols-[140px_1fr] gap-x-6 gap-y-2 px-6 sm:px-8 py-6">
              <p className="text-sm font-bold text-brand-600">재직 여부</p>
              <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  현재 미취업자 대상
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  인터뷰일부터 본 교육 시작일 전까지 재직(예정)자 지원 불가{" "}
                  <span className="text-ink-400">
                    (사업장 건강보험 및 국민연금 가입여부 기준)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-ink-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink-300 shrink-0" />
                  졸업예정자는 취업 여부 상관없이 지원 가능
                </li>
              </ul>
            </div>
            {/* 기타 사항 */}
            <div className="grid sm:grid-cols-[140px_1fr] gap-x-6 gap-y-2 px-6 sm:px-8 py-6">
              <p className="text-sm font-bold text-brand-600">기타 사항</p>
              <ul className="space-y-2 text-sm text-ink-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  교육시작일 교육 입과 가능한 자
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  입과 후 1년간 SSAFY 교육에 온전히 집중할 수 있는 자
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  지역 캠퍼스 내일배움카드 소지자 우대
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  사회 배려 대상자 우대
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  대학교, 대학원 재학 중인 자 지원 불가{" "}
                  <span className="text-ink-400">(단, 졸업예정자는 가능)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                  병역필 또는 면제자로 해외여행에 결격 사유가 없는 자{" "}
                  <span className="text-ink-400">
                    (교육 시작일 전까지 병역의무 완료 예정자 포함 / 마이스터고
                    졸업자는 병역 무관)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 선발 프로세스 */}
        <div className="reveal mt-5 card p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <ListChecks className="w-5 h-5 text-brand-600" />
            <h3 className="text-lg font-extrabold text-ink-900">선발 프로세스</h3>
          </div>

          {/* 원형 프로세스 다이어그램 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0">
            {/* STEP 1 */}
            <div className="relative flex flex-col items-center text-center px-2">
              <div className="w-20 h-20 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center text-brand-600">
                <FilePen className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <span className="mt-4 tag bg-ink-100 text-ink-500">STEP 1</span>
              <p className="mt-2 font-bold text-ink-900">지원서 접수</p>
              <p className="mt-0.5 text-sm font-semibold text-brand-600">
                4.27 ~ 5.11
              </p>
              <ChevronRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-ink-200" strokeWidth={2.5} />
            </div>
            {/* STEP 2 */}
            <div className="relative flex flex-col items-center text-center px-2">
              <div className="w-20 h-20 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center text-brand-600">
                <ClipboardCheck className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <span className="mt-4 tag bg-ink-100 text-ink-500">STEP 2</span>
              <p className="mt-2 font-bold text-ink-900">
                SSAFY 적성진단<span className="text-coral-500">*</span>
              </p>
              <p className="mt-0.5 text-sm font-semibold text-brand-600">
                5월 중
              </p>
              <ChevronRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-ink-200" strokeWidth={2.5} />
            </div>
            {/* STEP 3 */}
            <div className="relative flex flex-col items-center text-center px-2">
              <div className="w-20 h-20 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center text-brand-600">
                <Users className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <span className="mt-4 tag bg-ink-100 text-ink-500">STEP 3</span>
              <p className="mt-2 font-bold text-ink-900">인터뷰</p>
              <p className="mt-0.5 text-sm font-semibold text-brand-600">
                6월 중
              </p>
              <ChevronRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-ink-200" strokeWidth={2.5} />
            </div>
            {/* STEP 4 */}
            <div className="relative flex flex-col items-center text-center px-2">
              <div className="w-20 h-20 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-soft">
                <GraduationCap className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <span className="mt-4 tag bg-brand-100 text-brand-700">
                STEP 4
              </span>
              <p className="mt-2 font-bold text-ink-900">교육 시작</p>
              <p className="mt-0.5 text-sm font-semibold text-brand-600">
                7월 중
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-ink-400 text-center">
            * 전체 일정은 추후 안내 예정입니다.
          </p>

          {/* 적성진단 비고 */}
          <div className="mt-6 rounded-2xl bg-ink-50/70 border border-ink-100 p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-bold text-ink-700">
              <Info className="w-4 h-4 text-brand-600 shrink-0" />
              SSAFY 적성진단 안내
            </div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-white border border-ink-100 p-4">
                <span className="tag bg-brand-50 text-brand-600">SW 전공</span>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  기초 코딩 테스트{" "}
                  <span className="text-ink-400">
                    (Python, Java, C/C++ 중 사용 가능한 언어 선택)
                  </span>
                </p>
              </div>
              <div className="rounded-xl bg-white border border-ink-100 p-4">
                <span className="tag bg-coral-50 text-coral-500">
                  SW 비전공 · 마이스터고
                </span>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  기초 논리 테스트 1(객관식), 기초 논리 테스트 2(주관식)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener"
            className="btn-primary w-full sm:w-auto"
          >
            지원하기 <ArrowUpRight className="w-4 h-4" />
          </a>
          {/* <a href="#" className="btn-outline w-full sm:w-auto">
            모집공고 자세히 보기
          </a> */}
        </div>
      </div>
    </section>
  );
}
