const server = require("./server");
const dotenv = require("dotenv").config();

const http = require("http").createServer(server);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 4000;

io.on("connection", socket => {
  let addedUser = false;

  socket.on("add user", username => {
    console.log(username);
    if (addedUser) return;

    socket.username = username;
    addedUser = true;
    socket.broadcast.emit("user joined", {
      username: socket.username,
      message: `${socket.username} has joined!`
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("new message", data => {
    console.log(data, socket.username);
    io.emit("new message", {
      username: socket.username,
      message: data
    });
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}~`);
});

// server.listen(PORT, () => console.log(`WE ARE LISTENING ON PORT: ${PORT}!`))
