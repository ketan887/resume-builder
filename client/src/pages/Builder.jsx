
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
        <ProgressBar progress={35} />


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

            This stays BELOW the three-column builder.
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

