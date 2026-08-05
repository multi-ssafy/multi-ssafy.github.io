"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "@/lib/icons";

// MORE INFORMATION — 설명회 다시보기 + 자주 묻는 질문(FAQ)

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "SW 경험이 전혀 없는데 지원 가능한가요?",
    a: (
      <div className="space-y-2">
        <p>
          대학교 SW 전공자뿐만 아니라 비전공자, 마이스터고 졸업자도 지원
          가능합니다.
        </p>
        <p>개인별 SW역량을 고려하여 분반 교육을 실시합니다.</p>
      </div>
    ),
  },
  {
    q: "교육 도중에 취업이 되면 어떻게 되나요?",
    a: (
      <div className="space-y-2">
        <p>
          본 교육 과정의 가장 중요한 목적은 취업 경쟁력 제고이므로, 교육
          중에라도 희망하는 기업에 취업을 해도 됩니다.
        </p>
        <p>
          교육기간 중 취업에 성공하여 해당 기업에 입사할 경우 입사일 전에 본
          과정은 퇴소를 하게 되며, 이로 인한 교육지원비 반환 등의 불이익은
          없습니다.
        </p>
      </div>
    ),
  },
  {
    q: "교육 장소(지역)는 어떻게 결정되나요?",
    a: (
      <div className="space-y-2">
        <p>
          교육은 전국의 취업 준비생에게 기회를 제공하고, 지역별로 한정된 교육
          인프라를 효율적으로 활용하기 위해{" "}
          <b className="font-semibold text-ink-700">
            서울, 대전, 광주, 구미, 부울경(부산) 5개 지역
          </b>
          에서 실시하며, 지원서 작성 시 희망 지역을 선택할 수 있습니다.
        </p>
        <p>
          지역 배정은 1지망을 우선 고려하되, 지역별 선발규모에 따라 2지망 혹은
          3지망으로 배정될 수도 있습니다.
        </p>
        <p>
          다만, 마이스터고 졸업(예정)자 대상 과정은 서울 캠퍼스에서만
          진행됩니다.
        </p>
      </div>
    ),
  },
  {
    q: "선발 프로세스는 어떻게 되나요?",
    a: (
      <div className="space-y-3">
        <p>
          지원서 접수 후 SSAFY 적성진단이 실시되며, 이후 인터뷰를 거쳐 교육생으로
          최종 선발됩니다.
        </p>
        <p className="font-semibold text-ink-700 break-keep">
          지원서 접수 → SSAFY 적성진단 → 인터뷰 → 입과 및 교육
        </p>
        <p>
          ※ SSAFY 적성진단은 지원서상 선택한 학력/전공 기준으로 구분하여
          실시합니다.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <b className="font-semibold text-ink-700">
              SSAFY 적성진단(SW전공)
            </b>{" "}
            : 기초 코딩테스트를 통한 기본적인 SW역량 확인
          </li>
          <li>
            <b className="font-semibold text-ink-700">
              SSAFY 적성진단(SW비전공·마이스터고)
            </b>{" "}
            : SW·AI 학습에 필요한 기초 논리 역량 확인 (기초 논리 테스트
            1(객관식), 기초 논리 테스트 2(주관식))
          </li>
        </ul>
        <p className="text-ink-400">
          * SW적성진단은 ‘SSAFY 적성진단’으로 명칭이 변경되었으며, 문항 출제
          유형은 동일합니다.
        </p>
      </div>
    ),
  },
  {
    q: "현재 재직 중이거나 취업 이력이 있어도 지원 가능한가요?",
    a: (
      <div className="space-y-2">
        <p>
          현재 미취업상태로 더 간절하게 취업을 준비하는 분들에게 우선적으로 교육
          기회를 제공하고자 재직자의 지원을 제한하고 있습니다. (아르바이트,
          인턴의 경우 개별 확인 필요 — 사무국 문의)
        </p>
        <p className="text-ink-800">
          * 졸업예정자의 경우 재직여부 무관 지원 가능
        </p>
        <p className="text-ink-800">
          * 취업 이력이 있더라도 본 과정 인터뷰일(12월 예정) 기준 재직자가
          아니라면 지원 가능
        </p>
      </div>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">MORE INFORMATION</p>
          <h2 className="section-title mt-3">설명회 다시보기</h2>
          <p className="section-desc">싸피에 대해서 더 알고싶다면? 영상으로 확인해보세요</p>
        </div>

        {/* 설명회 영상 */}
        <div className="reveal mt-14 max-w-3xl mx-auto">
          <a
            href="https://youtu.be/Uchd53qy6lk?si=tiX5wCUm9sPJhHlS"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full aspect-video rounded-3xl bg-ink-900 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.youtube.com/vi/Uchd53qy6lk/maxresdefault.jpg"
              alt="SSAFY 17기 온라인 설명회 다시보기"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-brand-600 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </span>
            </span>
          </a>
        </div>

        {/* 자주 묻는 질문 */}
        <div className="reveal mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="eyebrow justify-center">FAQ</p>
            <h3 className="section-title mt-3">자주 묻는 질문</h3>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="faq-item card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="faq-trigger w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold break-keep">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`faq-icon w-5 h-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-panel px-6 pb-5 text-sm leading-relaxed break-keep">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
