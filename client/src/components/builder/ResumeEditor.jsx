import PersonalInfo from "../../resume/PersonalInfo";
import Education from "../../resume/Education";
import Experience from "../../resume/Experience";
import Skills from "../../resume/Skills";

function ResumeEditor({ activeSection }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      {activeSection === "personal" && <PersonalInfo />}

      {activeSection === "education" && <Education />}

      {activeSection === "experience" && <Experience />}

      {activeSection === "skills" && <Skills />}

      {activeSection === "projects" && (
        <h2 className="text-2xl font-bold">Projects (Coming Soon)</h2>
      )}

      {activeSection === "certificates" && (
        <h2 className="text-2xl font-bold">Certificates (Coming Soon)</h2>
      )}

    </div>
  );
}

export default ResumeEditor;