
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function ExperienceSection() {
  const { resumeData } = useContext(ResumeContext);

  const experience = resumeData?.experience || [];

  const validExperience = experience.filter(
    (exp) => exp.position || exp.company || exp.description
  );

  if (validExperience.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Experience
      </h2>

      {/* Experience Items */}
      <div className="mt-4 space-y-5">

        {validExperience.map((exp) => (
          <article key={exp.id}>

            {/* Job Title */}
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">

              <div>
                <h3 className="text-[15px] font-bold text-slate-900">
                  {exp.position || "Job Title"}
                </h3>

                {exp.company && (
                  <p className="text-[14px] font-medium text-slate-700">
                    {exp.company}
                    {exp.location && ` | ${exp.location}`}
                  </p>
                )}
              </div>

              {/* Dates */}
              {(exp.startDate || exp.endDate) && (
                <p className="shrink-0 text-[13px] font-medium text-slate-600 sm:text-right">
                  {exp.startDate || ""}
                  {exp.endDate
                    ? ` - ${exp.endDate}`
                    : ""}
                </p>
              )}

            </div>

            {/* Description */}
            {exp.description?.trim() && (
              <p className="mt-2 whitespace-pre-line text-[14px] leading-6 text-slate-700">
                {exp.description}
              </p>
            )}

          </article>
        ))}

      </div>

    </section>
  );
}

export default ExperienceSection;

