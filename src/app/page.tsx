import CasesSection from "@/components/Main/CasesSection/CasesSection";
import CTASection from "@/components/Main/CTASection/CTASection";
import DesignLabSection from "@/components/Main/DesignLabSection/DesignLabSection";
import HeroSection from "@/components/Main/HeroSection/HeroSection";
import StackSection from "@/components/Main/StackSection/StackSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <StackSection/>
      <DesignLabSection/>
      <CasesSection/>
      <CTASection/>
    </div>
  );
}
