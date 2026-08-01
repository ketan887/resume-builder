import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import SectionHeading from "../../components/ui/SectionHeading";

function LanguagesSection() {
  const { resumeData } = useContext(ResumeContext);

  const languages = resumeData.languages.filter(
    (language) => language.name.trim() !== ""
  );

  if (languages.length === 0) return null;

  return (
    <section className="mt-8">
      <SectionHeading title="Languages" />

      <div className="space-y-3 mt-4">
        {languages.map((language) => (
          <div
            key={language.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="font-medium text-slate-800">
              {language.name}
            </span>

            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {language.proficiency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;