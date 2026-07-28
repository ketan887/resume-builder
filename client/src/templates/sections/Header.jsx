import { useContext } from "react";
import { FaEnvelope, FaPhone, FaLocationDot, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6";
import { ResumeContext } from "../../context/ResumeContext";

function Header() {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo } = resumeData;

  return (
    <header className="border-b-4 border-blue-600 pb-6">
      {/* Name */}
      <h1 className="text-4xl font-bold text-slate-800 tracking-wide">
        {personalInfo.fullName || "Your Name"}
      </h1>

      {/* Title */}
      <p className="text-xl text-blue-600 font-medium mt-2">
        {personalInfo.title || "Professional Title"}
      </p>

      {/* Contact Details */}
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">

        {personalInfo.email && (
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <span>{personalInfo.email}</span>
          </div>
        )}

        {personalInfo.phone && (
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-600" />
            <span>{personalInfo.phone}</span>
          </div>
        )}

        {personalInfo.location && (
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-blue-600" />
            <span>{personalInfo.location}</span>
          </div>
        )}

        {personalInfo.linkedin && (
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" />
            <span>{personalInfo.linkedin}</span>
          </div>
        )}

        {personalInfo.github && (
          <div className="flex items-center gap-2">
            <FaGithub className="text-blue-600" />
            <span>{personalInfo.github}</span>
          </div>
        )}

        {personalInfo.portfolio && (
          <div className="flex items-center gap-2">
            <FaGlobe className="text-blue-600" />
            <span>{personalInfo.portfolio}</span>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;