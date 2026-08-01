import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Languages() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addLanguage = () => {
    setResumeData({
      ...resumeData,
      languages: [
        ...resumeData.languages,
        {
          id: Date.now(),
          name: "",
          proficiency: "Native",
        },
      ],
    });
  };

  const updateLanguage = (id, field, value) => {
    setResumeData({
      ...resumeData,
      languages: resumeData.languages.map((language) =>
        language.id === id
          ? { ...language, [field]: value }
          : language
      ),
    });
  };

  const removeLanguage = (id) => {
    setResumeData({
      ...resumeData,
      languages: resumeData.languages.filter(
        (language) => language.id !== id
      ),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Languages
      </h2>

      {resumeData.languages.map((language) => (
        <div
          key={language.id}
          className="border rounded-xl p-5 mb-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Language Name"
            value={language.name}
            onChange={(e) =>
              updateLanguage(language.id, "name", e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />

          <select
            value={language.proficiency}
            onChange={(e) =>
              updateLanguage(language.id, "proficiency", e.target.value)
            }
            className="w-full border rounded-lg p-3"
          >
            <option value="Native">Native</option>
            <option value="Fluent">Fluent</option>
            <option value="Professional">Professional</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Basic">Basic</option>
          </select>

          <button
            onClick={() => removeLanguage(language.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Remove Language
          </button>
        </div>
      ))}

      <button
        onClick={addLanguage}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        + Add Language
      </button>
    </div>
  );
}

export default Languages;