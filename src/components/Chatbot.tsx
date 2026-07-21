"use client";

import { useEffect, useRef, useState } from "react";
import { XIcon } from "@/lib/icons";

// 챗봇 위젯 — 선택형 대화 흐름 (기존 main.js 이관)

type Option = {
  label: string;
  goto?: string;
  href?: string;
  external?: boolean;
  subtle?: boolean;
};

type FlowNode = {
  bot: string;
  options: Option[];
};

const flow: Record<string, FlowNode> = {
  root: {
    bot: "안녕하세요! SSAFY 안내 봇이에요 🙂\n궁금한 주제를 선택해 주세요.",
    options: [
      { label: "모집 자격 관련", goto: "eligibility" },
      { label: "AI 커리큘럼 관련", goto: "curriculum" },
      { label: "취업 정보·사이트 안내", goto: "career" },
      { label: "캠퍼스·교육 장소", goto: "campus" },
      { label: "지원 혜택", goto: "benefit" },
    ],
  },
  eligibility: {
    bot: "SSAFY 지원 자격은 다음과 같아요.\n• 만 29세 이하 미취업자\n• 4년제 대학 졸업(예정)자 · 전공 무관\n• 병역필 또는 면제자",
    options: [
      { label: "모집 일정 보기", href: "#recruit-info" },
      { label: "선발 절차가 궁금해요", goto: "process" },
      { label: "처음으로", goto: "root", subtle: true },
    ],
  },
  process: {
    bot: "선발은 이 순서로 진행돼요.\n지원서 접수 → SW 적성진단 → 인터뷰 → 입과",
    options: [
      { label: "지원하러 가기", href: "https://www.ssafy.com", external: true },
      { label: "처음으로", goto: "root", subtle: true },
    ],
  },
  curriculum: {
    bot: "AI 커리큘럼은 기초부터 실무까지 이어져요.\n• 1학기 : 기초 → 심화 (알고리즘·AI 강의)\n• 2학기 : 실전 프로젝트 (공통·특화·자율)",
    options: [
      { label: "커리큘럼 자세히 보기", href: "#curriculum" },
      { label: "나 같은 배경도 가능할까?", href: "#target" },
      { label: "처음으로", goto: "root", subtle: true },
    ],
  },
  career: {
    bot: "SSAFY 취업 성과예요.\n• 취업률 85%\n• 채용 우대기업 170여 개\n수료 이후 취업할 때까지 지원이 이어져요.",
    options: [
      { label: "취업지원 보러가기", href: "#career" },
      { label: "취업사례 보기", href: "#story" },
      { label: "SSAFY 공식 사이트", href: "https://www.ssafy.com", external: true },
      { label: "처음으로", goto: "root", subtle: true },
    ],
  },
  campus: {
    bot: "전국 5개 캠퍼스에서 동일한 수준의 교육을 운영해요.\n서울·대전·광주·구미·부울경 (지역 캠퍼스 셔틀버스 운영)",
    options: [
      { label: "캠퍼스 보러가기", href: "#campus" },
      { label: "처음으로", goto: "root", subtle: true },
    ],
  },
  benefit: {
    bot: "교육에 집중할 수 있도록 지원해요.\n• 교육지원금 월 100만원 (지역 최대 140만원)\n• GPU 인프라 · AI 전문 강사진",
    options: [
      { label: "혜택 자세히 보기", href: "#benefit" },
      { label: "처음으로", goto: "root", subtle: true },
    ],
  },
};

type Bubble = { text: string; sender: "bot" | "user" };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Bubble[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const startedRef = useRef(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  const addBubble = (text: string, sender: "bot" | "user") => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const goToNode = (key: string) => {
    const node = flow[key];
    if (!node) return;
    // 봇 응답은 살짝 지연시켜 자연스럽게
    setTimeout(() => {
      addBubble(node.bot, "bot");
      setOptions(node.options);
    }, 250);
  };

  const closePanel = () => setOpen(false);

  const openPanel = () => {
    setOpen(true);
    if (!startedRef.current) {
      startedRef.current = true;
      goToNode("root");
    }
  };

  const handleOption = (opt: Option) => {
    addBubble(opt.label, "user");
    if (opt.goto) {
      goToNode(opt.goto);
      return;
    }
    if (opt.href) {
      if (opt.external) {
        window.open(opt.href, "_blank", "noopener");
        setTimeout(() => {
          addBubble(
            "새 창에서 열었어요. 더 궁금한 점이 있으면 선택해 주세요!",
            "bot"
          );
          setOptions(flow.root.options);
        }, 250);
      } else {
        const target = document.querySelector(opt.href);
        setTimeout(() => {
          closePanel();
          if (target)
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div id="chatbot" className="fixed bottom-5 right-5 z-[60] flex flex-col items-end">
      {/* 대화 패널 */}
      <div
        id="chatbot-panel"
        className={`${
          open ? "" : "is-closed"
        } mb-3 w-[min(90vw,360px)] h-[520px] max-h-[72vh] rounded-3xl bg-white shadow-2xl border border-ink-100 flex flex-col overflow-hidden`}
        role="dialog"
        aria-label="SSAFY 안내 챗봇"
        aria-hidden={!open}
      >
        {/* 헤더 */}
        <div className="shrink-0 bg-gradient-to-br from-brand-600 to-brand-800 px-5 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">SSAFY 안내 봇</p>
              <p className="text-[11px] text-brand-100 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                궁금한 점을 골라보세요
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="채팅 닫기"
            onClick={closePanel}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 메시지 영역 */}
        <div
          ref={messagesRef}
          className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-ink-50/40"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chatbot-bubble max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line rounded-2xl ${
                m.sender === "user"
                  ? "self-end bg-brand-600 text-white rounded-br-sm"
                  : "self-start bg-white text-ink-700 border border-ink-100 rounded-bl-sm shadow-sm"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        {/* 빠른 선택지 */}
        <div className="shrink-0 px-4 py-3 border-t border-ink-100 bg-white flex flex-wrap gap-2">
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => handleOption(opt)}
              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-full border transition-colors ${
                opt.subtle
                  ? "border-ink-200 text-ink-500 bg-white hover:bg-ink-50"
                  : "border-brand-200 text-brand-700 bg-brand-50 hover:bg-brand-100"
              }`}
            >
              {opt.label}
              {opt.external && (
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 런처 버튼 */}
      <button
        type="button"
        aria-label="채팅 상담 열기"
        aria-expanded={open}
        aria-controls="chatbot-panel"
        onClick={() => (open ? closePanel() : openPanel())}
        className="relative w-14 h-14 rounded-full bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:scale-105 active:scale-100 transition-transform flex items-center justify-center"
      >
        {open ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          </svg>
        )}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-coral-500 border-2 border-white" />
      </button>
    </div>
  );
}
