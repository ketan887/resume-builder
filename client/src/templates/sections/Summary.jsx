import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Summary() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-2">
        Professional Summary
      </h2>

      <p className="text-slate-700 leading-8 text-justify">
  {resumeData.personalInfo.summary ||
    "Your professional summary will appear here."}
</p>
    </section>
  );
}

export default Summary;