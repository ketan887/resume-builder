
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
    <div
      className="
        w-full
        min-h-[1123px]
        bg-white
        px-8
        py-10
        text-slate-900
        font-sans
      "
    >

      {/* Resume Header */}
      <Header />

      {/* Professional Summary */}
      <Summary />

      {/* Professional Experience */}
      <ExperienceSection />

      {/* Education */}
      <EducationSection />

      {/* Technical Skills */}
      <SkillsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Certifications */}
      <CertificatesSection />

      {/* Languages */}
      <LanguagesSection />

      {/* Achievements */}
      <AchievementsSection />

    </div>
  );
}

export default ModernTemplate;

