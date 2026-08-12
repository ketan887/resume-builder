
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function EducationSection() {
  const { resumeData } = useContext(ResumeContext);

  const education = resumeData?.education || [];

  const validEducation = education.filter(
    (edu) => edu.degree || edu.institution
  );

  if (validEducation.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Education
      </h2>

      {/* Education Items */}
      <div className="mt-4 space-y-4">

        {validEducation.map((edu) => (
          <article key={edu.id}>

            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">

              {/* Degree + Institution */}
              <div>

                <h3 className="text-[15px] font-bold text-slate-900">
                  {edu.degree || "Degree"}
                </h3>

                {edu.institution && (
                  <p className="text-[14px] font-medium text-slate-700">
                    {edu.institution}
                    {edu.location && ` | ${edu.location}`}
                  </p>
                )}

              </div>

              {/* Years */}
              {(edu.startYear || edu.endYear) && (
                <p className="shrink-0 text-[13px] font-medium text-slate-600 sm:text-right">
                  {edu.startYear || ""}
                  {edu.endYear
                    ? ` - ${edu.endYear}`
                    : ""}
                </p>
              )}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default EducationSection;
