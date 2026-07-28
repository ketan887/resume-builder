import { useState } from "react";

import BuilderHeader from "../components/builder/BuilderHeader";
import ProgressBar from "../components/builder/ProgressBar";
import ResumeSidebar from "../components/builder/ResumeSidebar";
import ResumeEditor from "../components/builder/ResumeEditor";
import ResumePreview from "../components/builder/ResumePreview";

function Builder() {
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <div className="bg-slate-100 min-h-screen p-6">

      <BuilderHeader />

      <ProgressBar progress={35} />

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-2">
          <ResumeSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* Editor */}
        <div className="col-span-12 lg:col-span-5">
          <ResumeEditor activeSection={activeSection} />
        </div>

        {/* Preview */}
        <div className="col-span-12 lg:col-span-5">
          <div className="sticky top-6">
            <ResumePreview />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Builder;