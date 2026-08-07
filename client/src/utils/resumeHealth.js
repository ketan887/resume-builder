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

  // Combine resume text
  const text = [
    info.summary,

    ...(resumeData.experience || []).map(e => e.description),

    ...(resumeData.projects || []).map(p => p.description),

    ...(resumeData.skills || [])
  ]
    .join(" ")
    .toLowerCase();

  // -----------------------
  // Action Verbs
  // -----------------------

  const actionCount = ACTION_VERBS.filter(word =>
    text.includes(word)
  ).length;

  const actionVerbs = Math.min(
    100,
    actionCount * 10
  );

  // -----------------------
  // Keywords
  // -----------------------

  const keywordCount = KEYWORDS.filter(word =>
    text.includes(word)
  ).length;

  const keywords = Math.min(
    100,
    keywordCount * 6
  );

  // -----------------------
  // Readability
  // -----------------------

  const words = text.split(/\s+/).length;

  let readability = 60;

  if (words > 120) readability = 80;
  if (words > 250) readability = 90;
  if (words > 400) readability = 100;

  // -----------------------
  // Completeness
  // -----------------------

  let filled = 0;
  let total = 0;

  function check(value) {
    total++;
    if (value && value.toString().trim())
      filled++;
  }

  check(info.fullName);
  check(info.email);
  check(info.phone);
  check(info.summary);

  (resumeData.education || []).forEach(e => {
    check(e.degree);
    check(e.institution);
  });

  (resumeData.experience || []).forEach(e => {
    check(e.company);
    check(e.position);
    check(e.description);
  });

  (resumeData.projects || []).forEach(p => {
    check(p.title);
    check(p.description);
    check(p.techStack);
  });

  const completeness = Math.round(
    (filled / total) * 100
  );

  // -----------------------
  // Content Quality
  // -----------------------

  const contentQuality = Math.round(
    (
      actionVerbs +
      keywords +
      readability +
      completeness
    ) / 4
  );

  return {

    readability,

    keywords,

    actionVerbs,

    completeness,

    contentQuality,

    overall: Math.round(
      (
        readability +
        keywords +
        actionVerbs +
        completeness +
        contentQuality
      ) / 5
    ),

  };
}