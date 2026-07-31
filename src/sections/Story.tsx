import { ArrowUpRight,ArrowRight } from "@/lib/icons";

// CAREER STORY — 나의 전공으로 탑티어가 되는 지름길
// 다양한 전공에서 AI 직무로 진출한 케이스 (예시 — 실제 인터뷰 사례로 교체 예정)
// '후기 바로가기'는 임시로 ssafy.com 으로 연결

const REVIEW_URL = "https://www.ssafy.com";

type Story = {
  photo: string;
  photoAlt: string;
  cohort: string; // 기수
  majorType: string; // 전공 / 비전공
  major: string; // 전공명
  name: string; // 이름
  role: string; // AI 직무
  story: string; // 한 줄 스토리
  delay?: string;
};

const STORIES: Story[] = [
  {
    photo: "/assets/photos/story-gumi.jpg",
    photoAlt: "AI 비즈니스 기획자 정은선",
    cohort: "12기",
    majorType: "비전공",
    major: "교육학과",
    name: "정OO",
    role: "AI 비즈니스 기획자",
    story:
      "무스펙 비전공자로 진로 전환이 막막했지만, SSAFY에서 웹 개발 실무를 배우고 삼성전자 임직원의 멘토링을 받으며 AI 프로젝트를 수행했습니다. 교육학 전공자로서의 소통 역량과 SW 기술력의 시너지를 증명하며, 현재 삼성전자 AI 개발 기획자로 근무하고 있습니다.",
    delay: undefined,
  },
  {
    photo: "/assets/photos/story-seoul.jpg",
    photoAlt: "데이터 분석가 지민경",
    cohort: "11기",
    majorType: "비전공",
    major: "응용통계학과",
    name: "지OO",
    role: "데이터 분석가",
    story: "응용통계학을 전공했지만, 데이터 분석 직무로의 취업은 쉽지 않았습니다. SSAFY 교육과 취업 컨설팅을 통해 기업과 직무에 맞춘 취업준비와 실무 역량을 강화할 수 있었습니다. 현재는 전공 지식과 SSAFY에서 쌓은 경험을 바탕으로 롯데손해보험 자동차보험 데이터 분석가로 활동하고 있습니다.",
    delay: ".06s",
  },
  {
    photo: "/assets/photos/story-gwangju.jpg",
    photoAlt: "HR 인사 전략 기획자 고금강",
    cohort: "12기",
    majorType: "비전공",
    major: "경영학과",
    name: "고OO",
    role: "HR 인사 전략 기획자",
    story:
      "경영학도 특유의 끈기와 열정으로도 취업의 문턱은 너무 높았습니다. SSAFY의 체계적인 교육과 탄탄한 프로젝트 경험들이 경영학 지식과 융합되어, 현재 삼성전자에서 기술 이해도를 갖춘 인사 기획자로 활약하고 있습니다.",
    delay: ".12s",
  },
  {
    photo: "/assets/photos/story-buulgyeong.jpg",
    photoAlt: "IT·AI 기술 세일즈 수료생",
    cohort: "13기",
    majorType: "비전공",
    major: "경제학과",
    name: "김OO",
    role: "IT·AI 기술 세일즈",
    story: "경제학 전공 후 병원 영업 경력자로 29세에 SSAFY를 시작했습니다. SSAFY 교육은 IT 기술 영업 분야에 대한 관심을 갖게 했고 기존 직무 경험까지 살려서 원하던 4개 회사에 동시 합격하는 성과가 있었습니다. 지금은 AJ네트웍스에서 IT장비 렌탈 영업을 담당하고 있습니다.",
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
            어떤 스토리를 갖고 있더라도 각자의 출발점에서 함께 성장할 수 있어요
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {STORIES.map((s) => (
            <div
              key={s.role}
              className="reveal card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 flex"
              style={s.delay ? { animationDelay: s.delay } : undefined}
            >
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center min-w-0">
                <div className="flex flex-wrap gap-1.5">
                  <span className="tag bg-brand-50 w-fit">{s.cohort}</span>
                  <span className="tag bg-brand-50 w-fit">{s.major}</span>
                </div>
                <h3 className="mt-2.5 text-xl sm:text-2xl font-black text-brand-600 leading-tight break-keep">
                  {s.role}
                </h3>
                <p className="mt-1.5 text-sm font-bold ">
                  {s.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed break-keep">
                  {s.story}
                </p>
                {/* <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 w-fit"
                >
                  후기 바로가기
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a
            href="https://www.ssafy.com/ksp/servlet/swp.board.controller.SwpBoardServlet?p_process=select-board-list&p_receipt_seq=&p_menu_cd=M0204&p_content_cd=&p_param1=226509"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            더 많은 취업 후기 보기 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
