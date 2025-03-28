import AboutSection from "@/components/Careers/About/About";
import JobOpportunitiesSection from "@/components/Careers/JobOpportunitiesSection/JobOpportunitiesSection";
import OpenPositionsSection from "@/components/Careers/OpenPositionsSection/OpenPositionsSection";
import PerfectRoleSection from "@/components/Careers/RecruitmentBanner/PerfectRoleSection";


export default function Careers() {
  return (
    <div>
        <OpenPositionsSection/>
        <AboutSection/>
        <JobOpportunitiesSection/>
        <PerfectRoleSection />
    </div>
  );
}
