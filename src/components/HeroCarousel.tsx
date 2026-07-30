"use client";

import { useEffect, useState } from "react";

// 메인 상단 이미지 캐러셀 (자동 롤링)
// 등장 순서: main1 → main2 → 잡페어
const SLIDES = [
  { src: "/assets/images/main/main1.png", alt: "메인 이미지 1" },
  { src: "/assets/images/main/main2.png", alt: "메인 이미지 2" },
  { src: "/assets/photos/job-fair.jpg", alt: "SSAFY 채용박람회 현장" },
];

const INTERVAL = 3500;

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
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
