// 후원 기관 로고 영역 (푸터 대체)
// ─────────────────────────────────────────────────────────────
// 로고 교체/추가 방법:
//   1) 로고 이미지를 public/assets/logo/sponsors/ 에 넣고
//   2) 아래 SPONSORS 배열에 { src, alt } 를 추가하면 됩니다.
//   3) 로고 비율에 따라 개별 높이가 다르므로 className 으로 미세 조정합니다.
//      (정사각형/세로형 로고는 높게, 가로형 로고는 낮게)

const SPONSORS: { src: string; alt: string; className?: string }[] = [
  {
    src: "/assets/logo/sponsors/moel.png",
    alt: "고용노동부",
    className: "h-14 sm:h-16",
  },
  {
    src: "/assets/logo/sponsors/children-future.webp",
    alt: "아이들과미래재단",
    className: "h-8 sm:h-9",
  },
  {
    src: "/assets/logo/sponsors/ja-korea.png",
    alt: "JA Korea",
    className: "h-10 sm:h-12",
  },
];

export default function Sponsors() {
  return (
    <section className="py-16 md:py-20 border-t border-ink-100 bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-8 text-center">
        <p className="text-sm font-bold tracking-wide text-ink-400">
          함께하는 후원 기관
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {SPONSORS.map((s) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className={`w-auto object-contain ${s.className ?? "h-10 sm:h-12"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
