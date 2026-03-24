const { body } = require("express-validator");

const projectValidator = [
  body("title").notEmpty().withMessage("Project title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("domain")
    .isIn(["Astronomy", "Rockets", "Satellites", "Robotics", "Space Biology"])
    .withMessage("Invalid domain"),
  body("status")
    .optional()
    .isIn(["Open", "In Progress", "Completed"])
    .withMessage("Invalid status")
];

module.exports = { projectValidator };
