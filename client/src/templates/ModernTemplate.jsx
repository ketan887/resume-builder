import Header from "./sections/Header";
import Summary from "./sections/Summary";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";

function ModernTemplate() {
  return (
    <div className="bg-white max-w-[210mm] min-h-[297mm] mx-auto shadow-2xl rounded-lg p-8 md:p-10">
      <Header />

      <Summary />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />

      <ProjectsSection />

      <CertificatesSection/>

    </div>
  );
}

export default ModernTemplate;