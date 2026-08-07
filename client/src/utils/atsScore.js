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

export function calculateATSScore(resumeData) {
  let totalScore = 0;

  const suggestions = [];
  const sectionScores = {};

  // ----------------------------
  // PERSONAL INFO (10)
  // ----------------------------

  let personal = 0;
  const info = resumeData.personalInfo || {};

  if (info.fullName) personal += 2;
  if (info.email) personal += 2;
  if (info.phone) personal += 2;
  if (info.location) personal += 1;
  if (info.linkedin) personal += 1;
  if (info.github || info.portfolio) personal += 1;

  if (info.summary && info.summary.length >= 80)
    personal += 1;

  if (personal < 10)
    suggestions.push("Complete all contact information.");

  sectionScores.personal = personal;
  totalScore += personal;

  // ----------------------------
  // EDUCATION (10)
  // ----------------------------

  let educationScore = 0;

  const education =
    resumeData.education?.filter(
      (e) => e.degree || e.institution
    ) || [];

  if (education.length > 0)
    educationScore = 10;
  else
    suggestions.push("Add your education.");

  sectionScores.education = educationScore;
  totalScore += educationScore;

  // ----------------------------
  // EXPERIENCE (20)
  // ----------------------------

  let experienceScore = 0;

  const experience =
    resumeData.experience?.filter(
      (e) => e.company || e.position
    ) || [];

  if (experience.length > 0) {

    experienceScore += 10;

    experience.forEach((exp) => {

      if (exp.description?.length > 80)
        experienceScore += 3;

      const text =
        exp.description?.toLowerCase() || "";

      const hasVerb = ACTION_VERBS.some((verb) =>
        text.includes(verb)
      );

      if (hasVerb)
        experienceScore += 2;

    });

    experienceScore = Math.min(
      experienceScore,
      20
    );

  } else {
    suggestions.push(
      "Add internship or work experience."
    );
  }

  sectionScores.experience = experienceScore;
  totalScore += experienceScore;

  // ----------------------------
  // PROJECTS (20)
  // ----------------------------

  let projectScore = 0;

  const projects =
    resumeData.projects?.filter(
      (p) => p.title
    ) || [];

  if (projects.length > 0) {

    projects.forEach((project) => {

      if (project.title)
        projectScore += 3;

      if (project.description?.length > 80)
        projectScore += 4;

      if (project.techStack)
        projectScore += 3;

      if (project.github)
        projectScore += 2;

      if (project.liveDemo)
        projectScore += 2;

    });

    projectScore = Math.min(
      projectScore,
      20
    );

  } else {

    suggestions.push(
      "Add at least one complete project."
    );

  }

  sectionScores.projects = projectScore;
  totalScore += projectScore;

  // ----------------------------
  // SKILLS (15)
  // ----------------------------

  let skillScore = 0;

  const skills = resumeData.skills || [];

  if (skills.length >= 12)
    skillScore = 15;
  else if (skills.length >= 8)
    skillScore = 12;
  else if (skills.length >= 5)
    skillScore = 9;
  else
    suggestions.push(
      "Add more technical skills."
    );

  sectionScores.skills = skillScore;
  totalScore += skillScore;

  // ----------------------------
  // CERTIFICATES (5)
  // ----------------------------

  let certificateScore = 0;

  if (
    resumeData.certificates?.some(
      (c) => c.name
    )
  )
    certificateScore = 5;

  sectionScores.certificates =
    certificateScore;

  totalScore += certificateScore;

  // ----------------------------
  // ACHIEVEMENTS (5)
  // ----------------------------

  let achievementScore = 0;

  if (
    resumeData.achievements?.some(
      (a) => a.title
    )
  )
    achievementScore = 5;

  sectionScores.achievements =
    achievementScore;

  totalScore += achievementScore;

  // ----------------------------
  // QUALITY BONUS (15)
  // ----------------------------

  let quality = 0;

  if (suggestions.length <= 2)
    quality = 15;
  else if (suggestions.length <= 5)
    quality = 10;
  else
    quality = 5;

  sectionScores.quality = quality;

  totalScore += quality;

  totalScore = Math.min(totalScore, 100);

  return {
    score: totalScore,
    suggestions,
    sectionScores,
  };
}