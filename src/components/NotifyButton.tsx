"use client";

import type { ReactNode } from "react";

// 사전 알림 신청 모달을 여는 공용 트리거 버튼.
// 여러 위치(헤더·CTA배너·최종 CTA)에서 동일한 모달을 연다.

export function openNotify() {
  window.dispatchEvent(new Event("ssafy:notify-open"));
}

export default function NotifyButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openNotify();
      }}
    >
      {children}
    </button>
  );
}
