import {
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Wrench,
  Award,
  Languages,
  Trophy,
  FileText,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    id: "personal",
    label: "Personal",
    icon: User,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Wrench,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Award,
  },
  {
    id: "languages",
    label: "Languages",
    icon: Languages,
  },
  {
    id: "achievements",
    label: "Achievements",
    icon: Trophy,
  },
];

function ResumeSidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="sticky top-24">

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-slate-100">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
            <FileText className="text-white" size={28} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Resume Builder
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Build Your Resume
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Complete every section to create a modern ATS-friendly resume.
          </p>

        </div>

        {/* Navigation */}
        <div className="p-4">

          {sections.map((section) => {
            const Icon = section.icon;
            const active = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group w-full flex items-center gap-4 rounded-2xl px-4 py-3 mb-2 transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200"
                    : "text-slate-700 hover:bg-slate-100 hover:translate-x-1"
                }`}
              >
                <div
                  className={`w-1 h-7 rounded-full ${
                    active ? "bg-white" : "bg-transparent"
                  }`}
                />

                <Icon
                  size={20}
                  className={`${
                    active
                      ? "text-white"
                      : "text-slate-500 group-hover:text-blue-600"
                  }`}
                />

                <span className="font-medium">
                  {section.label}
                </span>
              </button>
            );
          })}

        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-slate-200" />

        {/* Tips Card */}
        <div className="p-6">

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 p-5 text-white shadow-lg">

            <div className="flex items-center gap-2">

              <Sparkles size={20} />

              <h3 className="font-semibold">
                Pro Tip
              </h3>

            </div>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Complete every resume section with relevant information to improve
              your ATS score and increase your chances of getting shortlisted by
              recruiters.
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default ResumeSidebar;