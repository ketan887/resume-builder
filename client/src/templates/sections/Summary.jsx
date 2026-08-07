import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";

function Summary() {
  const { resumeData } = useContext(ResumeContext);
  const { summary } = resumeData.personalInfo;

  if (!summary) return null;

  return (
    <ResumeSection>
      <ResumeHeading>
        Professional Summary
      </ResumeHeading>

      <p className="text-[15px] leading-7 text-slate-700 text-justify">
        {summary}
      </p>
    </ResumeSection>
  );
}

export default Summary;