const Project = require("../models/Project");
const Notification = require("../models/Notification");

const getProjects = async (req, res) => {
  const { search, domain, status } = req.query;

  let query = {};

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }
  if (domain) {
    query.domain = domain;
  }
  if (status) {
    query.status = status;
  }

  const projects = await Project.find(query)
    .populate("created_by", "name email role")
    .populate("members", "name email role");

  res.json(projects);
};

const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id)
    .populate("created_by", "name email role")
    .populate("members", "name email role");

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.json(project);
};

const createProject = async (req, res) => {
  const { title, description, domain, status } = req.body;

  const project = await Project.create({
    title,
    description,
    domain,
    status: status || "Open",
    created_by: req.user._id,
    members: [req.user._id]
  });

  res.status(201).json(project);
};

const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  if (
    project.created_by.toString() !== req.user._id.toString() &&
    req.user.role !== "Admin"
  ) {
    res.status(403);
    throw new Error("Not allowed to update this project");
  }

  project.title = req.body.title || project.title;
  project.description = req.body.description || project.description;
  project.domain = req.body.domain || project.domain;
  project.status = req.body.status || project.status;

  const updated = await project.save();
  res.json(updated);
};

const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  if (
    project.created_by.toString() !== req.user._id.toString() &&
    req.user.role !== "Admin"
  ) {
    res.status(403);
    throw new Error("Not allowed to delete this project");
  }

  await project.deleteOne();
  res.json({ message: "Project deleted successfully" });
};

const joinProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  const alreadyJoined = project.members.includes(req.user._id);
  if (alreadyJoined) {
    res.status(400);
    throw new Error("Already joined this project");
  }

  project.members.push(req.user._id);
  await project.save();

  await Notification.create({
    user: project.created_by,
    message: `${req.user.name} joined your project "${project.title}"`
  });

  res.json({ message: "Joined project successfully", project });
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  joinProject
};
