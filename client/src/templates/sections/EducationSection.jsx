import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function EducationSection() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-2">
        Education
      </h2>

      <div className="mt-4 space-y-6">
  {resumeData.education.map((edu) => (
    <div
      key={edu.id}
      className="border-l-4 border-blue-600 pl-4"
    >
      <h3 className="text-lg font-semibold text-slate-800">
        {edu.degree || "Degree"}
      </h3>

      <p className="font-medium text-slate-700">
        {edu.institution}
      </p>

      <p className="text-sm text-slate-500">
        {edu.location} • {edu.startYear} - {edu.endYear}
      </p>
    </div>
  ))}
</div>
    </section>
  );
}

export default EducationSection;