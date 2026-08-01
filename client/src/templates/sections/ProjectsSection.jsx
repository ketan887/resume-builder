import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import SectionHeading from "../../components/ui/SectionHeading";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";

function ProjectsSection() {
  const { resumeData } = useContext(ResumeContext);

  if (resumeData.projects.length === 0) return null;

  return (
    <section>
      <SectionHeading title="Projects" />

      <div className="space-y-6">

        {resumeData.projects.map((project) => (
          <div
            key={project.id}
            className="border-l-4 border-blue-600 pl-4"
          >
            <div className="flex justify-between flex-wrap">

              <div>

                <h3 className="text-lg font-semibold text-slate-800">
                  {project.title || "Project Title"}
                </h3>

                <p className="text-blue-600 text-sm mt-1">
                  {project.technologies}
                </p>

              </div>

              <div className="flex gap-4">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-blue-600"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-blue-600"
                  >
                    <Globe size={16} />
                    Live
                  </a>
                )}

              </div>

            </div>

            <p className="mt-3 leading-7 text-slate-700">
              {project.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default ProjectsSection;