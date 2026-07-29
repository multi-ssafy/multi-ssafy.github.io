"use client";

import { useEffect, useState } from "react";

// 하단 플로팅 알림신청 CTA 바
// - 섹션 네비(#recruit-info 통과 시점)와 동일하게 등장, 그 이전엔 아래로 숨김
// - PC: 하단 중앙 플로팅(우측 챗봇과 겹치지 않음)
// - 모바일: 하단 전체 폭. 챗봇은 CSS로 바 위로 올림(body.apply-bar-visible)
export default function FloatingApplyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById("intro-message");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("apply-bar-visible", show);
    return () => document.body.classList.remove("apply-bar-visible");
  }, [show]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center sm:px-4">
      <div
        className={`pointer-events-auto flex w-full items-center justify-between gap-3 rounded-none bg-ink-900/90 px-4 py-3.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 ease-out sm:mb-6 sm:w-auto sm:max-w-3xl sm:gap-8 sm:rounded-2xl sm:px-6 ${
          show ? "translate-y-0" : "translate-y-[135%]"
        }`}
      >
        <p className="min-w-0 truncate text-[13px] font-bold text-white sm:text-base">
          모집이 시작되면 바로 알려드려요 <span aria-hidden="true">🔔</span>
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("ssafy:notify-open"))}
          className="btn-glow inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700 sm:px-6"
        >
          알림 신청
        </button>
      </div>
    </div>
  );
}
