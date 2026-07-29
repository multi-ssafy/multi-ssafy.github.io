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
        <Hero />
        <IntroMessage />
        <SectionNav />
        <IntroVideo />
        <Difference />
        <WhySSAFY />
        <Roadmap />
        <Curriculum />
        <Campus />
        <Project />
        <QuoteBanner />
        <Career />
        <Story />
        <CompanyVoices />
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
