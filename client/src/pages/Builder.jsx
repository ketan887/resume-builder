import { useState } from "react";

import BuilderHeader from "../components/builder/BuilderHeader";
import ProgressBar from "../components/builder/ProgressBar";
import ResumeSidebar from "../components/builder/ResumeSidebar";
import ResumeEditor from "../components/builder/ResumeEditor";
import ResumePreview from "../components/builder/ResumePreview";

import ATSScoreCard from "../components/ATSScoreCard";
import ResumeHealth from "../components/ResumeHealth";
import ResumeIntelligence from "../components/ResumeIntelligence";
import JobMatcher from "../components/JobMatcher";

function Builder() {
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <BuilderHeader />

      <main className="max-w-[1920px] mx-auto px-4 md:px-6 xl:px-8 py-6">

        {/* Progress */}
        <ProgressBar progress={35} />

        {/* Main Builder */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6 items-start">

          {/* Sidebar */}
          <aside className="xl:col-span-2">
            <ResumeSidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </aside>

          {/* Resume Editor */}
          <section className="xl:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 min-h-[850px]">
              <ResumeEditor activeSection={activeSection} />
            </div>
          </section>

          {/* Resume Preview */}
          <section className="xl:col-span-5">
            <div className="sticky top-24">
              <ResumePreview />
            </div>
          </section>

        </div>

        {/* Analytics */}
        <section className="mt-12">

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Resume Analytics
            </h2>

            <p className="text-slate-500 mt-2">
              Improve your resume quality with live ATS analysis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <ATSScoreCard />

            <ResumeHealth />

            <ResumeIntelligence />

          </div>

          <div className="mt-6">
            <JobMatcher />
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16 bg-white">

        <div className="max-w-[1920px] mx-auto px-6 py-8 text-center">

          <h3 className="font-semibold text-slate-800">
            ResumeBuilder Pro
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Build ATS-friendly resumes with live AI analysis.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Builder;