import { useContext, useState } from "react";
import {
  Briefcase,
  Plus,
  Trash2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";
import TextAreaField from "../components/ui/TextAreaField";

function Experience() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const experience = resumeData.experience || [];

  const [aiLoading, setAiLoading] = useState({});
  const [aiSuggestions, setAiSuggestions] = useState({});
  const [aiErrors, setAiErrors] = useState({});

  const handleChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              [field]: value,
            }
          : exp
      ),
    }));
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter(
        (exp) => exp.id !== id
      ),
    }));

    setAiSuggestions((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });

    setAiErrors((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  // =========================
  // AI IMPROVE EXPERIENCE
  // =========================

  const improveExperience = async (exp) => {
    if (!exp.description?.trim()) {
      setAiErrors((prev) => ({
        ...prev,
        [exp.id]: "Please add your experience description first.",
      }));

      return;
    }

    setAiLoading((prev) => ({
      ...prev,
      [exp.id]: true,
    }));

    setAiErrors((prev) => ({
      ...prev,
      [exp.id]: "",
    }));

    setAiSuggestions((prev) => ({
      ...prev,
      [exp.id]: "",
    }));

    try {
      const response = await fetch(
        "http://localhost:5000/api/experience/improve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: exp.description,
            position: exp.position,
            company: exp.company,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "AI improvement failed."
        );
      }

      setAiSuggestions((prev) => ({
        ...prev,
        [exp.id]: data.improvedDescription,
      }));
    } catch (error) {
      console.error("AI Experience Error:", error);

      setAiErrors((prev) => ({
        ...prev,
        [exp.id]:
          "Unable to improve experience. Please try again.",
      }));
    } finally {
      setAiLoading((prev) => ({
        ...prev,
        [exp.id]: false,
      }));
    }
  };

  // =========================
  // APPLY AI SUGGESTION
  // =========================

  const applySuggestion = (id) => {
    const suggestion = aiSuggestions[id];

    if (!suggestion) return;

    handleChange(id, "description", suggestion);

    setAiSuggestions((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  // =========================
  // CANCEL AI SUGGESTION
  // =========================

  const cancelSuggestion = (id) => {
    setAiSuggestions((prev) => ({
      ...prev,
      [id]: "",
    }));

    setAiErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Briefcase size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Experience
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add your work experience, internships, and professional roles.
            </p>
          </div>

        </div>
      </div>

      {/* Experience Entries */}
      <div className="space-y-6">

        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className="
              rounded-2xl
              border border-slate-200
              bg-slate-50/70
              p-5
              shadow-sm
              transition
              hover:shadow-md
            "
          >

            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-900">
                  Experience {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Focus on measurable responsibilities and achievements.
                </p>
              </div>

              {experience.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(exp.id)}
                  className="
                    flex items-center gap-2
                    rounded-lg
                    px-3 py-2
                    text-sm font-medium
                    text-red-600
                    transition
                    hover:bg-red-50
                  "
                >
                  <Trash2 size={16} />

                  <span className="hidden sm:inline">
                    Remove
                  </span>
                </button>
              )}

            </div>

            {/* Basic Details */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <InputField
                label="Company"
                placeholder="e.g. Google"
                value={exp.company}
                onChange={(e) =>
                  handleChange(
                    exp.id,
                    "company",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Job Title"
                placeholder="e.g. MERN Stack Developer Intern"
                value={exp.position}
                onChange={(e) =>
                  handleChange(
                    exp.id,
                    "position",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Location"
                placeholder="e.g. Bengaluru, India"
                value={exp.location}
                onChange={(e) =>
                  handleChange(
                    exp.id,
                    "location",
                    e.target.value
                  )
                }
              />

              <div />

              <InputField
                label="Start Date"
                placeholder="e.g. June 2025"
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(
                    exp.id,
                    "startDate",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="End Date"
                placeholder="e.g. August 2025 or Present"
                value={exp.endDate}
                onChange={(e) =>
                  handleChange(
                    exp.id,
                    "endDate",
                    e.target.value
                  )
                }
                required
              />

            </div>

            {/* Description */}
            <div className="mt-5">

              {/* Description Header */}
              <div className="mb-3 flex items-center justify-between">

                <label className="text-sm font-semibold text-slate-700">
                  Responsibilities & Achievements
                </label>

                <button
                  type="button"
                  onClick={() => improveExperience(exp)}
                  disabled={aiLoading[exp.id]}
                  className="
                    flex items-center gap-2
                    rounded-xl
                    bg-violet-600
                    px-4 py-2
                    text-sm font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-violet-700
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  <Sparkles size={16} />

                  {aiLoading[exp.id]
                    ? "Improving..."
                    : "AI Improve"}
                </button>

              </div>

              <TextAreaField
                label=""
                placeholder={`Example: 
• Developed responsive React applications used by 500+ users. 
• Integrated REST APIs using Node.js and Express. 
• Improved application performance by 25%.`}
                value={exp.description}
                onChange={(e) =>
                  handleChange(
                    exp.id,
                    "description",
                    e.target.value
                  )
                }
                rows={7}
                required
                helperText="Use action verbs and include measurable results whenever possible."
              />

              {/* AI Error */}
              {aiErrors[exp.id] && (
                <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                  {aiErrors[exp.id]}
                </div>
              )}

              {/* AI Suggestion */}
              {aiSuggestions[exp.id] && (
                <div className="mt-4 rounded-2xl border border-violet-200 bg-violet-50 p-5">

                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={18}
                      className="text-violet-600"
                    />

                    <h3 className="font-bold text-violet-900">
                      AI Improved Experience
                    </h3>
                  </div>

                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                    {aiSuggestions[exp.id]}
                  </p>

                  <div className="mt-5 flex gap-3">

                    <button
                      type="button"
                      onClick={() =>
                        applySuggestion(exp.id)
                      }
                      className="
                        rounded-xl
                        bg-violet-600
                        px-5 py-2
                        text-sm font-semibold
                        text-white
                        transition
                        hover:bg-violet-700
                      "
                    >
                      Apply
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        cancelSuggestion(exp.id)
                      }
                      className="
                        rounded-xl
                        border border-slate-300
                        bg-white
                        px-5 py-2
                        text-sm font-semibold
                        text-slate-700
                        transition
                        hover:bg-slate-100
                      "
                    >
                      Cancel
                    </button>

                  </div>

                </div>
              )}

              {/* ATS Tip */}
              <div className="mt-4 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">

                <Lightbulb
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    ATS Tip
                  </p>

                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    Start bullet points with action verbs such as
                    developed, implemented, optimized, automated,
                    designed, and deployed. Add numbers whenever
                    possible.
                  </p>
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Add Experience */}
      <button
        type="button"
        onClick={addExperience}
        className="
          flex w-full
          items-center justify-center gap-2
          rounded-xl
          border-2 border-dashed border-blue-300
          bg-blue-50
          px-5 py-3
          font-semibold
          text-blue-600
          transition
          hover:border-blue-500
          hover:bg-blue-100
        "
      >
        <Plus size={19} />

        Add Experience
      </button>

    </div>
  );
}

export default Experience;