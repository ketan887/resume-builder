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
      value: sectionScores.personal,
      max: 10,
    },
    {
      name: "Education",
      value: sectionScores.education,
      max: 10,
    },
    {
      name: "Experience",
      value: sectionScores.experience,
      max: 20,
    },
    {
      name: "Projects",
      value: sectionScores.projects,
      max: 20,
    },
    {
      name: "Skills",
      value: sectionScores.skills,
      max: 15,
    },
    {
      name: "Certificates",
      value: sectionScores.certificates,
      max: 5,
    },
    {
      name: "Achievements",
      value: sectionScores.achievements,
      max: 5,
    },
    {
      name: "Quality",
      value: sectionScores.quality,
      max: 15,
    },
  ];

  const scoreColor =
    score >= 85
      ? "bg-green-500"
      : score >= 70
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">
        <Award className="text-blue-600" size={28} />

        <div>
          <h2 className="text-xl font-bold">
            ATS Analysis
          </h2>

          <p className="text-gray-500 text-sm">
            Resume Quality Report
          </p>
        </div>
      </div>

      {/* Score */}

      <div className="text-center">

        <h1 className="text-6xl font-bold text-blue-600">
          {score}
        </h1>

        <p className="text-gray-500">
          out of 100
        </p>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

          <div
            className={`${scoreColor} h-full transition-all duration-700`}
            style={{
              width: `${score}%`,
            }}
          />

        </div>

      </div>

      {/* Section Scores */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Section Analysis
        </h3>

        <div className="space-y-3">

          {sections.map((section) => {

            const percent =
              (section.value / section.max) * 100;

            return (

              <div key={section.name}>

                <div className="flex justify-between text-sm font-medium">

                  <span>
                    {section.name}
                  </span>

                  <span>
                    {section.value}/{section.max}
                  </span>

                </div>

                <div className="mt-1 h-2 rounded-full bg-gray-200">

                  <div
                    className={`h-full rounded-full ${
                      percent >= 80
                        ? "bg-green-500"
                        : percent >= 60
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
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

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Suggestions
        </h3>

        {suggestions.length === 0 ? (

          <div className="flex items-center gap-2 text-green-600">

            <CheckCircle size={20} />

            <span>
              Excellent! Your resume is ATS ready.
            </span>

          </div>

        ) : (

          <div className="space-y-3">

            {suggestions.map((item, index) => (

              <div
                key={index}
                className="flex gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3"
              >

                <AlertTriangle
                  className="text-yellow-600"
                  size={18}
                />

                <p className="text-sm">
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