import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";

function ProjectsSection() {
  const { resumeData } = useContext(ResumeContext);

  const projects = resumeData.projects.filter(
    (project) => project.title || project.description
  );

  if (projects.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Projects</ResumeHeading>

      {projects.map((project) => (
        <div key={project.id} className="mb-6 last:mb-0">

          {/* Project Title */}
          <h3 className="text-base font-semibold text-slate-900">
            {project.title || "Project Title"}
          </h3>

          {/* Tech Stack */}
          {project.techStack && (
            <p className="mt-1 text-[15px] text-slate-600">
              <span className="font-semibold">Tech Stack:</span>{" "}
              {project.techStack}
            </p>
          )}

          {/* Description */}
          {project.description && (
            <p className="mt-3 text-[15px] leading-7 text-slate-700 whitespace-pre-line">
              {project.description}
            </p>
          )}

          {/* Links */}
          {(project.github || project.liveDemo) && (
            <div className="mt-3 flex flex-wrap gap-6 text-[14px]">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  GitHub Repository
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  Live Demo
                </a>
              )}

            </div>
          )}

        </div>
      ))}
    </ResumeSection>
  );
}

export default ProjectsSection;