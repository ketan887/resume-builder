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
  "launched",
];

const KEYWORDS = [
  "react",
  "node",
  "express",
  "mongodb",
  "javascript",
  "typescript",
  "html",
  "css",
  "tailwind",
  "git",
  "github",
  "rest",
  "api",
  "jwt",
  "docker",
  "aws",
  "sql",
  "firebase",
];

export function analyzeResumeHealth(resumeData) {
  const info = resumeData.personalInfo || {};

  // --------------------------------
  // Combine Resume Text
  // --------------------------------

  const text = [
    info.summary || "",

    ...(resumeData.experience || []).map(
      (experience) => experience.description || ""
    ),

    ...(resumeData.projects || []).map(
      (project) => project.description || ""
    ),

    ...(resumeData.skills || []),
  ]
    .join(" ")
    .toLowerCase();

  // --------------------------------
  // Word Count
  // --------------------------------

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const wordCount = words.length;

  // --------------------------------
  // Action Verbs
  // --------------------------------

  const actionCount = ACTION_VERBS.filter((verb) => {
    const regex = new RegExp(`\\b${verb}\\b`, "i");
    return regex.test(text);
  }).length;

  const actionVerbs = Math.min(
    100,
    actionCount * 8
  );

  // --------------------------------
  // Technical Keywords
  // --------------------------------

  const keywordCount = KEYWORDS.filter((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    return regex.test(text);
  }).length;

  const keywords = Math.min(
    100,
    keywordCount * 6
  );

  // --------------------------------
  // Readability
  // --------------------------------

  let readability = 60;

  // Good target for a concise resume
  if (wordCount >= 250 && wordCount <= 700) {
    readability = 100;
  } else if (wordCount >= 180 && wordCount < 250) {
    readability = 90;
  } else if (wordCount > 700 && wordCount <= 850) {
    readability = 85;
  } else if (wordCount >= 100 && wordCount < 180) {
    readability = 75;
  } else if (wordCount > 850) {
    readability = 60;
  }

  // --------------------------------
  // Completeness
  // --------------------------------

  let filled = 0;
  let total = 0;

  const check = (value) => {
    total++;

    if (
      value !== undefined &&
      value !== null &&
      value.toString().trim()
    ) {
      filled++;
    }
  };

  // Personal information
  check(info.fullName);
  check(info.email);
  check(info.phone);
  check(info.location);
  check(info.linkedin);
  check(info.github);
  check(info.summary);

  // Education
  (resumeData.education || []).forEach((education) => {
    check(education.degree);
    check(education.institution);
    check(education.startDate);
    check(education.endDate);
  });

  // Experience
  (resumeData.experience || []).forEach((experience) => {
    check(experience.company);
    check(experience.position);
    check(experience.startDate);
    check(experience.endDate);
    check(experience.description);
  });

  // Projects
  (resumeData.projects || []).forEach((project) => {
    check(project.title);
    check(project.description);
    check(project.techStack);
  });

  // Skills
  if (resumeData.skills?.length) {
    check(resumeData.skills.join(", "));
  }

  const completeness =
    total > 0
      ? Math.round((filled / total) * 100)
      : 0;

  // --------------------------------
  // Content Quality
  // --------------------------------

  const contentQuality = Math.round(
    (
      actionVerbs +
      keywords +
      readability +
      completeness
    ) / 4
  );

  // --------------------------------
  // Overall Health
  // --------------------------------

  const overall = Math.round(
    (
      readability +
      keywords +
      actionVerbs +
      completeness +
      contentQuality
    ) / 5
  );

  return {
    readability,
    keywords,
    actionVerbs,
    completeness,
    contentQuality,
    overall,

    // Useful for UI
    wordCount,
    actionCount,
    keywordCount,
  };
}