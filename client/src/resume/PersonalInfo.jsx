import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        Personal Information
      </h2>

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Full Name"
        name="fullName"
        value={resumeData.personalInfo.fullName}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Professional Title"
        name="title"
        value={resumeData.personalInfo.title}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Email"
        name="email"
        value={resumeData.personalInfo.email}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Phone"
        name="phone"
        value={resumeData.personalInfo.phone}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Location"
        name="location"
        value={resumeData.personalInfo.location}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="LinkedIn URL"
        name="linkedin"
        value={resumeData.personalInfo.linkedin}
        onChange={handleChange}
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="GitHub URL"
        name="github"
        value={resumeData.personalInfo.github}
        onChange={handleChange}
      />

      <textarea
        className="w-full border rounded-lg p-3"
        rows="4"
        placeholder="Professional Summary"
        name="summary"
        value={resumeData.personalInfo.summary}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalInfo;