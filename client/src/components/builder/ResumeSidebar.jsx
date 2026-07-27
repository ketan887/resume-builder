const sections = [
  { id: "personal", label: "👤 Personal" },
  { id: "education", label: "🎓 Education" },
  { id: "experience", label: "💼 Experience" },
  { id: "projects", label: "🚀 Projects" },
  { id: "skills", label: "🧠 Skills" },
  { id: "certificates", label: "🏆 Certificates" },
];

function ResumeSidebar({ activeSection, setActiveSection }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">

      <h2 className="text-xl font-bold mb-6">
        Resume Sections
      </h2>

      <div className="space-y-2">

        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${
              activeSection === section.id
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            {section.label}
          </button>
        ))}

      </div>

    </div>
  );
}

export default ResumeSidebar;