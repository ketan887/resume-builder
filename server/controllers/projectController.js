const { improveProject } = require("../services/aiService");

async function improveProjectController(req, res) {
  try {
    const {
      title,
      techStack,
      description,
    } = req.body;

    if (!description || !description.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project description is required",
      });
    }

    const improvedDescription = await improveProject({
      title,
      techStack,
      description,
    });

    res.json({
      success: true,
      improvedDescription,
    });
  } catch (error) {
    console.error("Project AI Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to improve project",
    });
  }
}

module.exports = {
  improveProjectController,
};