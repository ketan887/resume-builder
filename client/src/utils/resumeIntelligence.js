const ACTION_VERBS = [
  "developed",
  "built",
  "created",
  "implemented",
  "designed",
  "optimized",
  "managed",
  "led",
  "improved",
  "deployed",
  "integrated",
  "automated",
  "engineered",
  "configured",
];

export function analyzeResume(resumeData) {
  const strengths = [];
  const improvements = [];
  const missing = [];

  const info = resumeData.personalInfo || {};

  // Contact Information
  if (
    info.fullName &&
    info.email &&
    info.phone
  ) {
    strengths.push(
      "Complete contact information."
    );
  } else {
    missing.push(
      "Complete your contact information."
    );
  }

  // LinkedIn
  if (info.linkedin)
    strengths.push("LinkedIn profile added.");
  else
    missing.push("LinkedIn profile.");

  // Portfolio
  if (info.portfolio)
    strengths.push("Portfolio website added.");
  else
    missing.push("Portfolio website.");

  // Summary
  if (
    info.summary &&
    info.summary.length >= 120
  )
    strengths.push(
      "Professional summary looks strong."
    );
  else
    improvements.push(
      "Expand your professional summary."
    );

  // Experience
  resumeData.experience.forEach((exp) => {

    if (
      exp.description &&
      exp.description.length < 120
    )
      improvements.push(
        "Increase experience description length."
      );

    const text =
      exp.description?.toLowerCase() || "";

    const hasVerb = ACTION_VERBS.some((verb) =>
      text.includes(verb)
    );

    if (!hasVerb)
      improvements.push(
        "Use more action verbs in experience."
      );

    const hasNumbers = /\d/.test(text);

    if (!hasNumbers)
      improvements.push(
        "Add measurable achievements in experience."
      );

  });

  // Projects
  resumeData.projects.forEach((project) => {

    if (project.github)
      strengths.push(
        "GitHub project available."
      );
    else
      missing.push(
        "Add GitHub link to projects."
      );

    if (project.liveDemo)
      strengths.push(
        "Live demo available."
      );
    else
      missing.push(
        "Add Live Demo link."
      );

    if (
      project.description &&
      project.description.length < 120
    )
      improvements.push(
        "Expand project description."
      );

  });

  // Skills
  if (
    resumeData.skills.length >= 10
  )
    strengths.push(
      "Good technical skills section."
    );
  else
    improvements.push(
      "Add more technical skills."
    );

  return {
    strengths: [...new Set(strengths)],
    improvements: [...new Set(improvements)],
    missing: [...new Set(missing)],
  };
}