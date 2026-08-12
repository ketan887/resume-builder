
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function CertificatesSection() {
  const { resumeData } = useContext(ResumeContext);

  const certificates = resumeData?.certificates || [];

  const validCertificates = certificates.filter(
    (certificate) =>
      certificate.name ||
      certificate.issuer ||
      certificate.credentialId
  );

  if (validCertificates.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Certifications
      </h2>

      {/* Certificates */}
      <div className="mt-4 space-y-4">

        {validCertificates.map((certificate) => (
          <article key={certificate.id}>

            {/* Certificate Name */}
            <h3 className="text-[15px] font-bold text-slate-900">
              {certificate.name || "Certificate"}
            </h3>

            {/* Issuer + Date */}
            <div className="mt-1 flex flex-col justify-between gap-1 sm:flex-row">

              {certificate.issuer && (
                <p className="text-[14px] font-medium text-slate-700">
                  {certificate.issuer}
                </p>
              )}

              {certificate.issueDate && (
                <p className="text-[13px] text-slate-600 sm:text-right">
                  {certificate.issueDate}
                </p>
              )}

            </div>

            {/* Credential ID */}
            {certificate.credentialId && (
              <p className="mt-1 text-[13px] text-slate-600">
                Credential ID: {certificate.credentialId}
              </p>
            )}

            {/* Credential URL */}
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block break-all text-[13px] text-slate-700 underline"
              >
                Credential: {certificate.credentialUrl}
              </a>
            )}

          </article>
        ))}

      </div>

    </section>
  );
}

export default CertificatesSection;

