const server = require("./server");
const dotenv = require("dotenv").config();

const http = require("http").createServer(server);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 4000;

io.on("connection", socket => {
  socket.on("add user", name => {
    socket.broadcast.emit("user joined", { name: name });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}~`);
});

// server.listen(PORT, () => console.log(`WE ARE LISTENING ON PORT: ${PORT}!`))
