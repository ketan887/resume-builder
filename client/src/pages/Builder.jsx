import { useState } from "react";

import ResumeSidebar from "../components/builder/ResumeSidebar";
import ResumeEditor from "../components/builder/ResumeEditor";
import ResumePreview from "../components/builder/ResumePreview";
function Builder() {
  const [activeSection, setActiveSection] = useState("personal");

  return (
    <section className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-6">

          <div className="lg:col-span-2">
            <ResumeSidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          <div className="lg:col-span-4">
            <ResumeEditor activeSection={activeSection} />
          </div>

          <div className="lg:col-span-6">
            <ResumePreview />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Builder;