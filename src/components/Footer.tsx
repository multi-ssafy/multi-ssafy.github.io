// 푸터 — 브랜드 소개 · 사이트맵 · 고객지원 · 사업자 정보

const SITEMAP = [
  { href: "#why", label: "SSAFY 소개" },
  { href: "#curriculum", label: "AI 커리큘럼" },
  { href: "#career", label: "취업지원" },
  { href: "#campus", label: "캠퍼스" },
  { href: "#apply", label: "모집안내" },
];

const SUPPORT = [
  { href: "#faq", label: "자주 묻는 질문" },
  { href: "#", label: "1:1 문의하기" },
  { href: "#", label: "공지사항" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-400">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-xl font-black text-white">SSAFY</span>
            <p className="mt-3 text-sm leading-relaxed">
              삼성청년 SW·AI 아카데미
              <br />
              차세대 SW·AI 인재 양성 프로그램
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="유튜브"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="인스타그램"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="블로그"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-4">사이트맵</p>
            <ul className="space-y-2.5 text-sm">
              {SITEMAP.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-4">고객지원</p>
            <ul className="space-y-2.5 text-sm">
              {SUPPORT.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-4">
              사업자 정보{" "}
              <span className="text-ink-500 font-normal">(예시)</span>
            </p>
            <ul className="space-y-1.5 text-sm leading-relaxed">
              <li>상호명: (주)OOO / 대표자: OOO</li>
              <li>사업자등록번호: 000-00-00000</li>
              <li>주소: 서울특별시 OO구 OO로 00</li>
              <li className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                contact@ssafy-example.com
              </li>
              <li className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                1544-0000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 SSAFY. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              이용약관
            </a>
            <a href="#" className="hover:text-white font-semibold text-ink-300">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
