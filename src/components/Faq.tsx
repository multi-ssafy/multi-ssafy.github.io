// MORE INFORMATION — 온라인 설명회 다시보기

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">MORE INFORMATION</p>
          <h2 className="section-title mt-3">설명회 다시보기</h2>
          <p className="section-desc">싸피에 대해서 더 알고싶다면? 영상으로 확인해보세요</p>
        </div>

        {/* 설명회 영상 */}
        <div className="reveal mt-14 max-w-3xl mx-auto">
          <a
            href="https://youtu.be/Uchd53qy6lk?si=tiX5wCUm9sPJhHlS"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full aspect-video rounded-3xl bg-ink-900 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.youtube.com/vi/Uchd53qy6lk/maxresdefault.jpg"
              alt="SSAFY 17기 온라인 설명회 다시보기"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
      </div>
    </section>
  );
}
