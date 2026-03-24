const Comment = require("../models/Comment");

const getCommentsByProject = async (req, res) => {
  const comments = await Comment.find({ project_id: req.params.projectId })
    .populate("user_id", "name role")
    .sort({ createdAt: -1 });

  res.json(comments);
};

const addComment = async (req, res) => {
  const comment = await Comment.create({
    user_id: req.user._id,
    project_id: req.params.projectId,
    content: req.body.content
  });

  const populated = await comment.populate("user_id", "name role");
  res.status(201).json(populated);
};

module.exports = { getCommentsByProject, addComment };
