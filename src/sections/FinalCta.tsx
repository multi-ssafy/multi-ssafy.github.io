import { APPLY_URL } from "@/data/site";
import NotifyButton from "@/components/NotifyButton";

// 최종 CTA — 17기 모집 알림 신청 (모달 트리거)

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

        <div className="mt-9">
          <NotifyButton className="btn-primary text-base !px-8 !py-4">
            17기 모집 알림 신청
          </NotifyButton>
        </div>
        {/* <p className="mt-4 text-xs text-ink-500">
          ※ 사전 알림 신청은 데모 화면이며, 입력하신 정보는 저장·전송되지
          않습니다.
        </p> */}
        <p className="mt-6 text-sm text-ink-300">
          지금 바로{" "}
          <a
            href="https://ssafy.com/ksp/jsp/swp/apply/swpApplyProcess.jsp"
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
