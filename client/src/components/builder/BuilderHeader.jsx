import { useContext, useState } from "react";
import {
  Download,
  Sparkles,
  CheckCircle2,
  Eye,
  FileText,
  Loader2,
} from "lucide-react";

import { ResumeContext } from "../../context/ResumeContext";
import { downloadResume } from "../../utils/downloadResume";

// Backend API URL
const API_URL = import.meta.env.VITE_API_URL;

function BuilderHeader() {
  const { resumeData, setResumeData } =
    useContext(ResumeContext);

  const [isOptimizing, setIsOptimizing] =
    useState(false);

  const optimizeResume = async () => {
    try {
      setIsOptimizing(true);

      const response = await fetch(
        `${API_URL}/api/ai/optimize-resume`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeData,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to optimize resume"
        );
      }

      const optimized = data.optimizedResume;

      // Update only AI-optimized fields
      setResumeData((prev) => ({
        ...prev,

        personalInfo: {
          ...prev.personalInfo,

          summary:
            optimized.summary ||
            prev.personalInfo?.summary ||
            "",
        },

        experience: (prev.experience || []).map(
          (experience) => {
            const optimizedExperience =
              optimized.experience?.find(
                (item) =>
                  String(item.id) ===
                  String(experience.id)
              );

            return optimizedExperience
              ? {
                  ...experience,
                  description:
                    optimizedExperience.description ||
                    experience.description,
                }
              : experience;
          }
        ),

        projects: (prev.projects || []).map(
          (project) => {
            const optimizedProject =
              optimized.projects?.find(
                (item) =>
                  String(item.id) ===
                  String(project.id)
              );

            return optimizedProject
              ? {
                  ...project,
                  description:
                    optimizedProject.description ||
                    project.description,
                }
              : project;
          }
        ),
      }));

      alert("Resume optimized successfully! ✨");

    } catch (error) {
      console.error(
        "Resume Optimization Error:",
        error
      );

      alert(
        "Failed to optimize resume. Please try again."
      );

    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-200
        bg-white/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          max-w-[1920px]
          px-3
          sm:px-4
          md:px-6
          xl:px-8
        "
      >
        <div
          className="
            flex
            min-h-16
            items-center
            justify-between
            gap-2
          "
        >

          {/* ========================= */}
          {/* Logo / Title */}
          {/* ========================= */}

          <div className="flex min-w-0 items-center gap-2 sm:gap-3">

            <div
              className="
                flex
                h-9 w-9
                sm:h-11 sm:w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                text-white
                shadow-lg
              "
            >
              <FileText
                size={20}
                className="sm:h-[22px] sm:w-[22px]"
              />
            </div>

            <div className="min-w-0">
              <h1
                className="
                  truncate
                  text-sm
                  font-bold
                  text-slate-900
                  sm:text-xl
                "
              >
                ResumeBuilder Pro
              </h1>

              <p
                className="
                  hidden
                  text-xs
                  text-slate-500
                  sm:block
                "
              >
                Build ATS Friendly Resume
              </p>
            </div>

          </div>


          {/* ========================= */}
          {/* Actions */}
          {/* ========================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              sm:gap-2
              md:gap-4
            "
          >

            {/* ========================= */}
            {/* Save Status */}
            {/* ========================= */}

            <div
              className="
                hidden
                items-center
                gap-2
                text-sm
                text-green-600
                lg:flex
              "
            >
              <CheckCircle2 size={16} />
              <span>Saved just now</span>
            </div>


            {/* ========================= */}
            {/* Preview */}
            {/* ========================= */}

            <button
              type="button"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-2.5
                py-2
                text-sm
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                sm:px-3
                md:px-4
              "
              title="Preview"
            >
              <Eye size={18} />

              <span className="hidden md:inline">
                Preview
              </span>
            </button>


            {/* ========================= */}
            {/* AI Improve */}
            {/* ========================= */}

            <button
              type="button"
              onClick={optimizeResume}
              disabled={isOptimizing}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-violet-600
                px-2.5
                py-2
                text-sm
                font-medium
                text-white
                shadow-sm
                transition
                hover:bg-violet-700
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-70
                sm:px-3
                md:px-4
              "
              title="AI Improve"
            >

              {isOptimizing ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />

                  <span className="hidden sm:inline">
                    Optimizing...
                  </span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />

                  <span className="hidden sm:inline">
                    AI Improve
                  </span>
                </>
              )}

            </button>


            {/* ========================= */}
            {/* Download PDF */}
            {/* ========================= */}

            <button
              type="button"
              onClick={() =>
                downloadResume(resumeData)
              }
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-2.5
                py-2
                text-sm
                font-medium
                text-white
                shadow-sm
                transition
                hover:bg-blue-700
                active:scale-95
                sm:px-3
                md:px-4
              "
              title="Download PDF"
            >
              <Download size={18} />

              <span className="hidden sm:inline">
                <span className="hidden md:inline">
                  Download PDF
                </span>

                <span className="md:hidden">
                  Download
                </span>
              </span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}

export default BuilderHeader;