// CAREER STORY — 나와 비슷한 출발점의 취업사례 (4개 카드)

type Story = {
  photo: string;
  photoAlt: string;
  badge: string;
  badgeClass: string;
  campus: string;
  title: React.ReactNode;
  logo: string;
  logoAlt: string;
  logoWrapClass: string;
  role: string;
  delay?: string;
};

const STORIES: Story[] = [
  {
    photo: "/assets/photos/story-gwangju.jpg",
    photoAlt: "광주캠퍼스 12기 수료생",
    badge: "전공자",
    badgeClass: "tag bg-brand-50 text-brand-600",
    campus: "광주캠퍼스 12기 수료",
    title: (
      <>
        생성형 AI 활용에서
        <br />
        서비스 성능 개선까지
      </>
    ),
    logo: "/assets/logo/companies/kb-data-system.png",
    logoAlt: "KB데이타시스템",
    logoWrapClass: "h-4 flex items-center",
    role: "신기술사업부 재직",
  },
  {
    photo: "/assets/photos/story-seoul.jpg",
    photoAlt: "서울캠퍼스 12기 수료생",
    badge: "비전공자",
    badgeClass: "tag bg-coral-50 text-coral-500",
    campus: "서울캠퍼스 12기 수료",
    title: (
      <>
        영어교육·언어학에
        <br />
        AI 문제 해결 능력을 더하다
      </>
    ),
    logo: "/assets/logo/companies/iportfolio.png",
    logoAlt: "아이포트폴리오",
    logoWrapClass: "h-4 flex items-center",
    role: "AI Product Manager 재직",
    delay: ".06s",
  },
  {
    photo: "/assets/photos/story-gumi.jpg",
    photoAlt: "구미캠퍼스 14기 수료생",
    badge: "전공자",
    badgeClass: "tag bg-brand-50 text-brand-600",
    campus: "구미캠퍼스 14기",
    title: (
      <>
        SSAFY 1학기 과정 수강 후
        <br />
        바로 금융권 최종 합격
      </>
    ),
    logo: "/assets/logo/companies/kdb.jpg",
    logoAlt: "한국산업은행",
    logoWrapClass: "h-6 flex items-center",
    role: "한국산업은행 IT 네트워크 관리 재직",
    delay: ".12s",
  },
  {
    photo: "/assets/photos/story-buulgyeong.jpg",
    photoAlt: "부울경캠퍼스 8기 수료생",
    badge: "비전공자",
    badgeClass: "tag bg-coral-50 text-coral-500",
    campus: "부울경캠퍼스 8기",
    title: (
      <>
        SSAFY로 시작된
        <br />
        SW 커리어 여정
      </>
    ),
    logo: "/assets/logo/companies/ourbank.png",
    logoAlt: "우리은행",
    logoWrapClass: "h-4 flex items-center",
    role: "우리은행 기업인터넷뱅킹 개발부 재직",
    delay: ".18s",
  },
];

export default function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">STORY</p>
          <h2 className="section-title mt-3">나와 비슷한 출발점의 취업사례</h2>
          <p className="section-desc">
            다양한 SW·AI 직무로 진출한 선배 기수들의 후기를 참고해보세요
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {STORIES.map((s) => (
            <div
              key={s.campus}
              className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 flex"
              style={s.delay ? { animationDelay: s.delay } : undefined}
            >
              <div className="w-[38%] sm:w-[42%] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.photo}
                  alt={s.photoAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-5 sm:p-7 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-2">
                  <span className={s.badgeClass}>{s.badge}</span>
                  <span className="text-sm font-bold text-ink-700">
                    {s.campus}
                  </span>
                </div>
                <p className="mt-3 text-lg sm:text-xl font-extrabold text-ink-900 leading-snug">
                  {s.title}
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className={s.logoWrapClass}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.logo}
                      alt={s.logoAlt}
                      className="h-full w-auto shrink-0"
                    />
                  </div>
                  <p className="text-sm font-semibold text-ink-700 leading-snug">
                    {s.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a href="#" className="btn-outline">
            더 많은 취업사례 보기
          </a>
        </div>
      </div>
    </section>
  );
}
