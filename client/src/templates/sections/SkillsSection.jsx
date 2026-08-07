import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";

function SkillsSection() {
  const { resumeData } = useContext(ResumeContext);

  if (!resumeData.skills || resumeData.skills.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Technical Skills</ResumeHeading>

      <p className="text-[15px] leading-7 text-slate-700">
        {resumeData.skills.join(" • ")}
      </p>
    </ResumeSection>
  );
}

export default SkillsSection;