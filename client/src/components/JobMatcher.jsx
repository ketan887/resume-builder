import { useContext, useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import { matchResume } from "../utils/jobMatcher";

function JobMatcher() {
  const { resumeData } = useContext(ResumeContext);

  const [jobDescription, setJobDescription] = useState("");

  const result = matchResume(
    resumeData,
    jobDescription
  );

  let color = "bg-red-500";

  if (result.score >= 80) color = "bg-green-500";
  else if (result.score >= 60) color = "bg-yellow-500";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <Briefcase
          className="text-blue-600"
          size={28}
        />

        <div>

          <h2 className="text-xl font-bold">
            Job Description Match
          </h2>

          <p className="text-sm text-slate-500">
            Compare your resume with any job posting.
          </p>

        </div>

      </div>

      {/* Textarea */}

      <textarea
        rows={8}
        placeholder="Paste the complete Job Description here..."
        className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      {/* No JD */}

      {!jobDescription.trim() ? (

        <div className="mt-6 text-center text-slate-500">

          Paste a Job Description to begin analysis.

        </div>

      ) : (

        <>

          {/* Score */}

          <div className="mt-8 text-center">

            <div className="text-5xl font-bold text-blue-600">

              {result.score}%

            </div>

            <p className="text-slate-500">

              Resume Match

            </p>

          </div>

          {/* Progress */}

          <div className="mt-5 h-3 rounded-full bg-slate-200 overflow-hidden">

            <div
              className={`${color} h-full transition-all duration-700`}
              style={{
                width: `${result.score}%`,
              }}
            />

          </div>

          {/* Matching */}

          <div className="mt-8">

            <h3 className="font-semibold text-green-700 mb-3">

              Matching Skills

            </h3>

            <div className="space-y-2">

              {result.matched.length === 0 ? (

                <p className="text-sm text-slate-500">

                  No matching skills detected.

                </p>

              ) : (

                result.matched.map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <span>{skill}</span>

                  </div>

                ))

              )}

            </div>

          </div>

          {/* Missing */}

          <div className="mt-8">

            <h3 className="font-semibold text-red-700 mb-3">

              Missing Skills

            </h3>

            <div className="space-y-2">

              {result.missing.length === 0 ? (

                <p className="text-sm text-slate-500">

                  Great! No missing skills detected.

                </p>

              ) : (

                result.missing.map((skill) => (

                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3"
                  >

                    <XCircle
                      size={18}
                      className="text-red-600"
                    />

                    <span>{skill}</span>

                  </div>

                ))

              )}

            </div>

          </div>

          {/* Suggestions */}

          <div className="mt-8">

            <h3 className="font-semibold mb-3">

              Suggestions

            </h3>

            <div className="space-y-2">

              {result.suggestions.map((tip, index) => (

                <div
                  key={index}
                  className="flex gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3"
                >

                  <Sparkles
                    className="text-blue-600"
                    size={18}
                  />

                  <span className="text-sm">

                    {tip}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </>

      )}

    </div>
  );
}

export default JobMatcher;