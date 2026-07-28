import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const updateProject = (id, field, value) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          id: Date.now(),
          title: "",
          technologies: "",
          github: "",
          live: "",
          description: "",
        },
      ],
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
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {resumeData.projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-xl p-5 mb-5 space-y-4"
        >
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) =>
              updateProject(project.id, "title", e.target.value)
            }
          />

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Technologies (React, Node.js...)"
            value={project.technologies}
            onChange={(e) =>
              updateProject(
                project.id,
                "technologies",
                e.target.value
              )
            }
          />

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="GitHub URL"
            value={project.github}
            onChange={(e) =>
              updateProject(project.id, "github", e.target.value)
            }
          />

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Live Demo URL"
            value={project.live}
            onChange={(e) =>
              updateProject(project.id, "live", e.target.value)
            }
          />

          <textarea
            className="w-full border p-3 rounded-lg"
            rows="4"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) =>
              updateProject(
                project.id,
                "description",
                e.target.value
              )
            }
          />

          <button
            onClick={() => removeProject(project.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Remove Project
          </button>
        </div>
      ))}

      <button
        onClick={addProject}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
      >
        + Add Project
      </button>
    </div>
  );
}

export default Projects;