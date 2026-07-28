import { createContext, useState } from "react";

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    selectedTemplate: "modern",

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

    projects: [
      {
        id: Date.now() + 2,
        title: "",
        description: "",
        technologies: "",
        github: "",
        live: "",
      },
    ],

    skills: [],

    certificates: [
      {
        id: Date.now() + 3,
        name: "",
        issuer: "",
        year: "",
      },
    ],

    projects: [
  {
    id: Date.now() + 2,
    title: "",
    technologies: "",
    github: "",
    live: "",
    description: "",
  },
],

skills: [],

    
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}