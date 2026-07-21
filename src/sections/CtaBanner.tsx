import { ArrowRight } from "@/lib/icons";
import NotifyButton from "@/components/NotifyButton";

// CTA 배너 — SSAFY에서 나의 SW·AI 커리어를 시작해보세요

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="reveal rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 md:py-16 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
            SSAFY에서 나의 SW·AI 커리어를 시작해보세요
          </h3>
          <p className="mt-3 text-brand-100">
            모집 일정이 확정되면 가장 먼저 안내해드립니다.
          </p>
          <NotifyButton className="btn-white mt-7 inline-flex">
            17기 모집 알림 신청 <ArrowRight className="w-4 h-4" />
          </NotifyButton>
        </div>
      </div>
    </section>
  );
}
