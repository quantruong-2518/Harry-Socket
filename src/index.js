const express = require("express");
const http = require("http");
const path = require('path');

const SocketServices = require("./socket");

const app = express();
const server = http.createServer(app);

var dir = path.join(__dirname, "public");
app.use(express.static(dir));

const PORT = process.env.PORT || 3000;
app.set("port", PORT);

SocketServices.init(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(PORT, () => {
  console.log(`~~~~Listening on *: ${PORT}`);
});
