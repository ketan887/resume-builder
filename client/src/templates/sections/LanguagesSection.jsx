import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";

function LanguagesSection() {
  const { resumeData } = useContext(ResumeContext);

  const languages = resumeData.languages.filter(
    (language) => language.name
  );

  if (languages.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Languages</ResumeHeading>

      <div className="space-y-2">
        {languages.map((language) => (
          <div
            key={language.id}
            className="flex justify-between text-[15px]"
          >
            <span className="font-medium text-slate-800">
              {language.name}
            </span>

            <span className="text-slate-600">
              {language.proficiency}
            </span>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

export default LanguagesSection;