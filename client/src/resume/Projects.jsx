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
          technologies: "",
          github: "",
          live: "",
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
          className="border rounded-xl p-5 mb-6 space-y-4"
        >
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) =>
              updateProject(
                project.id,
                "title",
                e.target.value
              )
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Technologies (React, Node, MongoDB)"
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
            className="w-full border rounded-lg p-3"
            placeholder="GitHub URL"
            value={project.github}
            onChange={(e) =>
              updateProject(
                project.id,
                "github",
                e.target.value
              )
            }
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Live Demo URL"
            value={project.live}
            onChange={(e) =>
              updateProject(
                project.id,
                "live",
                e.target.value
              )
            }
          />

          <textarea
            className="w-full border rounded-lg p-3"
            rows="4"
            placeholder="Describe your project..."
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
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Remove Project
          </button>
        </div>
      ))}

      <button
        onClick={addProject}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        + Add Project
      </button>
    </div>
  );
}

export default Projects;