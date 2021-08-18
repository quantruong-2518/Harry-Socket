const { Server } = require("socket.io");

module.exports = class SocketServices {
  static init(server) {
    const io = new Server(server);

    io.on("connection", (socket) => {
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });

      socket.on("c_message", (msg) => {
        io.emit("b_message", msg);
      });

      // socket.broadcast.emit("hi");
    });
  }
};
