"use client";

import { useState } from "react";

// CAMPUS & TRACK — 캠퍼스 선택 탭 + 소개 영상 + 상세 패널

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
};

const CAMPUSES: Campus[] = [
  {
    key: "seoul",
    label: "서울",
    name: "서울 캠퍼스",
    eyebrow: "역삼 멀티캠퍼스",
    desc: "첨단 산업의 중심에서 SW·AI 인재로 성장합니다",
    tags: ["Python", "Java", "Data"],
    image: "/assets/images/campus-seoul.jpg",
    imageAlt: "서울 캠퍼스 대표 사진",
    imagePosition: "center center",
    videoId: "BSFhTq6AxPY",
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
  },
];

export default function Campus() {
  const [active, setActive] = useState<CampusKey>("seoul");
  const [fading, setFading] = useState(false);

  const current = CAMPUSES.find((c) => c.key === active)!;

  const onSelect = (key: CampusKey) => {
    if (key === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(key);
      setFading(false);
    }, 150);
  };

  return (
    <section id="campus" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
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

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
          {/* 캠퍼스 소개 영상 */}
          <div className="reveal card p-7 sm:p-8">
            <p className="eyebrow">CAMPUS VIDEO</p>
            <h3 className="mt-2 text-xl font-extrabold text-ink-900">
              캠퍼스 소개 영상
            </h3>

            <a
              href={`https://www.youtube.com/watch?v=${current.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video rounded-2xl overflow-hidden bg-ink-900 mt-5"
              aria-label={`${current.label} 캠퍼스 소개 영상 유튜브에서 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${current.videoId}/maxresdefault.jpg`}
                alt={`${current.label} 캠퍼스 소개 영상 썸네일`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/20" />
              <span className="absolute inset-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/icons/youtube-logo.svg"
                  alt="YouTube에서 영상 보기"
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: "70px",
                    height: "auto",
                    filter: "drop-shadow(0 10px 18px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </span>
            </a>

            {/* 캠퍼스 선택 탭 */}
            <div className="mt-6 grid grid-cols-5 gap-2">
              {CAMPUSES.map((c) => {
                const isActive = c.key === active;
                return (
                  <button
                    key={c.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => onSelect(c.key)}
                    className={`campus-tab tag justify-center !py-2.5 w-full ${
                      isActive
                        ? "bg-brand-600 text-white"
                        : "bg-white text-ink-600 border border-ink-200"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 캠퍼스 상세 패널 */}
          <div className="reveal card p-7 sm:p-8">
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-ink-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.imageAlt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  fading ? "opacity-0" : ""
                }`}
                style={{ objectPosition: current.imagePosition }}
              />
            </div>

            <div>
              <p className="eyebrow">{current.eyebrow}</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink-900">
                {current.name}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{current.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.tags.map((t) => (
                  <span key={t} className="tag bg-brand-50 text-brand-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
