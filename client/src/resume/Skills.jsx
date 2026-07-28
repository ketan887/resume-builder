import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";
import skillSuggestions from "../data/skillSuggestions";

function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [skill, setSkill] = useState("");

  const addSkill = (value) => {
    const newSkill = value.trim();

    if (!newSkill) return;

    const exists = resumeData.skills.some(
      (item) => item.toLowerCase() === newSkill.toLowerCase()
    );

    if (exists) {
      setSkill("");
      return;
    }

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill],
    });

    setSkill("");
  };

  const removeSkill = (index) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(skill);
    }

    if (
      e.key === "Backspace" &&
      skill === "" &&
      resumeData.skills.length > 0
    ) {
      removeSkill(resumeData.skills.length - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <input
        type="text"
        placeholder="Type a skill and press Enter..."
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Selected Skills */}
      <div className="flex flex-wrap gap-3 mt-6">
        {resumeData.skills.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            <span>{item}</span>

            <button
              onClick={() => removeSkill(index)}
              className="font-bold hover:text-red-200 transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Suggested Skills */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">
          Suggested Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {skillSuggestions
            .filter(
              (item) =>
                !resumeData.skills.some(
                  (skill) =>
                    skill.toLowerCase() === item.toLowerCase()
                )
            )
            .map((item) => (
              <button
                key={item}
                onClick={() => addSkill(item)}
                className="border border-slate-300 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;