// 학습 로드맵 — 1년(12개월) 성장 여정: 6개월씩 두 학기로 구성
import { type ReactNode } from "react";

type Step = {
  title: string;
  desc: ReactNode;
  fair?: boolean;
};

type Group = { label: string; steps: Step[] };

const GROUPS: Group[] = [
  {
    label: "6개월",
    steps: [
      {
        title: "1학기 기본과정",
        desc: (
          <ul className="space-y-1">
            <li className="flex gap-1.5">
              <span aria-hidden>·</span>
              <span>AI기초 &amp; 알고리즘 중심교육</span>
            </li>
            <li className="flex gap-1.5">
              <span aria-hidden>·</span>
              <span>SW 전공자부터 AI 노베이스까지 문제없는 수준별 분반 운영</span>
            </li>
          </ul>
        ),
      },
      {
        title: "1차 Job Fair",
        desc: "취업역량 향상 집중교육과 개인별 취업지원 서비스 제공",
        fair: true,
      },
    ],
  },
  {
    label: "6개월",
    steps: [
      {
        title: "2학기 심화과정",
        desc: "AI 프로젝트 기반 자기주도 학습, 실무와 동일한 개발 방식 활용",
      },
      {
        title: "2차 Job Fair",
        desc: "채용 박람회 개최와 개인별 맞춤형 경력 설계·취업지원",
        fair: true,
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">ROADMAP</p>
          <h2 className="section-title mt-3">1년의 학습 로드맵</h2>
          <p className="section-desc">
            취업까지 12개월 성장 여정을 함께해요
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {GROUPS.map((group, gi) => (
            <div key={gi}>
              {/* 6개월 헤더 바 */}
              <div className="rounded-xl bg-brand-600 py-2.5 text-center text-base font-bold text-white shadow-soft">
                {group.label}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {group.steps.map((s, si) => {
                  const num = gi * 2 + si + 1;
                  return (
                    <div
                      key={s.title}
                      className="card p-5 sm:p-6 h-full hover:shadow-card-hover hover:-translate-y-1"
                    >
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white ${
                          s.fair ? "bg-coral-500" : "bg-brand-600"
                        }`}
                      >
                        {num}
                      </span>
                      <h3 className="mt-4 text-base sm:text-lg font-extrabold text-ink-900 break-keep">
                        {s.title}
                      </h3>
                      <div className="mt-2 text-sm leading-relaxed break-keep">
                        {s.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
