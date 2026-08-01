import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import SectionHeading from "../../components/ui/SectionHeading";

function ExperienceSection() {
  const { resumeData } = useContext(ResumeContext);

  if (resumeData.experience.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Experience" />

      <div className="space-y-6">
        {resumeData.experience.map((exp) => (
          <div
            key={exp.id}
            className="border-l-4 border-blue-600 pl-4"
          >
            <div className="flex justify-between items-start flex-wrap">

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {exp.position || "Job Title"}
                </h3>

                <p className="font-medium text-slate-700">
                  {exp.company}
                </p>
              </div>

              <p className="text-sm text-slate-500">
                {exp.startDate} - {exp.endDate}
              </p>

            </div>

            {exp.location && (
              <p className="text-sm text-slate-500 mt-1">
                📍 {exp.location}
              </p>
            )}

            {exp.description && (
              <p className="mt-3 text-slate-700 leading-7">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;