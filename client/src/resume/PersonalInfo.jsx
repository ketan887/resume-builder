import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";

// Backend API URL
const API_URL = import.meta.env.VITE_API_URL;

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [aiError, setAiError] = useState("");

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // =========================
  // AI IMPROVE SUMMARY
  // =========================

  const improveSummary = async () => {
    const summary =
      resumeData.personalInfo.summary?.trim();

    if (!summary) {
      setAiError("Please write a summary first.");
      return;
    }

    setAiLoading(true);
    setAiSuggestion("");
    setAiError("");

    try {
      const response = await fetch(
        `${API_URL}/api/ai/improve-summary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            summary,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "AI improvement failed."
        );
      }

      setAiSuggestion(data.improvedSummary);
    } catch (error) {
      console.error("AI Improve Error:", error);

      setAiError(
        "Unable to improve your summary. Please try again."
      );
    } finally {
      setAiLoading(false);
    }
  };

  // =========================
  // APPLY AI SUGGESTION
  // =========================

  const applySuggestion = () => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        summary: aiSuggestion,
      },
    });

    setAiSuggestion("");
  };

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your contact information and professional
          summary.
        </p>
      </div>

      {/* Full Name */}
      <input
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="Full Name"
        name="fullName"
        value={resumeData.personalInfo.fullName}
        onChange={handleChange}
      />

      {/* Professional Title */}
      <input
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="Professional Title"
        name="title"
        value={resumeData.personalInfo.title}
        onChange={handleChange}
      />

      {/* Email */}
      <input
        type="email"
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="Email"
        name="email"
        value={resumeData.personalInfo.email}
        onChange={handleChange}
      />

      {/* Phone */}
      <input
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="Phone"
        name="phone"
        value={resumeData.personalInfo.phone}
        onChange={handleChange}
      />

      {/* Location */}
      <input
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="Location"
        name="location"
        value={resumeData.personalInfo.location}
        onChange={handleChange}
      />

      {/* LinkedIn */}
      <input
        type="url"
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="LinkedIn URL"
        name="linkedin"
        value={resumeData.personalInfo.linkedin}
        onChange={handleChange}
      />

      {/* GitHub */}
      <input
        type="url"
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        placeholder="GitHub URL"
        name="github"
        value={resumeData.personalInfo.github}
        onChange={handleChange}
      />

      {/* Summary */}
      <div className="space-y-3">

        <div className="flex items-center justify-between">
          <label className="font-semibold text-slate-700">
            Professional Summary
          </label>

          <button
            type="button"
            onClick={improveSummary}
            disabled={aiLoading}
            className="
              flex items-center gap-2
              rounded-xl
              bg-violet-600
              px-4 py-2
              text-sm font-semibold
              text-white
              transition
              hover:bg-violet-700
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {aiLoading
              ? "Improving..."
              : "✨ AI Improve"}
          </button>
        </div>

        <textarea
          className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          rows="6"
          placeholder="Write a professional summary..."
          name="summary"
          value={resumeData.personalInfo.summary}
          onChange={handleChange}
        />

        {/* AI Error */}
        {aiError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {aiError}
          </div>
        )}

        {/* AI Suggestion */}
        {aiSuggestion && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">

            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-violet-900">
                ✨ AI Improved Version
              </h3>
            </div>

            <p className="text-sm leading-6 text-slate-700">
              {aiSuggestion}
            </p>

            <div className="mt-5 flex gap-3">

              <button
                type="button"
                onClick={applySuggestion}
                className="
                  rounded-xl
                  bg-violet-600
                  px-5 py-2
                  text-sm font-semibold
                  text-white
                  hover:bg-violet-700
                "
              >
                Apply
              </button>

              <button
                type="button"
                onClick={() => setAiSuggestion("")}
                className="
                  rounded-xl
                  border border-slate-300
                  bg-white
                  px-5 py-2
                  text-sm font-semibold
                  text-slate-700
                  hover:bg-slate-100
                "
              >
                Cancel
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PersonalInfo;