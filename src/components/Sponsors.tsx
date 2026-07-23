// 후원 기관 로고 영역 (푸터 대체)
// ─────────────────────────────────────────────────────────────
// 실제 로고를 넣는 방법:
//   1) 로고 이미지를 public/assets/logo/sponsors/ 에 넣고
//   2) 아래 SPONSORS 배열에 { src, alt } 를 추가하면
//      플레이스홀더 대신 실제 로고가 렌더링됩니다.
// (배열이 비어 있으면 자리표시용 점선 박스가 표시됩니다.)

const SPONSORS: { src: string; alt: string }[] = [
  // 예) { src: "/assets/logo/sponsors/samsung.png", alt: "삼성전자" },
];

// 자리표시 박스 개수 (실제 로고가 없을 때만 표시)
const PLACEHOLDER_COUNT = 4;

export default function Sponsors() {
  return (
    <section className="py-16 md:py-20 border-t border-ink-100 bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-8 text-center">
        <p className="text-sm font-bold tracking-wide text-ink-400">
          함께하는 후원 기관
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {SPONSORS.length > 0
            ? SPONSORS.map((s) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              ))
            : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 w-32 sm:w-36 rounded-xl border-2 border-dashed border-ink-200 flex items-center justify-center text-xs font-semibold text-ink-300"
                >
                  로고
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
