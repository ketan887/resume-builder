import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function SkillsSection() {
  const { resumeData } = useContext(ResumeContext);

  if (resumeData.skills.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-2">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3 mt-4">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
           className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium hover:bg-blue-100 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;