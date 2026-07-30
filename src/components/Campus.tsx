"use client";

import { useRef, useState } from "react";

// CAMPUS & TRACK — 상단 중앙 탭 + 소개영상·사진·소개글·트랙 한눈에

type CampusKey = "seoul" | "daejeon" | "gwangju" | "gumi" | "buulgyeong";

type Campus = {
  key: CampusKey;
  label: string;
  name: string;
  eyebrow: string;
  desc: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imagePosition: string;
  videoId: string;
  address: string;
};

const CAMPUSES: Campus[] = [
  {
    key: "seoul",
    label: "서울",
    name: "서울 캠퍼스",
    eyebrow: "역삼 멀티캠퍼스",
    desc: "첨단 산업의 중심에서 SW·AI 인재로 성장합니다",
    tags: ["Python", "Java", "Embedded", "Data"],
    image: "/assets/images/campus-seoul.jpg",
    imageAlt: "서울 캠퍼스 대표 사진",
    imagePosition: "center center",
    videoId: "XIoPeobfuhE",
    address: "서울특별시 강남구 테헤란로 212",
  },
  {
    key: "daejeon",
    label: "대전",
    name: "대전 캠퍼스",
    eyebrow: "삼성화재 유성연수원",
    desc: "첨단 과학의 도시에서 배움과 성장을 함께합니다",
    tags: ["Python", "Java", "Data"],
    image: "/assets/images/campus-daejeon.png",
    imageAlt: "대전 캠퍼스 대표 사진",
    imagePosition: "center 70%",
    videoId: "SmNfX6bY8pk",
    address: "대전광역시 유성구 동서대로 98-39",
  },
  {
    key: "gwangju",
    label: "광주",
    name: "광주 캠퍼스",
    eyebrow: "삼성전자 광주 사업장",
    desc: "따뜻한 캠퍼스 문화와 함께 SW·AI 역량을 키워갑니다",
    tags: ["Python", "Java", "Embedded Robot"],
    image: "/assets/images/campus-gwangju.jpg",
    imageAlt: "광주 캠퍼스 대표 사진",
    imagePosition: "center center",
    videoId: "wIfu-6aYDTY",
    address: "전남광주 광산구 하남산단6번로 107",
  },
  {
    key: "gumi",
    label: "구미",
    name: "구미 캠퍼스",
    eyebrow: "삼성전자 구미 사업장",
    desc: "산업 현장과 가까운 스마트 SW·AI를 교육합니다",
    tags: ["Python", "Java", "Mobile"],
    image: "/assets/images/campus-gumi.jpg",
    imageAlt: "구미 캠퍼스 대표 사진",
    imagePosition: "center 70%",
    videoId: "02w81Tz4e5w",
    address: "경북 구미시 3공단 3로 302",
  },
  {
    key: "buulgyeong",
    label: "부울경",
    name: "부울경 캠퍼스",
    eyebrow: "삼성전기 부산 사업장",
    desc: "부산·울산·경남을 잇는 SW·AI 교육 허브입니다",
    tags: ["Python", "Java"],
    image: "/assets/images/campus-buulgyeong.jpg",
    imageAlt: "부울경 캠퍼스 대표 사진",
    imagePosition: "center center",
    videoId: "LZ9OR0uNBVo",
    address: "부산광역시 강서구 송정동 녹산산업중로 333",
  },
];

// 캠퍼스 한 곳의 콘텐츠(소개영상 + 사진 + 소개글 + 트랙) — 캐러셀 패널 단위
function CampusPanel({ campus }: { campus: Campus }) {
  return (
    <>
      {/* 소개글 (영상·사진 위 중앙 정렬) */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <p className="eyebrow justify-center">{campus.eyebrow}</p>
        <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-ink-900">
          {campus.name}
        </h3>
        <p className="mt-2 text-medium leading-relaxed">
          {campus.desc}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {campus.tags.map((t) => (
            <span key={t} className="tag bg-brand-50 text-brand-600">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* 소개영상 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-[#ff0033]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
            <span className="text-sm font-bold text-ink-700">소개영상</span>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${campus.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video rounded-2xl overflow-hidden bg-ink-900"
            aria-label={`${campus.label} 캠퍼스 소개 영상 유튜브에서 보기`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${campus.videoId}/maxresdefault.jpg`}
              alt={`${campus.label} 캠퍼스 소개 영상 썸네일`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/20" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-brand-600 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                  </svg>
                </span>
              </span>
          </a>
        </div>

        {/* 캠퍼스 전경 사진 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-brand-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm font-bold text-ink-700">
              {campus.address}
            </span>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden bg-ink-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={campus.image}
              alt={campus.imageAlt}
              className="w-full h-full object-cover"
              style={{ objectPosition: campus.imagePosition }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

type Anim = { prevKey: CampusKey; dir: 1 | -1 };

export default function Campus() {
  const [active, setActive] = useState<CampusKey>("seoul");
  const [anim, setAnim] = useState<Anim | null>(null);
  const tokenRef = useRef(0);

  const current = CAMPUSES.find((c) => c.key === active)!;
  const prev = anim ? CAMPUSES.find((c) => c.key === anim.prevKey)! : null;

  const onSelect = (key: CampusKey) => {
    if (key === active) return;
    // 모션 최소화 설정 시 즉시 전환
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(key);
      return;
    }
    if (anim) return; // 전환 중 클릭 무시
    const oldIdx = CAMPUSES.findIndex((c) => c.key === active);
    const newIdx = CAMPUSES.findIndex((c) => c.key === key);
    const dir: 1 | -1 = newIdx > oldIdx ? 1 : -1;
    const token = ++tokenRef.current;
    setAnim({ prevKey: active, dir });
    setActive(key);
    // 실제 제거는 슬라이드가 끝나는 순간(onAnimationEnd)에 수행.
    // 아래는 애니메이션 이벤트 누락 시를 대비한 안전장치.
    window.setTimeout(() => {
      if (tokenRef.current === token) setAnim(null);
    }, 700);
  };

  return (
    <section id="campus" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">CAMPUS &amp; TRACK</p>
          <h2 className="section-title mt-3">
            전국 5개 캠퍼스에서 완성되는 몰입교육
          </h2>
          <p className="section-desc">
            캠퍼스를 선택하면 운영 트랙과 교육 환경을 확인할 수 있어요
          </p>
        </div>

        {/* 중앙 상단 캠퍼스 선택 탭 (세그먼트 컨트롤) */}
        <div className="reveal mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-full bg-white border border-ink-100 shadow-card p-1.5">
            {CAMPUSES.map((c) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onSelect(c.key)}
                  className={`rounded-full px-5 sm:px-6 py-2.5 text-lg font-bold transition-colors ${
                    isActive
                      ? "bg-brand-600 text-white shadow-soft"
                      : "text-ink-600 hover:bg-ink-50"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 콘텐츠 카드: 캠퍼스 전환 시 좌우 캐러셀 모션 */}
        <div className="reveal mt-8 card p-5 sm:p-7 overflow-hidden">
          <div className="relative">
            {/* 현재(새) 패널 — 흐름에 존재하여 높이를 결정 */}
            <div
              className={
                anim ? (anim.dir === 1 ? "campus-in-fwd" : "campus-in-bwd") : ""
              }
            >
              <CampusPanel campus={current} />
            </div>

            {/* 이전 패널 — 전환 중 위에 겹쳐 반대 방향으로 빠져나감.
                슬라이드가 끝나 화면 밖으로 완전히 나간 순간 제거된다. */}
            {anim && prev && (
              <div
                aria-hidden="true"
                onAnimationEnd={() => setAnim(null)}
                className={`absolute inset-0 ${
                  anim.dir === 1 ? "campus-out-fwd" : "campus-out-bwd"
                }`}
              >
                <CampusPanel campus={prev} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}