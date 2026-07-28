import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function ProjectsSection() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 mb-4">
        Projects
      </h3>

      <div className="space-y-6">
        {resumeData.projects.map((project) => (
          <div key={project.id}>

            <div className="flex justify-between items-center">

              <h4 className="text-lg font-semibold">
                {project.title || "Project Title"}
              </h4>

              <div className="flex gap-4 text-sm text-blue-600">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

            <p className="text-sm text-slate-500 mt-1">
              {project.technologies}
            </p>

            <p className="mt-3 text-slate-700 leading-7">
              {project.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;