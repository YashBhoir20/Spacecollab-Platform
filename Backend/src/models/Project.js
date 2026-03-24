const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    domain: {
      type: String,
      enum: ["Astronomy", "Rockets", "Satellites", "Robotics", "Space Biology"],
      required: true
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Completed"],
      default: "Open"
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    files: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
