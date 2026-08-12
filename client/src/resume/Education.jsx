
import { useContext } from "react";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";

function Education() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const education = resumeData.education || [];

  const handleChange = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id
          ? {
              ...edu,
              [field]: value,
            }
          : edu
      ),
    }));
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          institution: "",
          location: "",
          startYear: "",
          endYear: "",
        },
      ],
    }));
  };

  const removeEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (edu) => edu.id !== id
      ),
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <GraduationCap size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Education
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add your academic qualifications and degrees.
            </p>
          </div>

        </div>
      </div>

      {/* Education Entries */}
      <div className="space-y-6">

        {education.map((edu, index) => (
          <div
            key={edu.id}
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
                  Education {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Add your degree and institution details.
                </p>
              </div>

              {education.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEducation(edu.id)}
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

            {/* Form */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <InputField
                label="Degree / Qualification"
                placeholder="e.g. Master of Computer Applications"
                value={edu.degree}
                onChange={(e) =>
                  handleChange(
                    edu.id,
                    "degree",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Institution"
                placeholder="e.g. ABC University"
                value={edu.institution}
                onChange={(e) =>
                  handleChange(
                    edu.id,
                    "institution",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Location"
                placeholder="e.g. Pune, Maharashtra"
                value={edu.location}
                onChange={(e) =>
                  handleChange(
                    edu.id,
                    "location",
                    e.target.value
                  )
                }
              />

              <InputField
                label="Start Year"
                placeholder="e.g. 2025"
                value={edu.startYear}
                onChange={(e) =>
                  handleChange(
                    edu.id,
                    "startYear",
                    e.target.value
                  )
                }
                type="text"
              />

              <InputField
                label="End Year"
                placeholder="e.g. 2027 or Present"
                value={edu.endYear}
                onChange={(e) =>
                  handleChange(
                    edu.id,
                    "endYear",
                    e.target.value
                  )
                }
                type="text"
              />

            </div>

          </div>
        ))}

      </div>

      {/* Add Education */}
      <button
        type="button"
        onClick={addEducation}
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
        Add Education
      </button>

    </div>
  );
}

export default Education;

