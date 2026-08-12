
import { useContext } from "react";
import {
  FolderGit2,
  Plus,
  Trash2,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";
import TextAreaField from "../components/ui/TextAreaField";

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const projects = resumeData.projects || [];

  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now(),
          title: "",
          techStack: "",
          github: "",
          liveDemo: "",
          description: "",
        },
      ],
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id
          ? {
              ...project,
              [field]: value,
            }
          : project
      ),
    }));
  };

  const removeProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter(
        (project) => project.id !== id
      ),
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <FolderGit2 size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Projects
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showcase projects that demonstrate your technical skills.
            </p>
          </div>

        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-6">

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="
              rounded-2xl
              border border-slate-200
              bg-slate-50/70
              p-5
              shadow-sm
              transition
              hover:shadow-md
            "
          >

            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-900">
                  Project {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Highlight the problem, technologies, and your contribution.
                </p>
              </div>

              {projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProject(project.id)}
                  className="
                    flex items-center gap-2
                    rounded-lg
                    px-3 py-2
                    text-sm font-medium
                    text-red-600
                    transition
                    hover:bg-red-50
                  "
                >
                  <Trash2 size={16} />

                  <span className="hidden sm:inline">
                    Remove
                  </span>
                </button>
              )}

            </div>

            {/* Project Information */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <InputField
                label="Project Title"
                placeholder="e.g. AI Resume Analyzer"
                value={project.title}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "title",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Technology Stack"
                placeholder="React, Node.js, Express, MongoDB"
                value={project.techStack}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "techStack",
                    e.target.value
                  )
                }
                required
                helperText="List technologies separated by commas."
              />

              <InputField
                label="GitHub Repository"
                placeholder="https://github.com/username/project"
                value={project.github}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "github",
                    e.target.value
                  )
                }
                type="url"
              />

              <InputField
                label="Live Demo"
                placeholder="https://your-project.vercel.app"
                value={project.liveDemo}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "liveDemo",
                    e.target.value
                  )
                }
                type="url"
              />

            </div>

            {/* Links Status */}
            {(project.github || project.liveDemo) && (
              <div className="mt-5 flex flex-wrap gap-3">

                {project.github && (
                  <div className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600">
                    GitHub link added
                  </div>
                )}

                {project.liveDemo && (
                  <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-600">
                    <ExternalLink size={14} />
                    Live demo added
                  </div>
                )}

              </div>
            )}

            {/* Description */}
            <div className="mt-5">

              <TextAreaField
                label="Project Description"
                placeholder={`Example:
• Developed a full-stack resume builder using React and Node.js.
• Implemented JWT authentication and MongoDB data storage.
• Integrated an ATS scoring system to evaluate resume completeness.
• Deployed the application using Vercel and Render.`}
                value={project.description}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "description",
                    e.target.value
                  )
                }
                rows={7}
                required
                helperText="Use action verbs, technical keywords, and measurable results."
              />

              {/* ATS Tip */}
              <div className="mt-4 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">

                <Lightbulb
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    ATS Project Tip
                  </p>

                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    Start with strong verbs such as developed,
                    engineered, implemented, integrated, optimized,
                    deployed, and automated. Mention technologies and
                    measurable outcomes where possible.
                  </p>
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Add Project */}
      <button
        type="button"
        onClick={addProject}
        className="
          flex w-full
          items-center justify-center gap-2
          rounded-xl
          border-2 border-dashed border-blue-300
          bg-blue-50
          px-5 py-3
          font-semibold
          text-blue-600
          transition
          hover:border-blue-500
          hover:bg-blue-100
        "
      >
        <Plus size={19} />
        Add Project
      </button>

    </div>
  );
}

export default Projects;

