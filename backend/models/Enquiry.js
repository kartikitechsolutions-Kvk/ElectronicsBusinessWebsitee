const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    phone: {
      type: String,
      required: true,
      trim: true
    },

    appliance: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Completed"],
      default: "New"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);