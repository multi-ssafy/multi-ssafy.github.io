"use client";

import { useState } from "react";
import {
  MonitorSmartphone,
  ClipboardCheck,
  ListChecks,
  ChevronRight,
} from "@/lib/icons";
import { APPLY_URL } from "@/data/site";

// APPLICATION GUIDE — 지원자격 및 선발 프로세스 (4개 박스로 압축)

const SELECT_STEPS = ["지원서 접수 ('26.10월예정)", "SSAFY 적성진단", "인터뷰", "교육 시작"];

export default function Apply() {
  const [showAptitudeModal, setShowAptitudeModal] = useState(false);

  return (
    <section id="apply" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="section-title mt-3">지원자격 및 모집 프로세스</h2>
          <p className="section-desc">
            <span className="font-bold text-brand-600">
              3분이면 끝나는 온라인 간편 지원
            </span>{" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/icons/mobile-apply.png"
              alt=""
              aria-hidden="true"
              className="inline-block h-6 w-6 sm:h-7 sm:w-7 align-middle"
            />
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
            <ul className="mt-4 space-y-2 text-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                만 29세 이하 미취업자
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                4년제 대졸(예정)자 또는 마이스터고 졸업자
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                <span>
                  전공 무관
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
            <p className="mt-4 text-medium leading-relaxed">
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
            <p className="mt-1.5 text-medium">* 모바일로 간편 지원 가능</p>
          </div>

          {/* 3. 선발 프로세스 */}
          <div className="card p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <ListChecks className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-ink-900">모집 프로세스</h3>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2.5 text-sm sm:text-base font-bold text-ink-700">
              {SELECT_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-x-2">
                  <span
                    className={`px-3.5 py-2 rounded-full ${
                      i === SELECT_STEPS.length - 1
                        ? "bg-brand-600 text-white"
                        : "bg-ink-50"
                    }`}
                  >
                    {step}
                  </span>
                  {i < SELECT_STEPS.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-ink-300 shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* 적성진단 예시문제 확인 버튼 */}
            <button
              type="button"
              onClick={() => setShowAptitudeModal(true)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2"
            >
              SSAFY 적성진단 테스트 예시문제
              {/* <ChevronRight className="w-3.5 h-3.5" /> */}
            </button>

            <p className="mt-3 text-medium">
              * 세부 일정은 각 대상자에게 개별 안내됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* 적성진단 예시문제 모달 */}
      {showAptitudeModal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60"
          onClick={() => setShowAptitudeModal(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] overflow-auto rounded-2xl bg-white p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowAptitudeModal(false)}
              aria-label="닫기"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ink-50 flex items-center justify-center hover:bg-ink-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-ink-700"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img
              src="/assets/images/test.png"
              alt="적성진단 테스트 예시문제"
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-4 font-bold text-sm text-brand-600 leading-relaxed break-keep">
              * SW전공 적성진단은 삼성 SW Expert Academy(
              <a
                href="https://swexpertacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline break-all"
              >
                swexpertacademy.com
              </a>
              ) 사이트 내 난이도 2~3단계 연습문제를 참고하시기 바랍니다.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}