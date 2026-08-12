
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function ProjectsSection() {
  const { resumeData } = useContext(ResumeContext);

  const projects = resumeData?.projects || [];

  const validProjects = projects.filter(
    (project) =>
      project.title ||
      project.techStack ||
      project.description
  );

  if (validProjects.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Projects
      </h2>

      {/* Projects */}
      <div className="mt-4 space-y-5">

        {validProjects.map((project) => (
          <article key={project.id}>

            {/* Project Title */}
            <h3 className="text-[15px] font-bold text-slate-900">
              {project.title || "Project Title"}
            </h3>

            {/* Technology Stack */}
            {project.techStack?.trim() && (
              <p className="mt-1 text-[13px] font-medium text-slate-600">
                Technologies: {project.techStack}
              </p>
            )}

            {/* Description */}
            {project.description?.trim() && (
              <p className="mt-2 whitespace-pre-line text-[14px] leading-6 text-slate-700">
                {project.description}
              </p>
            )}

            {/* Project Links */}
            {(project.github || project.liveDemo) && (
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-slate-700 underline"
                  >
                    GitHub: {project.github}
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-slate-700 underline"
                  >
                    Live Demo: {project.liveDemo}
                  </a>
                )}

              </div>
            )}

          </article>
        ))}

      </div>

    </section>
  );
}

export default ProjectsSection;
