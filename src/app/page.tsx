import RevealInit from "@/components/RevealInit";
import Campus from "@/components/Campus";
import Faq from "@/components/Faq";
import Sponsors from "@/components/Sponsors";
import Chatbot from "@/components/Chatbot";
import NotificationModal from "@/components/NotificationModal";
import Hero from "@/sections/Hero";
import RecruitInfo from "@/sections/RecruitInfo";
import Target from "@/sections/Target";
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
        <Hero />
        <RecruitInfo />
        <Target />
        <WhySSAFY />
        <Curriculum />
        <Project />
        <QuoteBanner />
        <Career />
        <Story />
        <CtaBanner />
        <Campus />
        <Apply />
        <Faq />
        <FinalCta />
      </main>
      <Sponsors />
      <Chatbot />
      <NotificationModal />
      <RevealInit />
    </>
  );
}
