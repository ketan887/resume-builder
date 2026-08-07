import {
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Wrench,
  Award,
  Languages as LanguagesIcon,
  Trophy,
} from "lucide-react";

import PersonalInfo from "../../resume/PersonalInfo";
import Education from "../../resume/Education";
import Experience from "../../resume/Experience";
import Skills from "../../resume/Skills";
import Projects from "../../resume/Projects";
import Certificates from "../../resume/Certificates";
import Languages from "../../resume/Languages";
import Achievements from "../../resume/Achievements";

const sectionConfig = {
  personal: {
    title: "Personal Information",
    subtitle: "Basic information recruiters will see first.",
    icon: User,
    component: <PersonalInfo />,
  },

  education: {
    title: "Education",
    subtitle: "Add your academic qualifications.",
    icon: GraduationCap,
    component: <Education />,
  },

  experience: {
    title: "Work Experience",
    subtitle: "Show your internships and professional experience.",
    icon: Briefcase,
    component: <Experience />,
  },

  skills: {
    title: "Skills",
    subtitle: "Highlight your technical and professional skills.",
    icon: Wrench,
    component: <Skills />,
  },

  projects: {
    title: "Projects",
    subtitle: "Showcase your best work.",
    icon: FolderGit2,
    component: <Projects />,
  },

  certificates: {
    title: "Certificates",
    subtitle: "Display certifications that strengthen your profile.",
    icon: Award,
    component: <Certificates />,
  },

  languages: {
    title: "Languages",
    subtitle: "Mention the languages you speak.",
    icon: LanguagesIcon,
    component: <Languages />,
  },

  achievements: {
    title: "Achievements",
    subtitle: "Highlight awards and accomplishments.",
    icon: Trophy,
    component: <Achievements />,
  },
};

function ResumeEditor({ activeSection }) {
  const current = sectionConfig[activeSection];

  if (!current) return null;

  const Icon = current.icon;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="border-b border-slate-200 px-8 py-6 bg-slate-50">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg">
            <Icon size={26} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {current.title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {current.subtitle}
            </p>
          </div>

        </div>

      </div>

      {/* Content */}
      <div className="p-8">
        {current.component}
      </div>

    </div>
  );
}

export default ResumeEditor;