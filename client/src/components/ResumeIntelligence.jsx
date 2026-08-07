import { useContext } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Brain,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import { analyzeResume } from "../utils/resumeIntelligence";

function ResumeIntelligence() {
  const { resumeData } = useContext(ResumeContext);

  const {
    strengths,
    improvements,
    missing,
  } = analyzeResume(resumeData);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mt-6">

      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-violet-600" size={28} />

        <div>
          <h2 className="text-xl font-bold">
            Resume Intelligence
          </h2>

          <p className="text-gray-500 text-sm">
            AI-inspired resume quality insights
          </p>
        </div>
      </div>

      {/* Strengths */}

      <div className="mb-8">

        <h3 className="font-semibold text-green-700 mb-4">
          🟢 Strengths
        </h3>

        <div className="space-y-3">

          {strengths.length === 0 ? (
            <p className="text-sm text-gray-500">
              No strengths detected yet.
            </p>
          ) : (
            strengths.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 p-3 rounded-lg bg-green-50 border border-green-200"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-600 mt-0.5"
                />

                <span className="text-sm">
                  {item}
                </span>
              </div>
            ))
          )}

        </div>

      </div>

      {/* Improvements */}

      <div className="mb-8">

        <h3 className="font-semibold text-yellow-700 mb-4">
          🟡 Improvements
        </h3>

        <div className="space-y-3">

          {improvements.length === 0 ? (
            <p className="text-sm text-gray-500">
              No improvements needed.
            </p>
          ) : (
            improvements.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200"
              >
                <AlertTriangle
                  size={18}
                  className="text-yellow-600 mt-0.5"
                />

                <span className="text-sm">
                  {item}
                </span>
              </div>
            ))
          )}

        </div>

      </div>

      {/* Missing */}

      <div>

        <h3 className="font-semibold text-red-700 mb-4">
          🔴 Missing
        </h3>

        <div className="space-y-3">

          {missing.length === 0 ? (
            <p className="text-sm text-gray-500">
              Nothing important is missing.
            </p>
          ) : (
            missing.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 p-3 rounded-lg bg-red-50 border border-red-200"
              >
                <XCircle
                  size={18}
                  className="text-red-600 mt-0.5"
                />

                <span className="text-sm">
                  {item}
                </span>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default ResumeIntelligence;