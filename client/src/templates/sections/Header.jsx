
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function Header() {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo = {} } = resumeData;

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
    <header className="border-b border-slate-300 pb-5">

      {/* Name */}
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {personalInfo.fullName || "Your Name"}
      </h1>

      {/* Professional Title */}
      {personalInfo.title && (
        <p className="mt-1 text-lg font-medium text-slate-700">
          {personalInfo.title}
        </p>
      )}

      {/* Contact Information */}
      {contactInfo.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
          {contactInfo.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              {index < contactInfo.length - 1 && (
                <span className="ml-3 text-slate-400">|</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Professional Links */}
      {links.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600 break-all">
          {links.map((link, index) => (
            <span key={`${link}-${index}`}>
              {link}
              {index < links.length - 1 && (
                <span className="ml-3 text-slate-400">|</span>
              )}
            </span>
          ))}
        </div>
      )}

    </header>
  );
}

export default Header;

