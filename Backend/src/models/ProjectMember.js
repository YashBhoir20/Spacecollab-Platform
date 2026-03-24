const mongoose = require("mongoose");

const projectMemberSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectMember", projectMemberSchema);
