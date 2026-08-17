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
  "maintained",
  "tested",
  "analyzed",
  "created",
  "delivered",
];

const TECHNICAL_KEYWORDS = [
  "react",
  "react.js",
  "node",
  "node.js",
  "express",
  "express.js",
  "mongodb",
  "mongoose",
  "javascript",
  "typescript",
  "python",
  "java",
  "sql",
  "html",
  "css",
  "tailwind",
  "rest",
  "api",
  "jwt",
  "git",
  "github",
  "docker",
  "aws",
  "firebase",
  "supabase",
];

function hasActionVerb(text = "") {
  const lowerText = text.toLowerCase();

  return ACTION_VERBS.some((verb) =>
    lowerText.includes(verb)
  );
}

function hasTechnicalKeyword(text = "") {
  const lowerText = text.toLowerCase();

  return TECHNICAL_KEYWORDS.some((keyword) =>
    lowerText.includes(keyword)
  );
}

function hasMetric(text = "") {
  if (!text) return false;

  return (
    /\d+%/.test(text) ||
    /\d+\+/.test(text) ||
    /\d+\s*(users|clients|projects|requests|records|applications)/i.test(
      text
    )
  );
}

export function calculateATSScore(resumeData) {
  const suggestions = [];
  const sectionScores = {};

  let totalScore = 0;

  const personalInfo = resumeData.personalInfo || {};

  // =====================================================
  // PERSONAL INFORMATION — 10 POINTS
  // =====================================================

  let personalScore = 0;

  if (personalInfo.fullName) personalScore += 2;
  if (personalInfo.email) personalScore += 2;
  if (personalInfo.phone) personalScore += 2;
  if (personalInfo.location) personalScore += 1;
  if (personalInfo.linkedin) personalScore += 1;
  if (personalInfo.github || personalInfo.portfolio) {
    personalScore += 1;
  }

  if (personalInfo.title) personalScore += 1;

  if (!personalInfo.email) {
    suggestions.push("Add a professional email address.");
  }

  if (!personalInfo.phone) {
    suggestions.push("Add your phone number.");
  }

  if (!personalInfo.linkedin) {
    suggestions.push("Add your LinkedIn profile.");
  }

  sectionScores.personal = Math.min(personalScore, 10);
  totalScore += sectionScores.personal;

  // =====================================================
  // PROFESSIONAL SUMMARY — 10 POINTS
  // =====================================================

  let summaryScore = 0;

  const summary = personalInfo.summary?.trim() || "";

  if (summary) {
    summaryScore += 4;

    if (summary.length >= 80 && summary.length <= 500) {
      summaryScore += 2;
    }

    if (hasTechnicalKeyword(summary)) {
      summaryScore += 2;
    }

    if (summary.split(/\s+/).length <= 80) {
      summaryScore += 2;
    }
  } else {
    suggestions.push(
      "Add a concise professional summary."
    );
  }

  if (summary.length > 600) {
    suggestions.push(
      "Shorten your professional summary."
    );
  }

  sectionScores.summary = Math.min(summaryScore, 10);
  totalScore += sectionScores.summary;

  // =====================================================
  // EDUCATION — 10 POINTS
  // =====================================================

  let educationScore = 0;

  const education =
    resumeData.education?.filter(
      (education) =>
        education.degree ||
        education.institution
    ) || [];

  if (education.length > 0) {
    educationScore += 6;

    const completeEducation = education.some(
      (education) =>
        education.degree &&
        education.institution
    );

    if (completeEducation) {
      educationScore += 4;
    }
  } else {
    suggestions.push("Add your education details.");
  }

  sectionScores.education = Math.min(
    educationScore,
    10
  );

  totalScore += sectionScores.education;

  // =====================================================
  // EXPERIENCE — 20 POINTS
  // =====================================================

  let experienceScore = 0;

  const experience =
    resumeData.experience?.filter(
      (experience) =>
        experience.company ||
        experience.position
    ) || [];

  if (experience.length > 0) {
    experienceScore += 8;

    let hasGoodDescription = false;
    let hasActionVerb = false;
    let hasMeasurement = false;

    experience.forEach((experience) => {
      const description =
        experience.description || "";

      if (description.length >= 80) {
        hasGoodDescription = true;
      }

      if (hasActionVerb(description)) {
        hasActionVerb = true;
      }

      if (hasMetric(description)) {
        hasMeasurement = true;
      }
    });

    if (hasGoodDescription) {
      experienceScore += 4;
    }

    if (hasActionVerb) {
      experienceScore += 4;
    }

    if (hasMeasurement) {
      experienceScore += 4;
    }
  } else {
    suggestions.push(
      "Add work experience or internship experience."
    );
  }

  if (
    experience.length > 0 &&
    !experience.some((experience) =>
      hasMetric(experience.description)
    )
  ) {
    suggestions.push(
      "Add measurable results to your experience bullets."
    );
  }

  sectionScores.experience = Math.min(
    experienceScore,
    20
  );

  totalScore += sectionScores.experience;

  // =====================================================
  // PROJECTS — 20 POINTS
  // =====================================================

  let projectScore = 0;

  const projects =
    resumeData.projects?.filter(
      (project) =>
        project.title ||
        project.description
    ) || [];

  if (projects.length > 0) {
    projectScore += 5;

    const completeProject = projects.some(
      (project) =>
        project.title &&
        project.techStack &&
        project.description
    );

    if (completeProject) {
      projectScore += 5;
    }

    const technicalProject = projects.some(
      (project) =>
        hasTechnicalKeyword(
          `${project.techStack || ""} ${
            project.description || ""
          }`
        )
    );

    if (technicalProject) {
      projectScore += 4;
    }

    const strongProject = projects.some(
      (project) =>
        hasActionVerb(
          project.description || ""
        )
    );

    if (strongProject) {
      projectScore += 3;
    }

    const projectWithLink = projects.some(
      (project) =>
        project.github ||
        project.liveDemo
    );

    if (projectWithLink) {
      projectScore += 3;
    }
  } else {
    suggestions.push(
      "Add at least one technical project."
    );
  }

  sectionScores.projects = Math.min(
    projectScore,
    20
  );

  totalScore += sectionScores.projects;

  // =====================================================
  // TECHNICAL SKILLS — 15 POINTS
  // =====================================================

  let skillsScore = 0;

  const skills =
    resumeData.skills || [];

  if (skills.length >= 10) {
    skillsScore = 10;
  } else if (skills.length >= 7) {
    skillsScore = 8;
  } else if (skills.length >= 4) {
    skillsScore = 6;
  } else if (skills.length > 0) {
    skillsScore = 4;
  } else {
    suggestions.push(
      "Add relevant technical skills."
    );
  }

  const skillsText =
    skills.join(" ").toLowerCase();

  const technicalSkillCount =
    TECHNICAL_KEYWORDS.filter((keyword) =>
      skillsText.includes(keyword)
    ).length;

  if (technicalSkillCount >= 5) {
    skillsScore += 5;
  } else if (technicalSkillCount >= 3) {
    skillsScore += 3;
  }

  sectionScores.skills = Math.min(
    skillsScore,
    15
  );

  totalScore += sectionScores.skills;

  // =====================================================
  // CERTIFICATES — 5 POINTS
  // =====================================================

  let certificateScore = 0;

  const certificates =
    resumeData.certificates?.filter(
      (certificate) =>
        certificate.name
    ) || [];

  if (certificates.length > 0) {
    certificateScore = 5;
  }

  sectionScores.certificates =
    certificateScore;

  totalScore += certificateScore;

  // =====================================================
  // ACHIEVEMENTS — 5 POINTS
  // =====================================================

  let achievementScore = 0;

  const achievements =
    resumeData.achievements?.filter(
      (achievement) =>
        achievement.title ||
        achievement.description
    ) || [];

  if (achievements.length > 0) {
    achievementScore = 5;
  }

  sectionScores.achievements =
    achievementScore;

  totalScore += achievementScore;

  // =====================================================
  // LANGUAGES — 5 POINTS
  // =====================================================

  let languageScore = 0;

  const languages =
    resumeData.languages?.filter(
      (language) =>
        language.name
    ) || [];

  if (languages.length > 0) {
    languageScore = 5;
  }

  sectionScores.languages =
    languageScore;

  totalScore += languageScore;

  // =====================================================
  // FINAL SCORE
  // =====================================================

  totalScore = Math.min(
    Math.round(totalScore),
    100
  );

  return {
    score: totalScore,
    suggestions,
    sectionScores,
  };
}