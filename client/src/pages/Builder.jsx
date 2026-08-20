
import { useContext, useState } from "react";

import { ResumeContext } from "../context/ResumeContext";

import BuilderHeader from "../components/builder/BuilderHeader";
import ProgressBar from "../components/builder/ProgressBar";
import ResumeSidebar from "../components/builder/ResumeSidebar";
import ResumeEditor from "../components/builder/ResumeEditor";
import ResumePreview from "../components/builder/ResumePreview";

import ResumeAnalytics from "../components/analytics/ResumeAnalytics";

function Builder() {
  const [activeSection, setActiveSection] = useState("personal");

  const { resumeData } = useContext(ResumeContext);

  // =====================================================
  // RESUME COMPLETION CALCULATION
  // =====================================================

  const isPersonalComplete = () => {
    const personal = resumeData?.personalInfo || {};

    return Boolean(
      personal.fullName?.trim() ||
      personal.title?.trim() ||
      personal.email?.trim() ||
      personal.phone?.trim() ||
      personal.location?.trim() ||
      personal.linkedin?.trim() ||
      personal.github?.trim() ||
      personal.portfolio?.trim()
    );
  };

  const isEducationComplete = () => {
    return (resumeData?.education || []).some(
      (item) =>
        item.degree?.trim() ||
        item.institution?.trim() ||
        item.location?.trim() ||
        item.startYear ||
        item.endYear
    );
  };

  const isExperienceComplete = () => {
    return (resumeData?.experience || []).some(
      (item) =>
        item.company?.trim() ||
        item.position?.trim() ||
        item.location?.trim() ||
        item.startDate ||
        item.endDate ||
        item.description?.trim()
    );
  };

  const isProjectsComplete = () => {
    return (resumeData?.projects || []).some(
      (item) =>
        item.title?.trim() ||
        item.techStack?.trim() ||
        item.github?.trim() ||
        item.liveDemo?.trim() ||
        item.description?.trim()
    );
  };

  const isSkillsComplete = () => {
    return (
      Array.isArray(resumeData?.skills) &&
      resumeData.skills.length > 0 &&
      resumeData.skills.some(
        (skill) =>
          typeof skill === "string"
            ? skill.trim()
            : skill?.name?.trim()
      )
    );
  };

  const isCertificatesComplete = () => {
    return (resumeData?.certificates || []).some(
      (item) =>
        item.name?.trim() ||
        item.issuer?.trim() ||
        item.issueDate ||
        item.credentialId?.trim() ||
        item.credentialUrl?.trim()
    );
  };

  const isLanguagesComplete = () => {
    return (resumeData?.languages || []).some(
      (item) =>
        item.name?.trim() ||
        item.proficiency?.trim()
    );
  };

  const isAchievementsComplete = () => {
    return (resumeData?.achievements || []).some(
      (item) =>
        item.title?.trim() ||
        item.description?.trim() ||
        item.year
    );
  };

  // =====================================================
  // COUNT COMPLETED SECTIONS
  // =====================================================

  const completedSections = [
    isPersonalComplete(),
    isEducationComplete(),
    isExperienceComplete(),
    isProjectsComplete(),
    isSkillsComplete(),
    isCertificatesComplete(),
    isLanguagesComplete(),
    isAchievementsComplete(),

    // Summary is counted separately
    Boolean(
      resumeData?.personalInfo?.summary?.trim()
    ),
  ].filter(Boolean).length;

  // =====================================================
  // CALCULATE PERCENTAGE
  // =====================================================

  const totalSections = 9;

  const progress = Math.round(
    (completedSections / totalSections) * 100
  );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <BuilderHeader />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-[1920px] px-4 py-6 md:px-6 xl:px-8">

        {/* ===================================================
            PROGRESS BAR
        =================================================== */}

        <ProgressBar progress={progress} />


        {/* ===================================================
            BUILDER AREA

            Desktop:
            Sidebar | Editor | Preview

            Mobile:
            Sidebar
            Editor
            Preview
        =================================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            items-start
            gap-6
            xl:grid-cols-12
          "
        >

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="xl:col-span-2">

            <ResumeSidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

          </aside>


          {/* =================================================
              RESUME EDITOR
          ================================================= */}

          <section className="xl:col-span-5">

            <div
              className="
                min-h-[850px]
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-lg
                md:p-8
              "
            >

              <ResumeEditor
                activeSection={activeSection}
              />

            </div>

          </section>


          {/* =================================================
              LIVE RESUME PREVIEW
          ================================================= */}

          <section className="xl:col-span-5">

            <div className="sticky top-24">

              <ResumePreview />

            </div>

          </section>

        </div>


        {/* ===================================================
            RESUME ANALYTICS
        =================================================== */}

        <div className="mt-10">

          <ResumeAnalytics
            resumeData={resumeData}
          />

        </div>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mt-16 border-t border-slate-200 bg-white">

        <div
          className="
            mx-auto
            max-w-[1920px]
            px-6
            py-8
            text-center
          "
        >

          <h3 className="text-lg font-semibold text-slate-800">
            ResumeBuilder Pro
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Build ATS-friendly resumes with intelligent resume analysis.
          </p>

          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} ResumeBuilder Pro
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Builder;

