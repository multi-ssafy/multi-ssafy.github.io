"use client";

import { useState } from "react";
import { ChevronDown } from "@/lib/icons";

// MORE INFORMATION — 설명회 영상 + FAQ 아코디언 (싱글 오픈)

const FAQS = [
  {
    q: "지원 자격이 궁금해요",
    a: "만 29세 이하 미취업자이면서 4년제 대학 졸업(예정)자라면 전공에 관계없이 지원할 수 있습니다. (병역필 또는 면제자)",
  },
  {
    q: "비전공자도 지원할 수 있나요?",
    a: "네, 전공 무관으로 지원할 수 있습니다. 사전학습·스타트캠프 등 기초 과정부터 체계적으로 학습해 실전형 SW·AI 인재로 성장합니다.",
  },
  {
    q: "캠퍼스와 트랙은 어떻게 선택하나요?",
    a: "서울·대전·광주·구미·부울경 5개 캠퍼스 중 지원 시 선택하며, 트랙은 입과 이후 분반테스트를 거쳐 최종 확정됩니다.",
  },
  {
    q: "선발 과정은 어떻게 진행되나요?",
    a: "지원서 접수 → SW 적성진단 → 인터뷰 → 입과 순으로 진행되며, 세부 일정은 단계별 합격자에게 개별 안내됩니다.",
  },
  {
    q: "교육 중 취업지원은 어떻게 받나요?",
    a: "진로 설정부터 취업역량 강화, 1:1 맞춤 컨설팅, Job Fair, 170여 개 우대기업 연계까지 수료 이후 취업할 때까지 지원합니다.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">MORE INFORMATION</p>
          <h2 className="section-title mt-3">설명회 다시보기와 자주 묻는 질문</h2>
          <p className="section-desc">싸피에 대해서 더 궁금하다면</p>
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
          {/* <span className="absolute bottom-4 left-5 text-white font-bold text-sm sm:text-base">
            SSAFY 17기 온라인 설명회 다시보기 (예시 영상)
          </span> */}
        </a>
      </div>
        {/* FAQ 아코디언 */}
        <div className="reveal mt-14 max-w-3xl mx-auto space-y-3">
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
                  <span className="font-bold text-ink-900">{item.q}</span>
                  <ChevronDown
                    className={`faq-icon w-5 h-5 text-ink-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="faq-panel px-6 pb-5 text-sm text-ink-500 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
