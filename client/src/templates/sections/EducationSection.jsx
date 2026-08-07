import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";
import ResumeItem from "../../resume/ResumeItem";

function EducationSection() {
  const { resumeData } = useContext(ResumeContext);

  const education = resumeData.education.filter(
    (edu) => edu.degree || edu.institution
  );

  if (education.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Education</ResumeHeading>

      {education.map((edu) => (
        <ResumeItem
          key={edu.id}
          title={edu.degree || "Degree"}
          subtitle={`${edu.institution}${
            edu.location ? ` • ${edu.location}` : ""
          }`}
          rightText={`${edu.startYear || ""}${
            edu.endYear ? ` - ${edu.endYear}` : ""
          }`}
        />
      ))}
    </ResumeSection>
  );
}

export default EducationSection;