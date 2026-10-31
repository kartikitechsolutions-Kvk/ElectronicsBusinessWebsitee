const express = require("express");
const router = express.Router();

const Enquiry = require("../models/Enquiry");

// Submit enquiry
router.post("/", async (req, res) => {
  try {
    const { name, phone, appliance, message } = req.body;

    if (!name || !phone || !appliance || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const enquiry = await Enquiry.create({
      name,
      phone,
      appliance,
      message
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get enquiries
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1
    });

    res.json({
      success: true,
      data: enquiries
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;