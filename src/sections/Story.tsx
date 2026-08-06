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
  company?: string; // 재직 기업
  delay?: string;
};

const STORIES: Story[] = [
  {
    photo: "/assets/photos/story-gumi.jpg",
    photoAlt: "AI 비즈니스 기획자 정OO",
    cohort: "12기",
    majorType: "비전공",
    major: "교육학과",
    name: "정OO",
    role: "AI 비즈니스 기획자",
    company: "삼성전자",
    story:
      "초등 교육자로 근무하다 더 많은 아이들의 삶을 편리하게 만드는 소프트웨어 개발자가 되고 싶다는 마음이 커져 진로를 변경하였습니다. 백지상태의 비전공자로 독학을 하다 막막함을 느껴 SSAFY에 입과했습니다. 웹 개발 실무부터 삼성전자 연계 AI 프로젝트를 수행하며 개발에도 자신감이 생겼습니다. 현재는 삼성전자에 입사해 AI 개발 기획자로 근무하며 교육학 전공자로서의 소통 역량과 SW 기술력의 시너지를 발휘하고 있습니다.",
    delay: undefined,
  },
  {
    photo: "/assets/photos/story-seoul.jpg",
    photoAlt: "데이터 분석가 김OO",
    cohort: "14기",
    majorType: "비전공",
    major: "정보통계학과",
    name: "김OO",
    role: "데이터 분석가",
    company: "NH농협카드",
    story: "정보통계학을 전공했지만 데이터 분석가로의 취업은 쉽지 않았고 자신감도 많이 위축되어 있었습니다. 하지만 SSAFY의 데이터 특화 커리큘럼으로 실무 역량을 쌓았고 막막했던 금융권 취업 과정에서는 8회에 걸쳐 전담 컨설턴트님의 모의면접과 집중 케어를 받으며 점차 달라지는 저를 발견했습니다. 실무 프로젝트는 물론, 1:1 취업 멘토링으로 확신을 얻은 덕분에 마침내 원하던 NH농협카드 데이터 분석 직무에 합격했습니다.",
    delay: ".06s",
  },
  {
    photo: "/assets/photos/story-buulgyeong.jpg",
    photoAlt: "IT·AI 기술 세일즈 김OO",
    cohort: "13기",
    majorType: "비전공",
    major: "경제학과",
    name: "김OO",
    role: "IT·AI 기술 세일즈",
    company: "AJ네트웍스",
    story: "적지 않은 나이에 비전공 출신의 개발자를 꿈꾸며 SSAFY에 입과했지만, 취업 컨설턴트와의 꾸준한 상담을 통해 제 진짜 강점이 '영업'에 있음을 깨달았습니다. SSAFY에서 쌓은 탄탄한 IT 기술력에 기존 영업 경력을 융합하여 'IT 기술영업'으로 방향을 전환했고, 차별화된 장점을 무기로 AJ네트웍스 IT 기술영업 직무에 합격했습니다.",
    delay: ".18s",
  },
  {
    photo: "/assets/photos/story-gwangju.jpg",
    photoAlt: "HR 인사 전략 기획자 고OO",
    cohort: "12기",
    majorType: "비전공",
    major: "경영학과",
    name: "고OO",
    role: "HR·AX 기획자",
    company: "삼성전자",
    story:
      "“해결하지 못할 문제는 없다” 라는 저의 평소 지론과 경영학 특유의 열정으로 취업 문을 두드렸지만 그 문턱은 너무 높았습니다. 개발에 흥미가 있어 AI 모델을 만들어도 이를 서비스로 연결할 백엔드 역량이 없어 늘 답답했습니다. SSAFY에 들어와 현업 프로세스 그대로 백엔드 구축부터 AI 성능 최적화까지 경험하며 확실한 포트폴리오로 남길 수 있었습니다. 현재 삼성전자에서 기술 이해도를 갖춘 AX전문가로 당당히 도약하여 HR을 포함한 경영 지원 전반에 AI를 적용시키는 역할을 담당하고 있습니다.",
    delay: ".12s",
  },
  {
    photo: "",
    photoAlt: "백엔드 개발자 조OO",
    cohort: "14기",
    majorType: "전공",
    major: "컴퓨터과학부",
    name: "조OO",
    role: "백엔드 개발자",
    company: "카카오",
    story:
      "거듭된 불합격 통보와 SW전공자로서 부족했던 기본기로 자책하던 중, 다양한 AI 프로젝트를 경험할 수 있다는 기대로 SSAFY에 입과했습니다. 매일 8시간씩 AI와 기본 역량을 다지고, 전담 취업 컨설턴트님과 채용 정보 및 기출 질문을 철저히 분석하는 한편 지치고 힘들 때면 동료들과 밥 한 끼의 위로를 나누며 흔들리는 마음을 다잡았습니다. 그 결과 카카오 신입공채 테크 직무에 당당히 합격하여, 현재는 최적의 솔루션을 고민하는 백엔드 개발자로 활약하고 있습니다.",
    delay: ".24s",
  },
  {
    photo: "",
    photoAlt: "반도체 SW 개발자 홍O",
    cohort: "12기",
    majorType: "비전공",
    major: "기계공학부&소프트웨어학과",
    name: "홍O",
    role: "반도체 SW 개발자",
    company: "SK하이닉스",
    story:
      "기계공학도에서 개발자로 전향한 제게 SSAFY는 유일한 스펙이었습니다. 인턴십이나 대외 공모전 경험은 전무했지만, 오직 SSAFY 프로젝트 수상 이력만으로 면접에서 저의 실력을 증명해냈습니다. 뿐만 아니라 교육과 취업준비를 병행하기 벅찬 와중에도, 취업지원센터의 밀착 컨설팅과 정기적인 채용 소식 공유 덕분에 취업 준비 시간을 효율적으로 관리할 수 있었습니다. 이처럼 SSAFY의 체계적인 지원을 발판 삼아, 현재 SK하이닉스에서 반도체 생산에 기여하는 개발자로 활약 중입니다.",
    delay: ".30s",
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
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-start min-w-0">
                <div className="flex flex-wrap gap-1.5">
                  <span className="tag bg-brand-50 w-fit">{s.cohort}</span>
                  <span className="tag bg-brand-50 w-fit">{s.major}</span>
                  {s.company && (
                    <span className="tag bg-brand-600 text-white w-fit">
                      {s.company}
                    </span>
                  )}
                </div>
                <h3 className="mt-2.5 text-xl sm:text-2xl font-black text-brand-600 leading-tight break-keep">
                  {s.role}
                </h3>
                <p className="mt-1.5 text-md font-bold ">
                  {s.name}
                </p>
                <p className="mt-2 text-md leading-relaxed break-keep text-justify">
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
