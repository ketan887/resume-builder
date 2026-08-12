
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Summary() {
  const { resumeData } = useContext(ResumeContext);

  const summary = resumeData?.personalInfo?.summary;

  if (!summary?.trim()) {
    return null;
  }

  return (
    <section className="mt-5">
      
      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Professional Summary
      </h2>

      {/* Summary Content */}
      <p className="mt-3 text-[14px] leading-6 text-slate-700">
        {summary}
      </p>

    </section>
  );
}

export default Summary;
