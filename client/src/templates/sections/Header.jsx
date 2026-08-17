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
    <header className="border-b border-slate-300 pb-3">

      {/* Name */}
      <h1 className="text-[27px] leading-tight font-bold tracking-tight text-slate-900">
        {personalInfo.fullName || "Your Name"}
      </h1>

      {/* Professional Title */}
      <p className="mt-1 text-[16px] font-medium text-slate-700">
        {personalInfo.title || "Professional Title"}
      </p>

      {/* Contact Information */}
      {contactInfo.length > 0 && (
        <p className="mt-2 text-[11px] leading-5 text-slate-600">
          {contactInfo.join(" | ")}
        </p>
      )}

      {/* Links */}
      {links.length > 0 && (
        <p className="mt-0.5 break-all text-[11px] leading-5 text-slate-600">
          {links.join(" | ")}
        </p>
      )}

    </header>
  );
}

export default Header;