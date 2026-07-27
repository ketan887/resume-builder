import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Experience() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
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
    });
  };

  const removeExperience = (id) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Experience</h2>

      {resumeData.experience.map((exp) => (
        <div
          key={exp.id}
          className="border rounded-xl p-5 mb-5 space-y-3"
        >
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              handleChange(exp.id, "company", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Job Title"
            value={exp.position}
            onChange={(e) =>
              handleChange(exp.id, "position", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Location"
            value={exp.location}
            onChange={(e) =>
              handleChange(exp.id, "location", e.target.value)
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              className="border rounded-lg p-3"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) =>
                handleChange(exp.id, "startDate", e.target.value)
              }
            />

            <input
              className="border rounded-lg p-3"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) =>
                handleChange(exp.id, "endDate", e.target.value)
              }
            />
          </div>

          <textarea
            className="w-full border rounded-lg p-3"
            rows="4"
            placeholder="Describe your work..."
            value={exp.description}
            onChange={(e) =>
              handleChange(exp.id, "description", e.target.value)
            }
          />

          {resumeData.experience.length > 1 && (
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-red-600 font-semibold"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addExperience}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        + Add Experience
      </button>
    </div>
  );
}

export default Experience;