"use client";

import { useState } from "react";
import { ChevronRight, ArrowRight } from "@/lib/icons";

// PROJECT — 단계별 프로젝트 우수사례 (관통 · 공통 · 특화 · 자율) 캐러셀
// 캠퍼스처럼 좌우로 넘겨보며 살펴볼 수 있는 구조

type Stage = {
  key: string;
  step: string;
  title: string;
  desc: string;
  tags: string[];
  // 우수사례 (임시 예시 — 실제 사례로 교체 예정)
  caseTitle: string;
  caseDesc: string;
};

const STAGES: Stage[] = [
  {
    key: "관통",
    step: "STAGE 01",
    title: "1학기 프로젝트",
    desc: "과목별 학습 내용을 기능 단위로 구현하며\n하나의 어플리케이션을 점진적으로 완성하는 팀 프로젝트입니다.",
    tags: [],
    caseTitle: "생성형 AI를 접목한 일정 관리 서비스",
    caseDesc:
      "학습한 알고리즘과 생성형 AI API를 결합해 기능 단위로 완성한 관통 프로젝트 우수사례. (예시)",
  },
  {
    key: "공통",
    step: "STAGE 02",
    title: "2학기 1차 프로젝트",
    desc: "비전공자·전공자가 한 팀으로 구성되어 AI 기술을 접목한 서비스를 구현합니다.",
    tags: ["웹 기술", "웹 디자인", "AIoT", "모바일"],
    caseTitle: "실시간 협업 화이트보드",
    caseDesc:
      "WebSocket 기반 실시간 통신에 AI 요약 기능을 더한 팀 협업 서비스. (예시)",
  },
  {
    key: "특화",
    step: "STAGE 03",
    title: "2학기 2차 프로젝트",
    desc: "관심 있는 특화 도메인을 익히고, \n도메인별 AI 기술을 접목한 프로젝트를 구현합니다.",
    tags: ["인공지능", "빅데이터", "블록체인", "자율주행","메타버스 게임","핀테크"],
    caseTitle: "AI 기반 이상거래 탐지 핀테크",
    caseDesc:
      "대규모 거래 데이터를 학습해 이상 패턴을 실시간 탐지하는 특화 도메인 프로젝트. (예시)",
  },
  {
    key: "자율",
    step: "STAGE 04",
    title: "2학기 3차 프로젝트",
    desc: "아이디어 기획부터 명세 작성까지 스스로, \n다양한 AI 기술을 활용해 나만의 포트폴리오를 완성합니다.",
    tags: ["자유주제", "기업연계", "오픈소스", "창업희망"],
    caseTitle: "창업으로 이어진 AI 헬스케어 앱",
    caseDesc:
      "자유 주제로 기획·개발해 실제 창업 아이템으로 발전시킨 자율 프로젝트. (예시)",
  },
];

export default function Project() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  const go = (dir: number) =>
    setActive((v) => (v + dir + STAGES.length) % STAGES.length);

  return (
    <section id="project" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">PROJECT</p>
          <h2 className="section-title mt-3">프로젝트 우수사례</h2>
          <p className="section-desc">
            기본부터 심화까지, 단계별 프로젝트로 빈틈없는 실전 역량을 쌓아요
          </p>
        </div>

        {/* 단계 탭 */}
        <div className="reveal mt-12 flex items-center justify-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STAGES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-4 sm:px-5 py-2.5 text-sm font-bold transition-colors ${
                i === active
                  ? "bg-brand-600 text-white shadow-soft"
                  : "bg-ink-50 text-ink-500 hover:bg-ink-100"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* 슬라이드 패널 */}
        <div className="reveal mt-8 relative">
          <article
            key={active}
            className="card overflow-hidden animate-fade-up"
          >
            <div className="grid lg:grid-cols-2">
              {/* 우수사례 비주얼 (임시 플레이스홀더) */}
              <div className="relative min-h-[240px] lg:min-h-[360px] bg-gradient-to-br from-brand-600 to-brand-800 flex flex-col justify-end p-8 text-white overflow-hidden">
                <div className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl" />
                <span className="absolute top-6 left-8 text-7xl sm:text-8xl font-black text-white/10 select-none">
                  {active + 1}
                </span>
                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    우수사례
                  </span>
                  <h3 className="mt-3 text-xl sm:text-2xl font-extrabold leading-snug">
                    {stage.caseTitle}
                  </h3>
                  <p className="mt-2 text-medium leading-relaxed">
                    {stage.caseDesc}
                  </p>
                </div>
              </div>

              {/* 단계 설명 */}
              <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-center">
                <p className="text-xs font-bold tracking-wide text-brand-600">
                  {stage.step}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-ink-900 break-keep">
                  {stage.title} : {stage.key} 프로젝트
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {stage.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stage.tags.map((t) => (
                    <span key={t} className="tag bg-brand-50 text-brand-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* 좌우 이동 */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="이전 단계"
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-card ring-1 ring-ink-100 flex items-center justify-center text-ink-600 hover:text-brand-600 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="다음 단계"
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-card ring-1 ring-ink-100 flex items-center justify-center text-ink-600 hover:text-brand-600 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 인디케이터 */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {STAGES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${s.title} 보기`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-brand-600" : "w-2 bg-ink-200"
              }`}
            />
          ))}
        </div>

        {/* 프로젝트 더 보러가기 */}
        <div className="reveal text-center mt-10">
          <a
            href="https://gallery.ssafy.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            프로젝트 더 보러가기 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
