const { improveSummary } = require("../services/aiService");

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

module.exports = {
  improveSummaryController,
};