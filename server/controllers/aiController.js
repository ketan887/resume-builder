const {
  improveSummary,
  improveExperience,
  improveProject,
  optimizeResume,
} = require("../services/aiService");

// ================================
// IMPROVE SUMMARY
// ================================

async function improveSummaryController(req, res) {
  try {
    const { summary } = req.body;

    if (!summary || !summary.trim()) {
      return res.status(400).json({
        success: false,
        message: "Summary is required",
      });
    }

    const improvedSummary = await improveSummary(summary);

    res.json({
      success: true,
      improvedSummary,
    });

  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to improve summary",
    });
  }
}


// ================================
// IMPROVE EXPERIENCE
// ================================

async function improveExperienceController(req, res) {
  try {
    const {
      description,
      position,
      company,
    } = req.body;

    if (!description || !description.trim()) {
      return res.status(400).json({
        success: false,
        message: "Experience description is required",
      });
    }

    const improvedDescription = await improveExperience({
      description,
      position,
      company,
    });

    res.json({
      success: true,
      improvedDescription,
    });

  } catch (error) {
    console.error("Experience AI Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to improve experience",
    });
  }
}


// ================================
// OPTIMIZE ENTIRE RESUME
// ================================

async function optimizeResumeController(req, res) {
  try {
    const { resumeData } = req.body;

    if (!resumeData) {
      return res.status(400).json({
        success: false,
        message: "Resume data is required",
      });
    }

    const optimizedResume = await optimizeResume(resumeData);

    res.json({
      success: true,
      optimizedResume,
    });

  } catch (error) {
  console.error("Resume Optimization Error:", error);

  res.status(500).json({
    success: false,
    message: error.message || "Failed to optimize resume",
    error: error.toString(),
  });
}
}


// ================================
// EXPORT
// ================================

module.exports = {
  improveSummaryController,
  improveExperienceController,
  optimizeResumeController,
};