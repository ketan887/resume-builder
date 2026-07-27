import PersonalInfo from "../../resume/PersonalInfo";
import Education from "../../resume/Education";
import Experience from "../../resume/Experience";

function ResumeEditor({ activeSection }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      {activeSection === "personal" && <PersonalInfo />}

      {activeSection === "education" && (
        <h2 className="text-2xl font-bold">
         {activeSection === "personal" && <PersonalInfo />}

{activeSection === "education" && <Education />}
        </h2>
      )}

      {activeSection === "experience" && (
        <h1 className="text-2xl font-bold">
          {activeSection === "experience" && <Experience />}
        </h1>
      )}

    </div>
  );
}

export default ResumeEditor;