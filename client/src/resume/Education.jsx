import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Education() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (id, field, value) => {
    const updated = resumeData.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );

    setResumeData({
      ...resumeData,
      education: updated,
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now(),
          degree: "",
          institution: "",
          location: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeEducation = (id) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Education</h2>

      {resumeData.education.map((edu) => (
        <div
          key={edu.id}
          className="border rounded-xl p-5 mb-5 space-y-3"
        >
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) =>
              handleChange(edu.id, "degree", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) =>
              handleChange(edu.id, "institution", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Location"
            value={edu.location}
            onChange={(e) =>
              handleChange(edu.id, "location", e.target.value)
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              className="border rounded-lg p-3"
              placeholder="Start Year"
              value={edu.startYear}
              onChange={(e) =>
                handleChange(edu.id, "startYear", e.target.value)
              }
            />

            <input
              className="border rounded-lg p-3"
              placeholder="End Year"
              value={edu.endYear}
              onChange={(e) =>
                handleChange(edu.id, "endYear", e.target.value)
              }
            />
          </div>

          {resumeData.education.length > 1 && (
            <button
              onClick={() => removeEducation(edu.id)}
              className="text-red-600 font-semibold"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addEducation}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        + Add Education
      </button>
    </div>
  );
}

export default Education;