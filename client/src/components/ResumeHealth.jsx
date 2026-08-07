import { Activity } from "lucide-react";
import { useContext } from "react";

import { ResumeContext } from "../context/ResumeContext";
import { analyzeResumeHealth } from "../utils/resumeHealth";

function Progress({ label, value }) {
  let color = "bg-red-500";

  if (value >= 80) color = "bg-green-500";
  else if (value >= 60) color = "bg-yellow-500";

  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`${color} h-full transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function ResumeHealth() {
  const { resumeData } = useContext(ResumeContext);

  const health = analyzeResumeHealth(resumeData);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">

      <div className="flex items-center gap-3 mb-6">
        <Activity className="text-indigo-600" size={28} />

        <div>
          <h2 className="text-xl font-bold">
            Resume Health
          </h2>

          <p className="text-sm text-slate-500">
            Content quality analysis
          </p>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-indigo-600">
          {health.overall}%
        </div>

        <p className="text-slate-500">
          Overall Health
        </p>
      </div>

      <div className="space-y-5">

        <Progress
          label="Readability"
          value={health.readability}
        />

        <Progress
          label="Keywords"
          value={health.keywords}
        />

        <Progress
          label="Action Verbs"
          value={health.actionVerbs}
        />

        <Progress
          label="Completeness"
          value={health.completeness}
        />

        <Progress
          label="Content Quality"
          value={health.contentQuality}
        />

      </div>

    </div>
  );
}

export default ResumeHealth;