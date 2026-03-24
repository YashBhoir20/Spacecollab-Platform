const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinProjectRoom", (projectId) => {
      socket.join(projectId);
    });

    socket.on("sendProjectMessage", ({ projectId, message, user }) => {
      io.to(projectId).emit("receiveProjectMessage", {
        user,
        message,
        createdAt: new Date()
      });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = initSocket;
