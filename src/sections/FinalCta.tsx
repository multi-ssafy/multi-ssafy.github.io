"use client";

import { APPLY_URL } from "@/data/site";

// 최종 CTA — 17기 모집 알림 신청 (데모 폼)

export default function FinalCta() {
  return (
    <section
      id="recruit-alert"
      className="scroll-mt-20 py-24 md:py-32 bg-ink-950 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-brand-800/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-coral-900/25 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-2xl mx-auto px-5 text-center reveal">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          차세대 SW·AI 인재로
          <br />
          성장할 준비가 되셨나요?
        </h2>
        <p className="mt-4 text-ink-300">
          17기 모집 소식을 가장 먼저 받아보세요.
        </p>

        <form
          className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="alert-email" className="sr-only">
            이메일 주소
          </label>
          <input
            id="alert-email"
            type="email"
            required
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 rounded-full px-5 py-3.5 text-sm bg-white/10 text-white placeholder:text-ink-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button type="submit" className="btn-primary shrink-0">
            17기 모집 알림 신청
          </button>
        </form>
        <p className="mt-4 text-xs text-ink-500">
          ※ 신청 폼은 데모용이며, 실제 알림 연동은 추후 설정 예정입니다.
        </p>
        <p className="mt-6 text-sm text-ink-300">
          모집 기간이라면 지금 바로{" "}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener"
            className="font-bold text-white hover:text-brand-300 underline underline-offset-4"
          >
            SSAFY 지원하기 →
          </a>
        </p>
      </div>
    </section>
  );
}
