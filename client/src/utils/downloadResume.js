import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export async function downloadResume() {
  const element = document.getElementById("resume-preview");

  if (!element) {
    alert("Resume preview not found.");
    return;
  }

  try {
    const dataUrl = await toPng(element, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const img = new Image();

    img.onload = () => {
      const pdfWidth = 210;
      const pdfHeight = (img.height * pdfWidth) / img.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Resume.pdf");
    };

    img.src = dataUrl;
  } catch (err) {
    console.error(err);
    alert("Failed to generate PDF.");
  }
}