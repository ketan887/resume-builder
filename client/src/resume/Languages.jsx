
import { useContext } from "react";
import {
  Languages as LanguagesIcon,
  Plus,
  Trash2,
  Lightbulb,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";

const proficiencyLevels = [
  "Native",
  "Fluent",
  "Professional",
  "Intermediate",
  "Basic",
];

function Languages() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const languages = resumeData.languages || [];

  const addLanguage = () => {
    setResumeData((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          id: Date.now(),
          name: "",
          proficiency: "Native",
        },
      ],
    }));
  };

  const updateLanguage = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.map((language) =>
        language.id === id
          ? {
              ...language,
              [field]: value,
            }
          : language
      ),
    }));
  };

  const removeLanguage = (id) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.filter(
        (language) => language.id !== id
      ),
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <LanguagesIcon size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Languages
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add languages you can communicate in professionally.
            </p>
          </div>

        </div>
      </div>

      {/* Language Cards */}
      <div className="space-y-6">

        {languages.map((language, index) => (
          <div
            key={language.id}
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
                  Language {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Select the proficiency level that best represents your ability.
                </p>
              </div>

              {languages.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    removeLanguage(language.id)
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <InputField
                label="Language"
                placeholder="e.g. English"
                value={language.name}
                onChange={(e) =>
                  updateLanguage(
                    language.id,
                    "name",
                    e.target.value
                  )
                }
                required
              />

              <div className="space-y-2">

                <label className="block text-sm font-semibold text-slate-700">
                  Proficiency
                </label>

                <select
                  value={language.proficiency}
                  onChange={(e) =>
                    updateLanguage(
                      language.id,
                      "proficiency",
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border border-slate-300
                    bg-white
                    px-4 py-3
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                  "
                >
                  {proficiencyLevels.map((level) => (
                    <option
                      key={level}
                      value={level}
                    >
                      {level}
                    </option>
                  ))}
                </select>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Empty State */}
      {languages.length === 0 && (
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
          <LanguagesIcon
            size={30}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 font-medium text-slate-600">
            No languages added
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Add languages that are relevant to your professional profile.
          </p>
        </div>
      )}

      {/* Add Language */}
      <button
        type="button"
        onClick={addLanguage}
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
        Add Language
      </button>

      {/* ATS Tip */}
      <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">

        <Lightbulb
          size={20}
          className="mt-0.5 shrink-0 text-blue-600"
        />

        <div>
          <p className="text-sm font-semibold text-blue-900">
            ATS Language Tip
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-700">
            Keep language information concise. Only include languages
            you can confidently discuss or use in a professional
            environment.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Languages;

