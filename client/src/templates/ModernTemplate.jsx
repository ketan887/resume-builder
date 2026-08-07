import Header from "./sections/Header";
import Summary from "./sections/Summary";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";
import LanguagesSection from "./sections/LanguagesSection";
import AchievementsSection from "./sections/AchievementsSection";

function ModernTemplate() {
  return (
   <div className="bg-white w-[210mm] min-h-[297mm] mx-auto rounded-lg shadow-2xl border border-slate-200 px-10 py-8">
      <Header />

      <Summary />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />

      <ProjectsSection />

      <CertificatesSection/>

      <LanguagesSection/>

      <AchievementsSection/>

    </div>
  );
}

export default ModernTemplate;