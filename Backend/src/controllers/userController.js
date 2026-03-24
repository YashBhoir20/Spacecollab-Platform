const User = require("../models/User");
const Project = require("../models/Project");

const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  const projects = await Project.find({ members: req.user._id });
  res.json({ user, projects });
};

const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.name = req.body.name || user.name;
  user.bio = req.body.bio || user.bio;
  user.avatar = req.body.avatar || user.avatar;

  const updated = await user.save();
  res.json(updated);
};

module.exports = { getProfile, updateProfile };
