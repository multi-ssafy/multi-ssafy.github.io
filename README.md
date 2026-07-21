# SSAFY 모집 랜딩페이지 (Next.js)

삼성청년 SW·AI아카데미(SSAFY) 모집 안내 랜딩페이지.
기존 단일 `index.html` 정적 사이트를 **Next.js(App Router) + TypeScript + Tailwind**
구조로 이관하는 브랜치입니다. **디자인은 기존과 100% 동일하게 유지**하며 코드 구조만
유지보수하기 쉽게 재구성합니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 정적 사이트 생성 (out/ 폴더)
```

`next.config.mjs`에서 `output: "export"`로 설정되어 있어, 빌드 시 서버 없이 배포
가능한 정적 파일이 `out/`에 생성됩니다. (Vercel은 Next.js를 자동 감지하여 빌드)

## 폴더 구조

```
src/
  app/
    layout.tsx        루트 레이아웃 · 메타데이터 · 폰트
    page.tsx          페이지 조립 (섹션 나열)
    globals.css       전역 스타일 (디자인 시스템 · 캠퍼스 지도 · 챗봇 · 마퀴)
  components/         재사용 UI · 클라이언트 컴포넌트 (Header, RevealInit ...)
  sections/          페이지 섹션 (Hero, RecruitInfo ...)
  data/              콘텐츠 데이터 (site.ts: 네비·파트너 로고 ...)
  lib/
    icons.tsx        Lucide 아이콘 재사용 컴포넌트 (인라인 SVG 중복 제거)
public/
  assets/            폰트 · 로고 · 사진 · 이미지 (기존 경로 /assets/... 유지)
legacy/              이관 이전 원본(index.html·main.js·input.css) 참조용 보관
```

## 유지보수 포인트

- **콘텐츠 수정**: `src/data/*.ts` 파일의 값만 고치면 화면에 반영됩니다.
  (예: 모집일정·네비게이션·파트너 로고 목록)
- **아이콘**: `src/lib/icons.tsx`에서 한 번만 정의하고 재사용합니다.
- **섹션 추가/수정**: `src/sections/`에 컴포넌트를 만들고 `app/page.tsx`에 배치합니다.

## 이관 진행 상황

- [x] Next.js 스캐폴딩 (config · tsconfig · tailwind · postcss)
- [x] 디자인 시스템 이관 (globals.css) · 폰트/에셋 public 이동
- [x] Header (모바일 메뉴 · 스크롤 상태)
- [x] Hero (마퀴 로고 포함)
- [x] 모집 핵심정보(RecruitInfo)
- [ ] 나머지 섹션: 타깃별 SSAFY · Why · 커리큘럼 · 기업연계 프로젝트 · 취업지원/취업률
      · 취업사례 · 교육혜택 · 캠퍼스(네온 지도) · 지원자격/선발 프로세스 · 설명회/FAQ
      · 최종 CTA · Footer · 챗봇 위젯

> 남은 섹션은 동일한 패턴(섹션 컴포넌트 + 필요 시 data 분리 + 클라이언트 인터랙션 훅)으로
> 순차 이관 예정입니다. 이관된 부분은 기존 정적 사이트와 픽셀 단위로 동일하게 렌더링됨을
> 확인했습니다.
