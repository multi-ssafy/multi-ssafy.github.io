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
  title: string; // 사례 타이틀(헤드라인)
  story: string; // 스토리 (<...> 안 문구는 파랗게 강조)
  company?: string; // 재직 기업
  delay?: string;
};

// story 문자열의 <...> 구간을 파란색 강조로 렌더링
function renderStory(text: string) {
  return text.split(/(<[^>]*>)/g).map((part, i) =>
    part.startsWith("<") && part.endsWith(">") ? (
      <strong key={i} className="font-bold text-brand-600">
        {part.slice(1, -1)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

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
    title: "초등교육자가 삼성전자 AI 개발자로!",
    story:
      "아이들을 위한 SW를 만들고 싶었던 저의 꿈, SSAFY의 AI 교육, <삼성전자 멘토와 함께한 실무 프로젝트가 현실로 바꿔줬습니다.> 이제는 삼성전자의 AI 개발 기획자로서 더 많은 사람들의 삶을 편리하게 만들고 있습니다.",
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
    title: "SSAFY 데이터 과정으로 NH농협의 데이터 분석가가 되다",
    story:
      "정보통계학을 전공했지만 자신감이 없던 저는 <SSAFY의 Data 특화 교육과 모의면접, 1:1 취업 멘토링을 통해 확신을 갖게 되었습니다.> 그리고 마침내 원하던 NH농협카드의 데이터 분석가가 되었습니다.",
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
    title: "SSAFY교육 + 취업컨설팅 + 대학 전공 = 나의 진정한 무기",
    story:
      "경제학과로 취업에 고민이 많았던 저는 SSAFY 취업 컨설팅을 통해 저의 진로를 찾았습니다. <SSAFY에서 배운 AI, IT 지식과 제 전공을 결합한 차별화된 경쟁력을 무기로> AJ네트웍스 IT 기술영업 직무에 합격했습니다.",
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
    title: "경영학도에서 AX 전문가로, SSAFY와 함께 도약하다",
    story:
      "경영학도의 열정만 있던 저에게 취업의 문은 높았습니다. <SSAFY의 실무형 프로젝트를 통해 기업의 프로세스, 필요 기술을 알게 되었고> 지금은 삼성전자에서 HR 등 각 분야에 AI를 적용하는 AX 전문가로 당당히 도약하였습니다.",
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
    title: "거듭된 취업실패, SSAFY를 만난 후엔 카카오 개발자로",
    story:
      "거듭된 불합격으로 자책하던 <저를 SSAFY의 체계적인 AI교육과 취업 컨설팅이 다시 일으켜 세웠습니다.> 동료들의 격려와 함께 한 시간은 역량이 되어, 마침내 카카오에 합격하여 지금 백엔드 개발자로 활약하고 있습니다.",
    delay: ".24s",
  },
  {
    photo: "",
    photoAlt: "반도체 SW 개발자 홍OO",
    cohort: "12기",
    majorType: "비전공",
    major: "기계공학부&소프트웨어학과",
    name: "홍OO",
    role: "반도체 SW 개발자",
    company: "SK하이닉스",
    title: "반도체 개발자로 취업성공, SSAFY 프로젝트가 증명하다",
    story:
      "면접장에서 <SSAFY 프로젝트 수상 이력 하나만으로 제 실력을 증명할 수 있었습니다.> 체계적인 교육뿐 아니라 밀착 취업 컨설팅으로 도와준 SSAFY 덕분에 지금은 SK하이닉스 반도체 개발자로 성장할 수 있었습니다.",
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
                <p className="mt-3 text-base sm:text-lg font-extrabold text-ink-900 leading-snug break-keep">
                  {s.title}
                </p>
                <p className="mt-2 text-md leading-relaxed break-keep text-justify">
                  {renderStory(s.story)}
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
