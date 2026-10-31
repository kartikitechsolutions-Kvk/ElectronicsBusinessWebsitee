require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use(express.json({ limit: "10kb" }));

// Connect MongoDB
connectDB();

// Home API
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to NIKHIL Electronics & Service Care API",
    status: "Running"
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "API is working" });
});

// Enquiry API
app.use("/api/enquiries", require("./routes/enquiryRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});