
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ModernTemplate from "../../templates/ModernTemplate";
import ProfessionalTemplate from "../../templates/ProfessionalTemplate";
import CreativeTemplate from "../../templates/CreativeTemplate";

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);

  const selectedTemplate =
    resumeData?.selectedTemplate || "modern";

  return (
    <div className="w-full">

      {/* Preview Container */}
      <div className="flex w-full justify-center overflow-x-auto">

        {/* A4 Resume Paper */}
        <div
          id="resume-preview"
          className="
            w-full
            max-w-[794px]
            min-h-[1123px]
            shrink-0
            overflow-hidden
            bg-white
            shadow-2xl
            ring-1
            ring-slate-200
          "
        >

          {/* Modern Template */}
          {selectedTemplate === "modern" && (
            <ModernTemplate />
          )}

          {/* Professional Template */}
          {selectedTemplate === "professional" && (
            <ProfessionalTemplate />
          )}

          {/* Creative Template */}
          {selectedTemplate === "creative" && (
            <CreativeTemplate />
          )}

        </div>

      </div>

    </div>
  );
}

export default ResumePreview;

