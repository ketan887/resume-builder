
import { useContext, useState } from "react";
import {
  Wrench,
  Plus,
  X,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";

const suggestedSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "TypeScript",
  "REST API",
];

function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [skill, setSkill] = useState("");

  const skills = resumeData.skills || [];

  const addSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    const alreadyExists = skills.some(
      (item) =>
        item.toLowerCase() === trimmedSkill.toLowerCase()
    );

    if (alreadyExists) {
      setSkill("");
      return;
    }

    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, trimmedSkill],
    }));

    setSkill("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const removeSkill = (index) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const addSuggestedSkill = (suggestedSkill) => {
    const alreadyExists = skills.some(
      (item) =>
        item.toLowerCase() ===
        suggestedSkill.toLowerCase()
    );

    if (alreadyExists) return;

    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, suggestedSkill],
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Wrench size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Skills
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add technical skills that match your target jobs.
            </p>
          </div>

        </div>
      </div>

      {/* Add Skill */}
      <section>

        <div className="mb-3">
          <h3 className="font-semibold text-slate-900">
            Add Technical Skill
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Type a skill and press Enter or click Add.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. React, Node.js, MongoDB"
            className="
              min-w-0
              flex-1
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

          <button
            type="button"
            onClick={addSkill}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6 py-3
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-blue-700
              active:scale-95
            "
          >
            <Plus size={18} />
            Add
          </button>

        </div>

      </section>

      {/* Current Skills */}
      <section>

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h3 className="font-semibold text-slate-900">
              Your Skills
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {skills.length}{" "}
              {skills.length === 1 ? "skill" : "skills"} added
            </p>
          </div>

          {skills.length >= 5 && (
            <div className="flex items-center gap-1.5 text-xs font-medium text-green-600">
              <CheckCircle2 size={15} />
              ATS minimum reached
            </div>
          )}

        </div>

        {skills.length === 0 ? (

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
            <Wrench
              size={28}
              className="mx-auto text-slate-400"
            />

            <p className="mt-3 text-sm font-medium text-slate-600">
              No skills added yet
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Add at least 5 relevant technical skills.
            </p>
          </div>

        ) : (

          <div className="flex flex-wrap gap-3">

            {skills.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border border-blue-200
                  bg-blue-50
                  px-4 py-2
                  text-sm
                  font-medium
                  text-blue-700
                "
              >
                <span>{item}</span>

                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  aria-label={`Remove ${item}`}
                  className="
                    flex
                    h-5 w-5
                    items-center
                    justify-center
                    rounded-full
                    text-blue-500
                    transition
                    hover:bg-blue-200
                    hover:text-blue-800
                  "
                >
                  <X size={13} />
                </button>

              </div>
            ))}

          </div>

        )}

      </section>

      {/* Suggested Skills */}
      <section>

        <div className="mb-4">
          <h3 className="font-semibold text-slate-900">
            Suggested Technical Skills
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Click a skill to add it to your resume.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">

          {suggestedSkills.map((suggestedSkill) => {

            const exists = skills.some(
              (item) =>
                item.toLowerCase() ===
                suggestedSkill.toLowerCase()
            );

            return (
              <button
                key={suggestedSkill}
                type="button"
                disabled={exists}
                onClick={() =>
                  addSuggestedSkill(suggestedSkill)
                }
                className={`
                  rounded-lg
                  border
                  px-3 py-2
                  text-sm
                  transition
                  ${
                    exists
                      ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  }
                `}
              >
                {exists ? "✓ " : "+ "}
                {suggestedSkill}
              </button>
            );
          })}

        </div>

      </section>

      {/* ATS Tip */}
      <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">

        <Lightbulb
          size={20}
          className="mt-0.5 shrink-0 text-blue-600"
        />

        <div>
          <p className="text-sm font-semibold text-blue-900">
            ATS Skills Tip
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-700">
            Don't add every technology you know. Focus on skills
            that are relevant to the job you're applying for.
            Matching important keywords from the job description
            can improve your ATS compatibility.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Skills;

