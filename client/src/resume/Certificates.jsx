
import { useContext } from "react";
import {
  Award,
  Plus,
  Trash2,
  ExternalLink,
  Lightbulb,
} from "lucide-react";

import { ResumeContext } from "../context/ResumeContext";
import InputField from "../components/ui/InputField";

function Certificates() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const certificates = resumeData.certificates || [];

  const addCertificate = () => {
    setResumeData((prev) => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          id: Date.now(),
          name: "",
          issuer: "",
          issueDate: "",
          credentialId: "",
          credentialUrl: "",
        },
      ],
    }));
  };

  const updateCertificate = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: prev.certificates.map(
        (certificate) =>
          certificate.id === id
            ? {
                ...certificate,
                [field]: value,
              }
            : certificate
      ),
    }));
  };

  const removeCertificate = (id) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter(
        (certificate) => certificate.id !== id
      ),
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Award size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Certificates
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add certifications that strengthen your professional profile.
            </p>
          </div>

        </div>
      </div>

      {/* Certificate Cards */}
      <div className="space-y-6">

        {certificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className="
              rounded-2xl
              border border-slate-200
              bg-slate-50/70
              p-5
              shadow-sm
              transition
              hover:shadow-md
            "
          >

            {/* Card Header */}
            <div className="mb-5 flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-slate-900">
                  Certificate {index + 1}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Add the official certificate details.
                </p>
              </div>

              {certificates.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    removeCertificate(certificate.id)
                  }
                  className="
                    flex items-center gap-2
                    rounded-lg
                    px-3 py-2
                    text-sm font-medium
                    text-red-600
                    transition
                    hover:bg-red-50
                  "
                >
                  <Trash2 size={16} />

                  <span className="hidden sm:inline">
                    Remove
                  </span>
                </button>
              )}

            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <InputField
                label="Certificate Name"
                placeholder="e.g. AWS Certified Cloud Practitioner"
                value={certificate.name}
                onChange={(e) =>
                  updateCertificate(
                    certificate.id,
                    "name",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Issuing Organization"
                placeholder="e.g. Amazon Web Services"
                value={certificate.issuer}
                onChange={(e) =>
                  updateCertificate(
                    certificate.id,
                    "issuer",
                    e.target.value
                  )
                }
                required
              />

              <InputField
                label="Issue Date"
                value={certificate.issueDate}
                onChange={(e) =>
                  updateCertificate(
                    certificate.id,
                    "issueDate",
                    e.target.value
                  )
                }
                type="month"
              />

              <InputField
                label="Credential ID"
                placeholder="e.g. ABC123XYZ"
                value={certificate.credentialId}
                onChange={(e) =>
                  updateCertificate(
                    certificate.id,
                    "credentialId",
                    e.target.value
                  )
                }
              />

              <div className="md:col-span-2">

                <InputField
                  label="Credential URL"
                  placeholder="https://example.com/verify"
                  value={certificate.credentialUrl}
                  onChange={(e) =>
                    updateCertificate(
                      certificate.id,
                      "credentialUrl",
                      e.target.value
                    )
                  }
                  type="url"
                />

              </div>

            </div>

            {/* Credential Status */}
            {certificate.credentialUrl && (
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-600">
                <ExternalLink size={14} />
                Credential verification link added
              </div>
            )}

          </div>
        ))}

      </div>

      {/* Empty State */}
      {certificates.length === 0 && (
        <div
          className="
            rounded-2xl
            border-2 border-dashed
            border-slate-200
            bg-slate-50
            p-8
            text-center
          "
        >
          <Award
            size={30}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 font-medium text-slate-600">
            No certificates added
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Add certifications that are relevant to your target job.
          </p>
        </div>
      )}

      {/* Add Certificate */}
      <button
        type="button"
        onClick={addCertificate}
        className="
          flex w-full
          items-center justify-center gap-2
          rounded-xl
          border-2 border-dashed border-blue-300
          bg-blue-50
          px-5 py-3
          font-semibold
          text-blue-600
          transition
          hover:border-blue-500
          hover:bg-blue-100
        "
      >
        <Plus size={19} />
        Add Certificate
      </button>

      {/* ATS Tip */}
      <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">

        <Lightbulb
          size={20}
          className="mt-0.5 shrink-0 text-blue-600"
        />

        <div>
          <p className="text-sm font-semibold text-blue-900">
            ATS Certificate Tip
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-700">
            Prioritize certifications that are relevant to the job
            you're applying for. Include the issuing organization and
            credential ID when available.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Certificates;

