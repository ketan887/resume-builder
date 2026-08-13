const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function improveSummary(summary) {
  const prompt = `
You are an expert resume writer and ATS optimization specialist.

Improve the following professional resume summary.

Requirements:
- Keep it truthful.
- Do not invent experience, companies, achievements, or numbers.
- Make it professional and concise.
- Use strong action-oriented language where appropriate.
- Include relevant technical skills already present in the text.
- Make it ATS-friendly.
- Keep it between 40 and 80 words.
- Return ONLY the improved summary.
- Do not use quotation marks.
- Do not add explanations.

Original summary:
${summary}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text.trim();
}

module.exports = {
  improveSummary,
};