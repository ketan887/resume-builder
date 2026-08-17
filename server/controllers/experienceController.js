const {
  improveExperience,
} = require("../services/aiService");

async function improveExperienceController(req, res) {
  try {
    const { description, position, company } = req.body;

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

module.exports = {
  improveExperienceController,
};