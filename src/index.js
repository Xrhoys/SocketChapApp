const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", (req, res) => {
  res.send("Landing page of the backend");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  sendMessage(socket.id, "MESSAGE FROM SERVER");
});

io.on("client_sendMessage", (data) => {
  console.log(data);
});

const sendMessage = (id, message) => {
  io.emit("server_sendMessage", { id, message });
};

http.listen(5000, function () {
  console.log("Listening on *: 5000");
});
