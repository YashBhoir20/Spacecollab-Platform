const express = require("express");
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  joinProject
} = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { projectValidator } = require("../validators/projectValidators");

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", protect, projectValidator, validate, createProject);
router.put("/:id", protect, projectValidator, validate, updateProject);
router.delete("/:id", protect, deleteProject);
router.post("/:id/join", protect, joinProject);

module.exports = router;
