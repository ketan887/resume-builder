import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo } = resumeData;

  return (
    <div className="bg-gray-200 p-6 rounded-xl">
      <div className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-xl p-10">

        {/* Header */}
        <div className="border-b pb-6">

          <h1 className="text-4xl font-bold text-slate-800">
            {personalInfo.fullName || "Your Name"}
          </h1>

          <h2 className="text-xl text-blue-600 mt-2">
            {personalInfo.title || "Professional Title"}
          </h2>

          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
          </div>

        </div>

        {/* Summary */}
        <section className="mt-8">

          <h3 className="text-xl font-bold border-b pb-2">
            Professional Summary
          </h3>

          <p className="mt-4 text-gray-700 leading-7">
            {personalInfo.summary ||
              "Your professional summary will appear here."}
          </p>

        </section>


        <section className="mt-8">
  <h3 className="text-xl font-bold border-b pb-2">
    Education
  </h3>

  <div className="mt-4 space-y-4">
    {resumeData.education.map((edu) => (
      <div key={edu.id}>
        <h4 className="font-semibold">
          {edu.degree || "Degree"}
        </h4>

        <p className="text-gray-700">
          {edu.institution}
        </p>

        <p className="text-sm text-gray-500">
          {edu.location} • {edu.startYear} - {edu.endYear}
        </p>
      </div>
    ))}
  </div>
</section>


<section className="mt-8">
  <h3 className="text-xl font-bold border-b pb-2">
    Experience
  </h3>

  <div className="mt-4 space-y-5">
    {resumeData.experience.map((exp) => (
      <div key={exp.id}>
        <h4 className="font-semibold">
          {exp.position || "Job Title"}
        </h4>

        <p className="text-gray-700">
          {exp.company}
        </p>

        <p className="text-sm text-gray-500">
          {exp.location} • {exp.startDate} - {exp.endDate}
        </p>

        <p className="mt-2 text-gray-700">
          {exp.description}
        </p>
      </div>
    ))}
  </div>
</section>

      </div>
    </div>
  );
}

export default ResumePreview;