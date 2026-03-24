const Notification = require("../models/Notification");

const getNotifications = async (req, res) => {
  const notifications = await Notification.find({ user: req.user._id }).sort({
    createdAt: -1
  });
  res.json(notifications);
};

const markAsRead = async (req, res) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    res.status(404);
    throw new Error("Notification not found");
  }

  if (notification.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not allowed");
  }

  notification.read = true;
  await notification.save();

  res.json(notification);
};

module.exports = { getNotifications, markAsRead };
