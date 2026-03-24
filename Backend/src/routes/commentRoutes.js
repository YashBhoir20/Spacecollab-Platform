const express = require("express");
const { getCommentsByProject, addComment } = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");
const { commentValidator } = require("../validators/commentValidators");
const validate = require("../middleware/validateMiddleware");

const router = express.Router();

router.get("/:projectId", getCommentsByProject);
router.post("/:projectId", protect, commentValidator, validate, addComment);

module.exports = router;
