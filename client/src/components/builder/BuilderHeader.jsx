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

  const [isOptimizing, setIsOptimizing] = useState(false);

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

      // Update only the AI-optimized fields
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 xl:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
              <FileText size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                ResumeBuilder Pro
              </h1>

              <p className="text-xs text-slate-500">
                Build ATS Friendly Resume
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-4 md:flex">

            {/* Save Status */}
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle2 size={16} />
              <span>Saved just now</span>
            </div>

            {/* Preview */}
            <button
              type="button"
              className="
                flex items-center gap-2
                rounded-xl
                border border-slate-200
                bg-white
                px-4 py-2
                text-sm font-medium
                text-slate-700
                transition
                hover:bg-slate-100
              "
            >
              <Eye size={18} />
              Preview
            </button>

            {/* AI Improve */}
            <button
              type="button"
              onClick={optimizeResume}
              disabled={isOptimizing}
              className="
                flex items-center gap-2
                rounded-xl
                bg-violet-600
                px-4 py-2
                text-sm font-medium
                text-white
                shadow-sm
                transition
                hover:bg-violet-700
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isOptimizing ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Optimizing...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  AI Improve
                </>
              )}
            </button>

            {/* Download PDF */}
            <button
              type="button"
              onClick={() =>
                downloadResume(resumeData)
              }
              className="
                flex items-center gap-2
                rounded-xl
                bg-blue-600
                px-4 py-2
                text-sm font-medium
                text-white
                shadow-sm
                transition
                hover:bg-blue-700
                active:scale-95
              "
            >
              <Download size={18} />
              Download PDF
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default BuilderHeader;