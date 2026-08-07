import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";
import ResumeItem from "../../resume/ResumeItem";
function ExperienceSection() {
  const { resumeData } = useContext(ResumeContext);

  const experience = resumeData.experience.filter(
    (exp) => exp.position || exp.company
  );

  if (experience.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Experience</ResumeHeading>

      {experience.map((exp) => (
        <ResumeItem
          key={exp.id}
          title={exp.position || "Job Title"}
          subtitle={`${exp.company}${exp.location ? ` • ${exp.location}` : ""}`}
          rightText={`${exp.startDate || ""}${
            exp.endDate ? ` - ${exp.endDate}` : ""
          }`}
          description={exp.description}
        />
      ))}
    </ResumeSection>
  );
}

export default ExperienceSection;