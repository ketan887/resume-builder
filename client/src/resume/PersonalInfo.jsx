import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

import InputField from "../components/ui/InputField";
import TextAreaField from "../components/ui/TextAreaField";

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const personalInfo = resumeData.personalInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="space-y-8">

      {/* Basic Information */}
      <section>

        <div className="mb-5">
          <h3 className="text-lg font-bold text-slate-900">
            Basic Information
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Add the information recruiters need to identify you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            label="Full Name"
            name="fullName"
            placeholder="e.g. Ketan Lokhande"
            value={personalInfo.fullName}
            onChange={handleChange}
            required
          />

          <InputField
            label="Professional Title"
            name="title"
            placeholder="e.g. MERN Stack Developer"
            value={personalInfo.title}
            onChange={handleChange}
            required
            helperText="Use the job title you're targeting."
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="e.g. ketan@example.com"
            value={personalInfo.email}
            onChange={handleChange}
            required
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="e.g. +91 9876543210"
            value={personalInfo.phone}
            onChange={handleChange}
            required
          />

          <InputField
            label="Location"
            name="location"
            placeholder="e.g. Maharashtra, India"
            value={personalInfo.location}
            onChange={handleChange}
          />

          <InputField
            label="Portfolio"
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={personalInfo.portfolio}
            onChange={handleChange}
          />

        </div>

      </section>

      {/* Online Profiles */}
      <section>

        <div className="mb-5">
          <h3 className="text-lg font-bold text-slate-900">
            Professional Profiles
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Add links to your professional profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            label="LinkedIn"
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/yourname"
            value={personalInfo.linkedin}
            onChange={handleChange}
            helperText="Use your complete LinkedIn URL."
          />

          <InputField
            label="GitHub"
            name="github"
            type="url"
            placeholder="https://github.com/yourname"
            value={personalInfo.github}
            onChange={handleChange}
            helperText="Add your GitHub profile URL."
          />

        </div>

      </section>

      {/* Professional Summary */}
      <section>

        <div className="mb-5">
          <h3 className="text-lg font-bold text-slate-900">
            Professional Summary
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Write a concise summary highlighting your skills, experience,
            and career goals.
          </p>
        </div>

        <TextAreaField
          label="Summary"
          name="summary"
          placeholder="Example: MCA student and aspiring MERN Stack Developer with experience building responsive web applications using React, Node.js, Express and MongoDB..."
          value={personalInfo.summary}
          onChange={handleChange}
          rows={6}
          required
          helperText="Aim for 2–4 sentences and include skills relevant to your target role."
        />

        <div className="mt-2 flex justify-end">
          <span className="text-xs text-slate-400">
            {personalInfo.summary?.length || 0} characters
          </span>
        </div>

      </section>

    </div>
  );
}

export default PersonalInfo;