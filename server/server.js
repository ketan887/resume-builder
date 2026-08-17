const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const projectRoutes = require("./routes/projectRoutes");


const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ResumeBuilder Pro API is running 🚀",
  });
});

app.use("/api/ai", aiRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/projects", projectRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});