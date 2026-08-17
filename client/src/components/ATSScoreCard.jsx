import { useContext } from "react";
import {
  CheckCircle,
  AlertTriangle,
  Award,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import { calculateATSScore } from "../utils/atsScore";

function ATSScoreCard() {
  const { resumeData } = useContext(ResumeContext);

  const {
    score,
    suggestions,
    sectionScores,
  } = calculateATSScore(resumeData);

  const sections = [
    {
      name: "Contact",
      value: sectionScores.personal || 0,
      max: 10,
    },
    {
      name: "Summary",
      value: sectionScores.summary || 0,
      max: 10,
    },
    {
      name: "Education",
      value: sectionScores.education || 0,
      max: 10,
    },
    {
      name: "Experience",
      value: sectionScores.experience || 0,
      max: 20,
    },
    {
      name: "Projects",
      value: sectionScores.projects || 0,
      max: 20,
    },
    {
      name: "Skills",
      value: sectionScores.skills || 0,
      max: 15,
    },
    {
      name: "Certificates",
      value: sectionScores.certificates || 0,
      max: 5,
    },
    {
      name: "Achievements",
      value: sectionScores.achievements || 0,
      max: 5,
    },
    {
      name: "Languages",
      value: sectionScores.languages || 0,
      max: 5,
    },
  ];

  const scoreColor =
    score >= 85
      ? "bg-green-500"
      : score >= 70
      ? "bg-yellow-500"
      : "bg-red-500";

  const scoreTextColor =
    score >= 85
      ? "text-green-600"
      : score >= 70
      ? "text-yellow-600"
      : "text-red-600";

  const scoreMessage =
    score >= 85
      ? "Excellent ATS compatibility"
      : score >= 70
      ? "Good ATS compatibility"
      : score >= 50
      ? "Needs some improvement"
      : "Needs significant improvement";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <Award
            className="text-blue-600"
            size={24}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            ATS Analysis
          </h2>

          <p className="text-sm text-gray-500">
            Resume Quality Report
          </p>
        </div>

      </div>

      {/* Score */}
      <div className="text-center">

        <h1
          className={`text-6xl font-bold ${scoreTextColor}`}
        >
          {score}
        </h1>

        <p className="text-sm text-gray-500">
          out of 100
        </p>

        <p
          className={`mt-2 text-sm font-semibold ${scoreTextColor}`}
        >
          {scoreMessage}
        </p>

      </div>

      {/* Overall Progress */}
      <div className="mt-5">

        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">

          <div
            className={`${scoreColor} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${score}%`,
            }}
          />

        </div>

      </div>

      {/* Section Scores */}
      <div className="mt-7">

        <div className="mb-4 flex items-center justify-between">

          <h3 className="text-lg font-semibold text-slate-900">
            Section Analysis
          </h3>

          <span className="text-xs text-gray-500">
            Live
          </span>

        </div>

        <div className="space-y-3">

          {sections.map((section) => {

            const percent =
              section.max > 0
                ? (section.value / section.max) * 100
                : 0;

            const barColor =
              percent >= 80
                ? "bg-green-500"
                : percent >= 60
                ? "bg-yellow-500"
                : "bg-red-500";

            return (
              <div key={section.name}>

                <div className="flex items-center justify-between text-sm">

                  <span className="font-medium text-slate-700">
                    {section.name}
                  </span>

                  <span className="text-xs font-medium text-slate-500">
                    {section.value}/{section.max}
                  </span>

                </div>

                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-200">

                  <div
                    className={`${barColor} h-full rounded-full transition-all duration-500`}
                    style={{
                      width: `${percent}%`,
                    }}
                  />

                </div>

              </div>
            );

          })}

        </div>

      </div>

      {/* Suggestions */}
      <div className="mt-7">

        <div className="mb-4 flex items-center justify-between">

          <h3 className="text-lg font-semibold text-slate-900">
            ATS Recommendations
          </h3>

          {suggestions.length > 0 && (
            <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700">
              {suggestions.length} issue
              {suggestions.length !== 1 ? "s" : ""}
            </span>
          )}

        </div>

        {suggestions.length === 0 ? (

          <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">

            <CheckCircle
              className="mt-0.5 shrink-0 text-green-600"
              size={19}
            />

            <div>
              <p className="text-sm font-semibold text-green-800">
                Excellent!
              </p>

              <p className="mt-1 text-xs leading-5 text-green-700">
                Your resume meets the current ATS checks.
              </p>
            </div>

          </div>

        ) : (

          <div className="space-y-2">

            {suggestions.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3"
              >

                <AlertTriangle
                  className="mt-0.5 shrink-0 text-yellow-600"
                  size={17}
                />

                <p className="text-sm leading-5 text-slate-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default ATSScoreCard;