
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export async function downloadResume() {
  const element = document.getElementById("resume-preview");

  if (!element) {
    alert("Resume preview not found.");
    return;
  }

  try {
    // Convert resume preview to PNG
    const dataUrl = await toPng(element, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#ffffff",
    });

    // Create A4 PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = 210;
    const pdfHeight = 297;

    // Load generated image
    const img = new Image();

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = dataUrl;
    });

    // Calculate image height while maintaining aspect ratio
    const imgHeight = (img.height * pdfWidth) / img.width;

    // If resume fits on one page
    if (imgHeight <= pdfHeight) {
      pdf.addImage(
        dataUrl,
        "PNG",
        0,
        0,
        pdfWidth,
        imgHeight
      );
    } else {
      // Multi-page resume
      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(
        dataUrl,
        "PNG",
        0,
        position,
        pdfWidth,
        imgHeight
      );

      heightLeft -= pdfHeight;

      // Additional pages
      while (heightLeft > 0) {
        position -= pdfHeight;

        pdf.addPage();

        pdf.addImage(
          dataUrl,
          "PNG",
          0,
          position,
          pdfWidth,
          imgHeight
        );

        heightLeft -= pdfHeight;
      }
    }

    // Download PDF
    pdf.save("Resume.pdf");

  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF. Please try again.");
  }
}

