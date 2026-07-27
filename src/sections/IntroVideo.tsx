import { ChevronDown } from "@/lib/icons";

// SSAFY 소개 인트로 — 미미미누와 함께한 SSAFY 영상 (SSAFY 소개 섹션의 시작점)
// 영상은 서울 캠퍼스 소개에 쓰인 것과 동일 (videoId: BSFhTq6AxPY)
const VIDEO_ID = "BSFhTq6AxPY";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

export default function IntroVideo() {
  return (
    <section
      id="intro"
      className="scroll-mt-16 relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-brand-50/70 via-brand-50/20 to-white"
    >
      {/* 배경 장식 (은은한 블롭 + 도트 패턴) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-brand-100 opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.ink.100)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8">
        {/* 뒤 희미한 SSAFY 워터마크 + 타이틀 (타이틀이 워터마크 하단과 맞닿게) */}
        <div className="reveal mx-auto max-w-4xl text-center">
          <span
            aria-hidden="true"
            className="block select-none font-black leading-[0.75] tracking-tighter text-brand-600/[0.07] text-[24vw] md:text-[12rem]"
          >
            SSAFY
          </span>
          <h2 className="relative -mt-[0.25em] break-keep text-2xl leading-snug tracking-wide text-ink-900 sm:text-4xl md:text-5xl font-black">
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              AI
            </span>
            를{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              SSAFY
            </span>
            에서 배워야 하는 이유!
          </h2>
          {/* <p className="mt-6 text-base font-bold tracking-wide text-ink-600 sm:mt-7 sm:text-xl">
            기업이 찾는 인재가 되고 싶다면?{" "}
            <span className="text-brand-600">SSAFY</span>
          </p> */}
        </div>

        {/* 미미미누 영상 */}
        <div className="reveal mx-auto mt-14 max-w-4xl sm:mt-16">
          {/* 영상 안내 (메인 문구 · 링크 아님) */}
          <div className="mb-7 text-center sm:mb-8">
            <p className="text-xl font-black tracking-wide text-ink-900 sm:text-3xl">
              미미미누와 함께한{" "}
              <span className="text-brand-600">SSAFY</span> 영상 보러가기
            </p>
            <ChevronDown className="mx-auto mt-4 h-7 w-7 animate-bounce text-brand-600" />
          </div>

          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="미미미누와 함께한 SSAFY 영상 보러가기"
            className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-ink-900 shadow-card-hover ring-1 ring-black/5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="미미미누와 함께한 SSAFY 영상"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                <svg
                  className="ml-1 h-8 w-8 text-brand-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
