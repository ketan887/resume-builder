import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo } = resumeData;

  return (
    <header className="border-b-4 border-blue-600 pb-6">

  <div className="text-center">

    <h1 className="text-4xl font-extrabold uppercase tracking-wider text-slate-800">
      {personalInfo.fullName || "Your Name"}
    </h1>

    <p className="text-xl text-blue-600 mt-2 font-medium">
      {personalInfo.title || "Professional Title"}
    </p>

  </div>

  <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6 text-sm text-slate-600">

    {personalInfo.email && (
      <div className="flex items-center gap-2">
        <Mail size={16} className="text-blue-600" />
        {personalInfo.email}
      </div>
    )}

    {personalInfo.phone && (
      <div className="flex items-center gap-2">
        <Phone size={16} className="text-blue-600" />
        {personalInfo.phone}
      </div>
    )}

    {personalInfo.location && (
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-blue-600" />
        {personalInfo.location}
      </div>
    )}

    {personalInfo.linkedin && (
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaLinkedin />
        LinkedIn
      </a>
    )}

    {personalInfo.github && (
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaGithub />
        GitHub
      </a>
    )}

    {personalInfo.portfolio && (
      <a
        href={personalInfo.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <Globe size={16} />
        Portfolio
      </a>
    )}

  </div>

</header>   
  );
}

export default Header;