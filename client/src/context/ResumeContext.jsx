import { createContext, useState } from "react";

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
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
});
  

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}