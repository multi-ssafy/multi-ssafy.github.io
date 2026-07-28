"use client";

import { useEffect, useState } from "react";
import { APPLY_URL } from "@/data/site";
import { ArrowUpRight } from "@/lib/icons";

// 섹션 바로가기 네비게이션 (스크롤 스파이)
// 모집 핵심정보와 '나도 가능할까?' 사이에 배치되어, 그 지점부터 상단에 고정된다.
// (position: sticky 이므로 그 윗부분에서는 나타나지 않음)

// id = 클릭 시 이동할 대표 섹션, spy = 이 항목이 활성화되는 섹션들(끊김 없는 하이라이트)
const NAV = [
  { id: "intro", label: "SSAFY 소개", spy: ["intro", "target", "why"] },
  { id: "curriculum", label: "AI 커리큘럼", spy: ["curriculum"] },
  { id: "project", label: "프로젝트", spy: ["project"] },
  { id: "career", label: "취업지원", spy: ["career", "story"] },
  { id: "campus", label: "캠퍼스", spy: ["campus"] },
  { id: "apply", label: "모집안내", spy: ["apply", "faq", "recruit-alert"] },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    // 관찰 섹션 id → 네비 항목 id 매핑
    const sectionToNav = new Map<string, string>();
    NAV.forEach((n) => n.spy.forEach((sid) => sectionToNav.set(sid, n.id)));

    const sections = [...sectionToNav.keys()]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          // 화면 상단에 가장 가까운 섹션을 활성 처리
          visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          const navId = sectionToNav.get(visible[0].target.id);
          if (navId) setActive(navId);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 border-y border-ink-100 bg-white/90 backdrop-blur-md">
      <div className="max-w-content mx-auto px-2 sm:px-8 flex items-center gap-2">
        <ul className="flex-1 min-w-0 flex items-center justify-start sm:justify-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id} className="shrink-0">
                <a
                  href={`#${n.id}`}
                  className={`relative flex items-center px-3 sm:px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-brand-600"
                      : "text-ink-500 hover:text-ink-900"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute inset-x-3 sm:inset-x-5 bottom-0 h-0.5 rounded-full bg-brand-600 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* 지원하기 버튼 (반짝임) */}
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener"
          className="btn-glow shrink-0 inline-flex items-center gap-1 rounded-lg bg-brand-600 px-4 sm:px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-700"
        >
          지원하기
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
