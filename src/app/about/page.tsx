import CasesSection from "@/components/About/CasesSection/CasesSection";
import HeroSection from "@/components/About/HeroSection/HeroSection";
import TeamSection from "@/components/About/TeamSection/TeamSection";
import WhyChooseSection from "@/components/About/WhyChooseSection/WhyChooseSection";
import WorkflowSection from "@/components/About/WorkflowSection/WorkflowSection";


export default function Careers() {
  return (
    <div>
        <HeroSection/>
        <WhyChooseSection/>
        <WorkflowSection/>
        <TeamSection />
        <CasesSection/>
    </div>
  );
}
