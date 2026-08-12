
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function SkillsSection() {
  const { resumeData } = useContext(ResumeContext);

  const skills = resumeData?.skills || [];

  if (skills.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Technical Skills
      </h2>

      {/* Skills */}
      <p className="mt-3 text-[14px] leading-6 text-slate-700">
        {skills.join(", ")}
      </p>

    </section>
  );
}

export default SkillsSection;

