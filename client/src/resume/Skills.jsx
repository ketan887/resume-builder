import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) return;

    if (resumeData.skills.includes(trimmedSkill)) return;

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, trimmedSkill],
    });

    setSkill("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const removeSkill = (index) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="flex gap-3">
        <input
          className="flex-1 border rounded-lg p-3"
          placeholder="React, Node.js, MongoDB..."
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={addSkill}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {resumeData.skills.map((item, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            {item}

            <button onClick={() => removeSkill(index)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;