import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";
import ResumeItem from "../../resume/ResumeItem";

function CertificatesSection() {
  const { resumeData } = useContext(ResumeContext);

  const certificates = resumeData.certificates.filter(
    (certificate) => certificate.name || certificate.issuer
  );

  if (certificates.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Certificates</ResumeHeading>

      {certificates.map((certificate) => (
        <ResumeItem
          key={certificate.id}
          title={certificate.name || "Certificate"}
          subtitle={certificate.issuer}
          rightText={certificate.issueDate}
          description={
            certificate.credentialId
              ? `Credential ID: ${certificate.credentialId}`
              : ""
          }
        />
      ))}
    </ResumeSection>
  );
}

export default CertificatesSection;