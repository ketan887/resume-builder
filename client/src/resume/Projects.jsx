import { useContext, useState } from "react";
import {
  FolderGit2,
  Plus,
  Trash2,
  Lightbulb,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";
import TextAreaField from "../components/ui/TextAreaField";

// Backend API URL
const API_URL = import.meta.env.VITE_API_URL;

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [improvingId, setImprovingId] = useState(null);

  const projects = resumeData.projects || [];

  // ================================
  // ADD PROJECT
  // ================================
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

  // ================================
  // UPDATE PROJECT
  // ================================
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

  // ================================
  // REMOVE PROJECT
  // ================================
  const removeProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter(
        (project) => project.id !== id
      ),
    }));
  };

  // ================================
  // AI IMPROVE PROJECT
  // ================================
  const improveProjectWithAI = async (project) => {
    if (!project.description.trim()) {
      alert("Please enter a project description first.");
      return;
    }

    try {
      setImprovingId(project.id);

      const response = await fetch(
        `${API_URL}/api/projects/improve`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: project.title,
            techStack: project.techStack,
            description: project.description,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to improve project"
        );
      }

      updateProject(
        project.id,
        "description",
        data.improvedDescription
      );
    } catch (error) {
      console.error("Project AI Error:", error);

      alert(
        "Failed to improve project. Please try again."
      );
    } finally {
      setImprovingId(null);
    }
  };

  return (
    <div className="space-y-8">

      {/* ================================
          HEADER
      ================================= */}
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
              Showcase projects that demonstrate your
              technical skills.
            </p>
          </div>

        </div>
      </div>

      {/* ================================
          PROJECT CARDS
      ================================= */}
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

            {/* CARD HEADER */}
            <div className="mb-5 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-900">
                  Project {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Highlight the problem, technologies,
                  and your contribution.
                </p>
              </div>

              {/* REMOVE */}
              {projects.length > 1 && (

                <button
                  type="button"
                  onClick={() =>
                    removeProject(project.id)
                  }
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

            {/* PROJECT INFORMATION */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* PROJECT TITLE */}
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

              {/* TECHNOLOGY STACK */}
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

              {/* GITHUB */}
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

              {/* LIVE DEMO */}
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

            {/* LINKS STATUS */}
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

            {/* DESCRIPTION */}
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

              {/* AI BUTTON */}
              <div className="mt-3 flex justify-end">

                <button
                  type="button"
                  onClick={() =>
                    improveProjectWithAI(project)
                  }
                  disabled={
                    improvingId === project.id
                  }
                  className="
                    flex items-center gap-2
                    rounded-lg
                    bg-blue-600
                    px-4 py-2
                    text-sm font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  <Sparkles size={16} />

                  {improvingId === project.id
                    ? "Improving..."
                    : "Improve with AI"}

                </button>

              </div>

              {/* ATS TIP */}
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
                    Start with strong verbs such as
                    developed, engineered, implemented,
                    integrated, optimized, deployed, and
                    automated. Mention technologies and
                    measurable outcomes where possible.
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ================================
          ADD PROJECT
      ================================= */}
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