
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ModernTemplate from "../../templates/ModernTemplate";
import ProfessionalTemplate from "../../templates/ProfessionalTemplate";
import CreativeTemplate from "../../templates/CreativeTemplate";

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div
      id="resume-preview"
      className="bg-white shadow-xl"
    >
      {resumeData.selectedTemplate === "modern" && (
        <ModernTemplate />
      )}

      {resumeData.selectedTemplate === "professional" && (
        <ProfessionalTemplate />
      )}

      {resumeData.selectedTemplate === "creative" && (
        <CreativeTemplate />
      )}
    </div>
  );
}

export default ResumePreview;