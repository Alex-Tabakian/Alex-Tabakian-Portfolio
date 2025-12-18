// index.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Path to JAR (do NOT put this in client/public)
const backendDir = __dirname; // folder containing this index.js and CheckersBot jar
const JAR_PATH = path.join(backendDir, "CheckersBot-1.0.jar");

// Optional: names of resource directories your jar expects (adjust if needed)
const EXPECTED_IMAGE_DIR = path.join(backendDir, "images");
const EXPECTED_SOUNDS_DIR = path.join(backendDir, "sounds");

// Simple POST endpoint to run the jar
app.post("/api/run-checkers", (req, res) => {
  // Optional: validate req.body to control inputs

  // Debug: show whether resource folders exist (helps troubleshooting)
  const imageExists = fs.existsSync(EXPECTED_IMAGE_DIR);
  const soundsExists = fs.existsSync(EXPECTED_SOUNDS_DIR);
  console.log("Launching JAR. backendDir:", backendDir, "imagesExists:", imageExists, "soundsExists:", soundsExists);

  // Start process with cwd set to backendDir so relative reads inside the JAR work
  const java = spawn("java", ["-jar", JAR_PATH], {
    cwd: backendDir,   // <- IMPORTANT: ensures relative paths inside Java are resolved to backend/
    timeout: 30000
  });

  let stdout = "";
  let stderr = "";

  java.stdout.on("data", (data) => {
    stdout += data.toString();
  });

  java.stderr.on("data", (data) => {
    stderr += data.toString();
  });

  java.on("close", (code, signal) => {
    const result = {
      exitCode: code,
      stdout: stdout.trim(),
      stderr: stderr.trim(),
      signal: signal
    };
    res.json(result);
  });

  java.on("error", (err) => {
    res.status(500).json({ error: "Failed to start Java process", details: err.message });
  });
});

// health
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`backend listening on ${PORT}`));
