import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Header() {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo } = resumeData;

  const contactInfo = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
  ].filter(Boolean);

  const links = [
    personalInfo.linkedin,
    personalInfo.github,
    personalInfo.portfolio,
  ].filter(Boolean);

  return (
    <header className="pb-6 border-b border-slate-300">

      <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
        {personalInfo.fullName || "Your Name"}
      </h1>

      <p className="mt-2 text-xl font-medium text-slate-700">
        {personalInfo.title || "Professional Title"}
      </p>

      {contactInfo.length > 0 && (
        <p className="mt-4 text-sm text-slate-600 leading-7">
          {contactInfo.join(" | ")}
        </p>
      )}

      {links.length > 0 && (
        <p className="mt-2 text-sm text-slate-600 break-all">
          {links.join(" | ")}
        </p>
      )}

    </header>
  );
}

export default Header;