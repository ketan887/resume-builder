const SKILLS = [
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
  "firebase",
  "sql",
  "mysql",
  "postgresql",
  "next.js",
  "redux",
  "vite",
];

export function matchResume(resumeData, jobDescription) {
  if (!jobDescription.trim()) {
    return {
      score: 0,
      matched: [],
      missing: [],
      suggestions: [],
    };
  }

  const resumeText = [
    resumeData.personalInfo.summary,

    ...(resumeData.skills || []),

    ...(resumeData.projects || []).map(
      (p) =>
        `${p.techStack} ${p.description}`
    ),

    ...(resumeData.experience || []).map(
      (e) => e.description
    ),
  ]
    .join(" ")
    .toLowerCase();

  const jd = jobDescription.toLowerCase();

  const requiredSkills = SKILLS.filter((skill) =>
    jd.includes(skill)
  );

  const matched = [];
  const missing = [];

  requiredSkills.forEach((skill) => {
    if (resumeText.includes(skill))
      matched.push(skill);
    else
      missing.push(skill);
  });

  const score =
    requiredSkills.length === 0
      ? 100
      : Math.round(
          (matched.length /
            requiredSkills.length) *
            100
        );

  const suggestions = missing.map(
    (skill) =>
      `Consider adding ${skill} if you have relevant experience.`
  );

  return {
    score,
    matched,
    missing,
    suggestions,
  };
}