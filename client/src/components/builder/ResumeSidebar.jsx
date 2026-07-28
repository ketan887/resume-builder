import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaCertificate,
} from "react-icons/fa";

const sections = [
  {
    id: "personal",
    label: "Personal Info",
    icon: <FaUser />,
  },
  {
    id: "education",
    label: "Education",
    icon: <FaGraduationCap />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <FaBriefcase />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FaProjectDiagram />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <FaTools />,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: <FaCertificate />,
  },
];

function ResumeSidebar({ activeSection, setActiveSection }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 sticky top-6">

      <h2 className="text-xl font-bold text-slate-800 mb-1">
        Resume Builder
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Complete each section to build your resume.
      </p>

      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeSection === section.id
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span className="text-lg">{section.icon}</span>

            <span className="font-medium">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Completion</span>
          <span className="font-semibold">35%</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="w-[35%] h-2 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ResumeSidebar;