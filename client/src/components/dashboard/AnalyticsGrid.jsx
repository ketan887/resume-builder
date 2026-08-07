import ATSScoreCard from "../ATSScoreCard";
import ResumeHealth from "../ResumeHealth";
import ResumeIntelligence from "../ResumeIntelligence";

function AnalyticsGrid() {
  return (
    <section className="mt-10">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Resume Analytics
          </h2>

          <p className="text-slate-500">
            Improve your resume quality and ATS performance
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <ATSScoreCard />

        <ResumeHealth />

        <ResumeIntelligence />

      </div>

    </section>
  );
}

export default AnalyticsGrid;