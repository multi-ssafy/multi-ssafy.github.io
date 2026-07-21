"use client";

import { useEffect } from "react";

/**
 * 전역 스크롤 인터랙션 초기화 (기존 js/main.js의 reveal·counter·bar chart 이관).
 * 클라이언트에서 마운트 후 IntersectionObserver를 설정한다.
 */
export default function RevealInit() {
  useEffect(() => {
    /* ---------- 스크롤 리빌 애니메이션 ---------- */
    const revealEls = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.in-view)"
    );
    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => revealObserver!.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }

    /* ---------- 취업률 카운터 애니메이션 ---------- */
    const counterEl = document.querySelector<HTMLElement>("[data-counter]");
    let counterObserver: IntersectionObserver | undefined;
    if (counterEl && "IntersectionObserver" in window) {
      const target = parseInt(counterEl.dataset.target || "0", 10) || 0;
      const suffix = counterEl.querySelector("span")?.outerHTML || "";
      let animated = false;
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animated) {
              animated = true;
              const duration = 1200;
              const start = performance.now();
              const step = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(target * eased);
                counterEl.innerHTML = value + suffix;
                if (progress < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }
          });
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(counterEl);
    }

    /* ---------- 취업률 바 차트 애니메이션 ---------- */
    const barChart = document.getElementById("bar-chart");
    let barObserver: IntersectionObserver | undefined;
    if (barChart && "IntersectionObserver" in window) {
      barObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target
                .querySelectorAll<HTMLElement>("[data-bar]")
                .forEach((bar) => {
                  bar.classList.remove("scale-y-0");
                  bar.classList.add("scale-y-100");
                });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      barObserver.observe(barChart);
    }

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      barObserver?.disconnect();
    };
  }, []);

  return null;
}
