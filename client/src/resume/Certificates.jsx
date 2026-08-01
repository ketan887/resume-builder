import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Certificates() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addCertificate = () => {
    setResumeData({
      ...resumeData,
      certificates: [
        ...resumeData.certificates,
        {
          id: Date.now(),
          name: "",
          issuer: "",
          issueDate: "",
          credentialId: "",
          credentialUrl: "",
        },
      ],
    });
  };

  const updateCertificate = (id, field, value) => {
    setResumeData({
      ...resumeData,
      certificates: resumeData.certificates.map((certificate) =>
        certificate.id === id
          ? { ...certificate, [field]: value }
          : certificate
      ),
    });
  };

  const removeCertificate = (id) => {
    setResumeData({
      ...resumeData,
      certificates: resumeData.certificates.filter(
        (certificate) => certificate.id !== id
      ),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Certificates</h2>

      {resumeData.certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="border rounded-xl p-5 mb-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Certificate Name"
            value={certificate.name}
            onChange={(e) =>
              updateCertificate(
                certificate.id,
                "name",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Issuing Organization"
            value={certificate.issuer}
            onChange={(e) =>
              updateCertificate(
                certificate.id,
                "issuer",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="month"
            value={certificate.issueDate}
            onChange={(e) =>
              updateCertificate(
                certificate.id,
                "issueDate",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Credential ID"
            value={certificate.credentialId}
            onChange={(e) =>
              updateCertificate(
                certificate.id,
                "credentialId",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="url"
            placeholder="Credential URL (Optional)"
            value={certificate.credentialUrl}
            onChange={(e) =>
              updateCertificate(
                certificate.id,
                "credentialUrl",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={() => removeCertificate(certificate.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Remove Certificate
          </button>
        </div>
      ))}

      <button
        onClick={addCertificate}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        + Add Certificate
      </button>
    </div>
  );
}

export default Certificates;