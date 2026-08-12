
import { useContext } from "react";
import {
  Trophy,
  Plus,
  Trash2,
  Lightbulb,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";

function Achievements() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const achievements = resumeData.achievements || [];

  const addAchievement = () => {
    setResumeData((prev) => ({
      ...prev,
      achievements: [
        ...prev.achievements,
        {
          id: Date.now(),
          title: "",
          description: "",
          year: "",
        },
      ],
    }));
  };

  const updateAchievement = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.map(
        (achievement) =>
          achievement.id === id
            ? {
                ...achievement,
                [field]: value,
              }
            : achievement
      ),
    }));
  };

  const removeAchievement = (id) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter(
        (achievement) => achievement.id !== id
      ),
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Trophy size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Achievements
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Highlight accomplishments that demonstrate your impact.
            </p>
          </div>

        </div>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-6">

        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
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
                  Achievement {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Focus on measurable results and accomplishments.
                </p>
              </div>

              {achievements.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    removeAchievement(achievement.id)
                  }
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

            {/* Fields */}
            <div className="space-y-5">

              <InputField
                label="Achievement Title"
                placeholder="e.g. Winner - College Hackathon"
                value={achievement.title}
                onChange={(e) =>
                  updateAchievement(
                    achievement.id,
                    "title",
                    e.target.value
                  )
                }
                required
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                <div className="md:col-span-2">

                  <div className="space-y-2">

                    <label className="block text-sm font-semibold text-slate-700">
                      Description
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Describe what you achieved, how you achieved it, and the result..."
                      value={achievement.description}
                      onChange={(e) =>
                        updateAchievement(
                          achievement.id,
                          "description",
                          e.target.value
                        )
                      }
                      className="
                        w-full
                        resize-y
                        rounded-xl
                        border border-slate-300
                        bg-white
                        px-4 py-3
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />

                  </div>

                </div>

                <InputField
                  label="Year"
                  placeholder="2026"
                  value={achievement.year}
                  onChange={(e) =>
                    updateAchievement(
                      achievement.id,
                      "year",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Empty State */}
      {achievements.length === 0 && (
        <div
          className="
            rounded-2xl
            border-2 border-dashed
            border-slate-200
            bg-slate-50
            p-8
            text-center
          "
        >
          <Trophy
            size={30}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 font-medium text-slate-600">
            No achievements added
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Add awards, competitions, leadership achievements,
            or measurable accomplishments.
          </p>
        </div>
      )}

      {/* Add Achievement */}
      <button
        type="button"
        onClick={addAchievement}
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
        Add Achievement
      </button>

      {/* ATS Tip */}
      <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">

        <Lightbulb
          size={20}
          className="mt-0.5 shrink-0 text-blue-600"
        />

        <div>
          <p className="text-sm font-semibold text-blue-900">
            ATS Achievement Tip
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-700">
            Whenever possible, use numbers to demonstrate impact.
            For example, mention rankings, percentages, users,
            performance improvements, or competition results.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Achievements;

