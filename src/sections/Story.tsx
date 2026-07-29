import { ArrowUpRight } from "@/lib/icons";

// CAREER STORY — 나의 전공으로 탑티어가 되는 지름길
// 다양한 전공에서 AI 직무로 진출한 케이스 (예시 — 실제 인터뷰 사례로 교체 예정)
// '후기 바로가기'는 임시로 ssafy.com 으로 연결

const REVIEW_URL = "https://www.ssafy.com";

type Story = {
  photo: string;
  photoAlt: string;
  major: string; // 전공
  role: string; // AI 직무
  story: string; // 한 줄 스토리
  delay?: string;
};

const STORIES: Story[] = [
  {
    photo: "/assets/photos/story-seoul.jpg",
    photoAlt: "AI 비즈니스 기획자 수료생",
    major: "경영학",
    role: "AI 비즈니스 기획자",
    story: "비전공에서 출발해 AI로 신사업을 설계하는 기획자로 성장했어요.",
    delay: undefined,
  },
  {
    photo: "/assets/photos/story-gwangju.jpg",
    photoAlt: "데이터 분석가 수료생",
    major: "통계학",
    role: "데이터 분석가",
    story: "전공 지식에 AI 역량을 더해 데이터로 의사결정을 이끕니다.",
    delay: ".06s",
  },
  {
    photo: "/assets/photos/story-gumi.jpg",
    photoAlt: "HR 인사 전략 기획자 수료생",
    major: "심리학",
    role: "HR 인사 전략 기획자",
    story: "사람에 대한 이해에 데이터·AI를 접목한 인사 전략가로 일해요.",
    delay: ".12s",
  },
  {
    photo: "/assets/photos/story-buulgyeong.jpg",
    photoAlt: "IT·AI 기술 세일즈 수료생",
    major: "국제통상학",
    role: "IT·AI 기술 세일즈",
    story: "기술을 이해하고 시장을 연결하는 AI 기술 세일즈로 진출했어요.",
    delay: ".18s",
  },
];

export default function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-20 md:py-28 bg-ink-50/60">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="eyebrow justify-center">STORY</p>
          <h2 className="section-title mt-3">
            나의 전공으로 탑티어가 되는 지름길
          </h2>
          <p className="section-desc">
            전공과 경험, 지역이 달라도 각자의 출발점에서 성장할 수 있어요
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {STORIES.map((s) => (
            <div
              key={s.role}
              className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 flex"
              style={s.delay ? { animationDelay: s.delay } : undefined}
            >
              <div className="w-[36%] sm:w-[40%] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.photo}
                  alt={s.photoAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-5 sm:p-7 flex flex-col justify-center min-w-0">
                <span className="tag bg-brand-50 text-brand-600 w-fit">
                  {s.major} 전공
                </span>
                <h3 className="mt-2.5 text-xl sm:text-2xl font-black text-ink-900 leading-tight break-keep">
                  {s.role}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed break-keep">
                  {s.story}
                </p>
                <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 w-fit"
                >
                  후기 바로가기
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            더 많은 취업 후기 보기
          </a>
        </div>
      </div>
    </section>
  );
}
