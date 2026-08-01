import PersonalInfo from "../../resume/PersonalInfo";
import Education from "../../resume/Education";
import Experience from "../../resume/Experience";
import Skills from "../../resume/Skills";
import Projects from "../../resume/Projects";
import Certificates from "../../resume/Certificates";
import Languages from "../../resume/Languages";
import Achievements from "../../resume/Achievements";

function ResumeEditor({ activeSection }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      {activeSection === "personal" && <PersonalInfo />}

      {activeSection === "education" && <Education />}

      {activeSection === "experience" && <Experience />}

      {activeSection === "skills" && <Skills />}

      {activeSection === "projects" && <Projects />}

      {/* {activeSection === "certificates" && (
        <h2 className="text-2xl font-bold">Certificates (Coming Soon)</h2>
      )} */}

      {activeSection === "certificates" && <Certificates />}

{activeSection === "languages" && <Languages />}

{activeSection === "achievements" && <Achievements />}

    </div>
  );
}

export default ResumeEditor;