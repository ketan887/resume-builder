import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import SectionHeading from "../../components/ui/SectionHeading";

function CertificatesSection() {
  const { resumeData } = useContext(ResumeContext);

  const certificates = resumeData.certificates.filter(
    (certificate) => certificate.name.trim() !== ""
  );

  if (certificates.length === 0) return null;

  return (
    <section className="mt-8">
      <SectionHeading title="Certificates" />

      <div className="space-y-5 mt-4">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="border-l-4 border-blue-600 pl-4"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              {certificate.name}
            </h3>

            <p className="text-slate-700 font-medium">
              {certificate.issuer}
            </p>

            <p className="text-sm text-slate-500">
              {certificate.issueDate}
            </p>

            {certificate.credentialId && (
              <p className="text-sm text-slate-600 mt-1">
                Credential ID: {certificate.credentialId}
              </p>
            )}

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                View Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificatesSection;