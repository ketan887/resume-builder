import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          id: Date.now(),
          title: "",
          techStack: "",
          github: "",
          liveDemo: "",
          description: "",
        },
      ],
    });
  };

  const updateProject = (id, field, value) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.map((project) =>
        project.id === id
          ? { ...project, [field]: value }
          : project
      ),
    });
  };

  const removeProject = (id) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter(
        (project) => project.id !== id
      ),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Projects
      </h2>

      {resumeData.projects.map((project) => (
        <div
          key={project.id}
          className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm space-y-4"
        >
          <input
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) =>
              updateProject(project.id, "title", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Tech Stack (React, Node.js, MongoDB)"
            value={project.techStack}
            onChange={(e) =>
              updateProject(project.id, "techStack", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="GitHub Repository URL"
            value={project.github}
            onChange={(e) =>
              updateProject(project.id, "github", e.target.value)
            }
          />

          <input
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Live Demo URL"
            value={project.liveDemo}
            onChange={(e) =>
              updateProject(project.id, "liveDemo", e.target.value)
            }
          />

          <textarea
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={5}
            placeholder="Describe your project, your contributions, technologies used, and achievements..."
            value={project.description}
            onChange={(e) =>
              updateProject(project.id, "description", e.target.value)
            }
          />

          <button
            onClick={() => removeProject(project.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
          >
            Remove Project
          </button>
        </div>
      ))}

      <button
        onClick={addProject}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        + Add Project
      </button>
    </div>
  );
}

export default Projects;