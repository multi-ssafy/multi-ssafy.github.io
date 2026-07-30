"use client";

import { useEffect, useState } from "react";

// 메인 상단 이미지 캐러셀 (자동 롤링)
// ※ 임시 placeholder 사진 — 실제 메인 이미지로 교체 예정
const SLIDES = [
  { src: "/assets/photos/job-fair.jpg", alt: "SSAFY 채용박람회 현장" },
  { src: "/assets/photos/career-session.jpg", alt: "취업 실전 교육 현장" },
  { src: "/assets/photos/consulting.jpg", alt: "1:1 취업 상담·컨설팅 모습" },
];

const INTERVAL = 3500;

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* 슬라이드 트랙 */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {SLIDES.map((s, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={s.src}
            alt={s.alt}
            className="h-[200px] w-full shrink-0 object-cover sm:h-[260px] lg:h-[300px]"
          />
        ))}
      </div>

      {/* 하단 페이드 (사진 밑을 흐려서 콘텐츠와 자연스럽게 연결) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />

      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`${idx + 1}번째 이미지 보기`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-5 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
