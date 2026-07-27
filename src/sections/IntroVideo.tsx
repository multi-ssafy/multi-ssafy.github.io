import { ArrowRight } from "@/lib/icons";

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
      {/* 배경 장식 (은은한 블롭) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-brand-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.ink.100)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8">
        {/* 타이틀 */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-ink-900 leading-[1.2]">
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              AI
            </span>
            를{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              SSAFY
            </span>
            에서
            <br className="hidden sm:block" /> 배워야 하는 이유!
          </h2>
          <p className="mt-5 text-base sm:text-xl font-bold text-ink-600">
            기업이 찾는 인재가 되고 싶다면?{" "}
            <span className="text-brand-600">SSAFY</span>
          </p>
        </div>

        {/* 미미미누 영상 */}
        <div className="reveal mt-10 sm:mt-12 mx-auto max-w-4xl">
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="미미미누와 함께한 SSAFY 영상 보러가기"
            className="group relative block w-full aspect-video overflow-hidden rounded-3xl bg-ink-900 shadow-card-hover ring-1 ring-black/5"
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

          {/* 영상 보러가기 링크 */}
          <p className="mt-6 text-center">
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-brand-600 transition-colors hover:text-brand-700"
            >
              미미미누와 함께한 SSAFY 영상 보러가기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
