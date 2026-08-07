import { createContext, useEffect, useState } from "react";

export const ResumeContext = createContext();

const defaultResumeData = {
  // Selected Template
  selectedTemplate: "modern",

  // Personal Information
  personalInfo: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
  },

  // Education
  education: [
    {
      id: Date.now(),
      degree: "",
      institution: "",
      location: "",
      startYear: "",
      endYear: "",
    },
  ],

  // Experience
  experience: [
    {
      id: Date.now() + 1,
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],

  // Projects
  projects: [
    {
      id: Date.now() + 2,
      title: "",
      techStack: "",
      github: "",
      liveDemo: "",
      description: "",
    },
  ],

  // Skills
  skills: [],

  // Certificates
  certificates: [
    {
      id: Date.now() + 3,
      name: "",
      issuer: "",
      issueDate: "",
      credentialId: "",
      credentialUrl: "",
    },
  ],

  // Languages
  languages: [
    {
      id: Date.now() + 4,
      name: "",
      proficiency: "Native",
    },
  ],

  // Achievements
  achievements: [
    {
      id: Date.now() + 5,
      title: "",
      description: "",
      year: "",
    },
  ],
};

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const savedResume = localStorage.getItem("resumeData");

    return savedResume
      ? JSON.parse(savedResume)
      : defaultResumeData;
  });

  useEffect(() => {
    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );
  }, [resumeData]);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}