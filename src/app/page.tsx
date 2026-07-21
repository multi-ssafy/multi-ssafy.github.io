import Header from "@/components/Header";
import RevealInit from "@/components/RevealInit";
import Hero from "@/sections/Hero";
import RecruitInfo from "@/sections/RecruitInfo";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <RecruitInfo />
      </main>
      <RevealInit />
    </>
  );
}
