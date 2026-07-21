"use client";

import { useEffect, useState } from "react";
import { XIcon } from "@/lib/icons";

// 사전 알림 신청 모달 (데모)
// - 이름 · 전화번호 · 이메일 입력 + 검증
// - 필수 동의 2개(개인정보 수집·이용 / 제3자 제공)
// - 제출 시 완료 화면 (실제 저장·전송은 하지 않는 데모)
// 페이지에 한 번만 마운트하고, NotifyButton이 발생시키는 이벤트로 열린다.

export default function NotificationModal() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [showErr, setShowErr] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("ssafy:notify-open", onOpen);
    return () => window.removeEventListener("ssafy:notify-open", onOpen);
  }, []);

  const close = () => {
    setOpen(false);
    // 닫힌 뒤 폼 초기화
    setTimeout(() => {
      setDone(false);
      setName("");
      setPhone("");
      setEmail("");
      setAgree1(false);
      setAgree2(false);
      setShowErr(false);
    }, 200);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const nameOk = name.trim().length > 0;
  const phoneOk = /^01[016789][-\s]?\d{3,4}[-\s]?\d{4}$/.test(phone.trim());
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const consentOk = agree1 && agree2;
  const valid = nameOk && phoneOk && emailOk && consentOk;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) {
      setShowErr(true);
      return;
    }
    setDone(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="17기 모집 사전 알림 신청"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-3xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="shrink-0 flex items-center justify-between px-6 py-5 border-b border-ink-100">
          <div>
            <p className="text-xs font-bold text-brand-600">SSAFY 17기</p>
            <h3 className="text-lg font-extrabold text-ink-900">
              사전 알림 신청
            </h3>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="w-9 h-9 rounded-full hover:bg-ink-100 flex items-center justify-center text-ink-500"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {done ? (
          // 완료 화면
          <div className="p-8 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h4 className="mt-5 text-xl font-extrabold text-ink-900">
              신청이 완료되었어요
            </h4>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              17기 모집이 시작되면 입력하신 연락처로
              <br />
              가장 먼저 안내해 드릴게요.
            </p>
            <p className="mt-4 text-xs text-ink-400">
              ※ 데모 화면으로, 입력하신 정보는 저장·전송되지 않습니다.
            </p>
            <button
              type="button"
              onClick={close}
              className="btn-primary w-full mt-6"
            >
              확인
            </button>
          </div>
        ) : (
          // 입력 폼
          <form onSubmit={submit} className="p-6 overflow-y-auto">
            <p className="text-sm text-ink-500 leading-relaxed">
              모집 일정이 확정되면 사전 알림을 보내드려요. 아래 정보를 입력해
              주세요.
            </p>

            {/* 이름 */}
            <div className="mt-5">
              <label
                htmlFor="notify-name"
                className="block text-sm font-bold text-ink-700 mb-1.5"
              >
                이름
              </label>
              <input
                id="notify-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
              {showErr && !nameOk && (
                <p className="mt-1.5 text-xs text-coral-500">
                  이름을 입력해 주세요.
                </p>
              )}
            </div>

            {/* 전화번호 */}
            <div className="mt-4">
              <label
                htmlFor="notify-phone"
                className="block text-sm font-bold text-ink-700 mb-1.5"
              >
                전화번호
              </label>
              <input
                id="notify-phone"
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-1234-5678"
                className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
              {showErr && !phoneOk && (
                <p className="mt-1.5 text-xs text-coral-500">
                  올바른 휴대폰 번호를 입력해 주세요.
                </p>
              )}
            </div>

            {/* 이메일 */}
            <div className="mt-4">
              <label
                htmlFor="notify-email"
                className="block text-sm font-bold text-ink-700 mb-1.5"
              >
                이메일
              </label>
              <input
                id="notify-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@ssafy.com"
                className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
              {showErr && !emailOk && (
                <p className="mt-1.5 text-xs text-coral-500">
                  올바른 이메일 주소를 입력해 주세요.
                </p>
              )}
            </div>

            {/* 필수 동의 */}
            <div className="mt-5 rounded-2xl bg-ink-50/70 border border-ink-100 p-4 space-y-3">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree1}
                  onChange={(e) => setAgree1(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-brand-600 shrink-0"
                />
                <span className="text-sm text-ink-700 leading-snug">
                  <span className="font-bold text-coral-500">(필수)</span>{" "}
                  개인정보 수집·이용 동의
                </span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree2}
                  onChange={(e) => setAgree2(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-brand-600 shrink-0"
                />
                <span className="text-sm text-ink-700 leading-snug">
                  <span className="font-bold text-coral-500">(필수)</span>{" "}
                  제3자 제공 동의
                </span>
              </label>
              <p className="text-[11px] text-ink-400 leading-relaxed pt-1">
                수집 항목: 이름·전화번호·이메일 · 이용 목적: 17기 모집 사전 알림
                안내 · 보유기간: 알림 발송 후 즉시 파기. 동의를 거부할 수 있으며,
                이 경우 사전 알림 신청이 제한됩니다.
              </p>
              {showErr && !consentOk && (
                <p className="text-xs text-coral-500">
                  필수 동의 항목에 모두 동의해 주세요.
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full mt-5">
              신청하기
            </button>
            <p className="mt-3 text-xs text-ink-400 text-center">
              ※ 데모 화면으로, 입력하신 정보는 저장·전송되지 않습니다.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
