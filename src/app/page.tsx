import RevealInit from "@/components/RevealInit";
import SectionNav from "@/components/SectionNav";
import Campus from "@/components/Campus";
import Faq from "@/components/Faq";
import Sponsors from "@/components/Sponsors";
import Chatbot from "@/components/Chatbot";
import FloatingApplyBar from "@/components/FloatingApplyBar";
import NotificationModal from "@/components/NotificationModal";
import CompanyVoices from "@/components/CompanyVoices";
import Hero from "@/sections/Hero";
import IntroMessage from "@/sections/IntroMessage";
import IntroVideo from "@/sections/IntroVideo";
import Roadmap from "@/sections/Roadmap";
import Difference from "@/sections/Difference";
import WhySSAFY from "@/sections/WhySSAFY";
import Curriculum from "@/sections/Curriculum";
import Project from "@/sections/Project";
import QuoteBanner from "@/sections/QuoteBanner";
import Career from "@/sections/Career";
import Story from "@/sections/Story";
import CtaBanner from "@/sections/CtaBanner";
import Apply from "@/sections/Apply";
import FinalCta from "@/sections/FinalCta";

export default function Home() {
  return (
    <>
      <main id="top">
        {/* 메인 (첫 페이지 고정) */}
        <Hero />
        <SectionNav />

        {/* 1) 차별점 (3가지 교육특징은 Hero 내 3지표) */}
        <Difference />

        {/* 2) 소개 영상 */}
        <IntroMessage />
        <IntroVideo />

        {/* 3) 커리큘럼 */}
        <Roadmap />
        <Curriculum />
        <Project />
        <WhySSAFY />

        {/* 4) 캠퍼스 · 취업 */}
        <Campus />
        <QuoteBanner />
        <Career />
        <Story />
        <CompanyVoices />

        {/* 5) 지원 · 안내 */}
        <CtaBanner />
        <Apply />
        <Faq />
        <FinalCta />
      </main>
      <Sponsors />
      <Chatbot />
      <FloatingApplyBar />
      <NotificationModal />
      <RevealInit />
    </>
  );
}
