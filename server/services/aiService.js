const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ==========================================
// IMPROVE SUMMARY
// ==========================================

async function improveSummary(summary) {
  const prompt = `
You are an expert resume writer and ATS optimization specialist.

Rewrite the following professional resume summary.

STRICT REQUIREMENTS:
- Keep it between 25 and 45 words.
- Maximum 3 sentences.
- Keep it concise and professional.
- Keep it truthful.
- Do NOT invent experience, companies, achievements, metrics, or technologies.
- Use only skills and information already present.
- Make it ATS-friendly.
- Use relevant technical keywords naturally.
- Avoid generic filler.
- Do NOT use I, me, or my.
- Return ONLY the improved summary.
- Do NOT add explanations.
- Do NOT use quotation marks.

Original summary:
${summary}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text.trim();
}

// ==========================================
// IMPROVE EXPERIENCE
// ==========================================

async function improveExperience({
  description,
  position,
  company,
}) {
  const prompt = `
You are an expert resume writer and ATS optimization specialist.

Improve this work experience description.

Job Title:
${position || "Not provided"}

Company:
${company || "Not provided"}

Original description:
${description}

Requirements:
- Keep everything truthful.
- Do NOT invent achievements, metrics, technologies, or responsibilities.
- Use strong action-oriented language.
- Make it ATS-friendly.
- Focus on responsibilities, contributions, and impact.
- Return 2 to 4 concise resume bullet points.
- Put each bullet on a new line.
- Do NOT use bullet symbols.
- Return ONLY the improved bullet points.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text.trim();
}

// ==========================================
// IMPROVE PROJECT
// ==========================================

async function improveProject({
  title,
  techStack,
  description,
}) {
  const prompt = `
You are an expert resume writer and ATS optimization specialist.

Improve the following project description.

Project Title:
${title || "Not provided"}

Technology Stack:
${techStack || "Not provided"}

Original Description:
${description}

Requirements:
- Keep everything truthful.
- Do NOT invent features, achievements, metrics, users, technologies, or results.
- Use strong technical action verbs.
- Make it ATS-friendly.
- Naturally use technologies from the provided tech stack.
- Focus on implementation, functionality, and impact.
- Keep it concise.
- Return 3 to 4 resume bullet points.
- Put each bullet on a new line.
- Do NOT use bullet symbols.
- Return ONLY the improved bullet points.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text.trim();
}

// ==========================================
// OPTIMIZE ENTIRE RESUME
// ==========================================

async function optimizeResume(resumeData) {
  const prompt = `
You are an expert resume writer and ATS optimization specialist.

Optimize the following resume.

STRICT RULES:

1. Keep ALL information truthful.
2. Do NOT invent companies, jobs, degrees, achievements, metrics,
   skills, technologies, users, awards, or responsibilities.
3. Do NOT add new information.
4. Improve grammar, clarity, wording, and ATS keyword usage.
5. Keep the resume concise enough for ONE A4 page.
6. Use strong action verbs.
7. Keep the existing IDs exactly unchanged.
8. Only optimize:
   - professional summary
   - experience descriptions
   - project descriptions
9. Do NOT modify personal information.
10. Do NOT modify education.
11. Do NOT modify skills.
12. Do NOT modify certificates.
13. Do NOT modify languages.
14. Do NOT modify achievements.

IMPORTANT:
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT wrap the JSON in triple backticks.
Do NOT add explanations.

Return EXACTLY this structure:

{
  "summary": "optimized summary",

  "experience": [
    {
      "id": "existing id",
      "description": "optimized description"
    }
  ],

  "projects": [
    {
      "id": "existing id",
      "description": "optimized description"
    }
  ]
}

Resume data:

${JSON.stringify(resumeData)}
`;

  try {
    console.log("Sending resume to Gemini...");

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const rawText = response.text.trim();

    console.log("Gemini raw response:");
    console.log(rawText);

    // Remove markdown fences if Gemini accidentally adds them
    let cleanedText = rawText
      .replace(/^```json/i, "")
      .replace(/^```/i, "")
      .replace(/```$/i, "")
      .trim();

    // Find JSON boundaries if Gemini added extra text
    const firstBrace = cleanedText.indexOf("{");
    const lastBrace = cleanedText.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error(
        "Gemini did not return valid JSON."
      );
    }

    cleanedText = cleanedText.slice(
      firstBrace,
      lastBrace + 1
    );

    console.log("Cleaned JSON:");
    console.log(cleanedText);

    const parsed = JSON.parse(cleanedText);

    return parsed;

  } catch (error) {
    console.error(
      "OPTIMIZE RESUME SERVICE ERROR:",
      error
    );

    throw error;
  }
}

// ==========================================
// EXPORTS
// ==========================================

module.exports = {
  improveSummary,
  improveExperience,
  improveProject,
  optimizeResume,
};