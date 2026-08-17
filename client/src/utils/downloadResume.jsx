import React from "react";
import { pdf } from "@react-pdf/renderer";

import ResumePDF from "../components/resume/ResumePDF";

export async function downloadResume(resumeData) {
  try {
    const blob = await pdf(
      <ResumePDF resumeData={resumeData} />
    ).toBlob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "Resume.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

  } catch (error) {
    console.error(
      "PDF generation error:",
      error
    );

    alert(
      "Failed to generate PDF. Please try again."
    );
  }
}