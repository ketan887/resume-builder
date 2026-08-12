
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function LanguagesSection() {
  const { resumeData } = useContext(ResumeContext);

  const languages = resumeData?.languages || [];

  const validLanguages = languages.filter(
    (language) => language.name?.trim()
  );

  if (validLanguages.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Languages
      </h2>

      {/* Languages */}
      <div className="mt-3 text-[14px] leading-6 text-slate-700">

        {validLanguages.map((language, index) => (
          <span key={language.id}>

            <span className="font-medium text-slate-800">
              {language.name}
            </span>

            {language.proficiency && (
              <span className="text-slate-600">
                {" "}
                ({language.proficiency})
              </span>
            )}

            {index < validLanguages.length - 1 && (
              <span className="mx-2 text-slate-400">
                |
              </span>
            )}

          </span>
        ))}

      </div>

    </section>
  );
}

export default LanguagesSection;

