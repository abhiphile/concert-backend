import express from "express";
import http from "http";
import { Server } from "socket.io";
import { chatsSocketConnector } from "./controllers/chat-socket.controller.js";
import { musicSocketConnector } from "./controllers/music-socket.controller.js";
import redisLimiter from "./utills/rate-limiter.utills.js";

const app = express();
app.use(redisLimiter);
app.use(express.json({ limit: "14kb" }));

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send({ message: "App is running" });
});

const chatsSocketIO = io.of("/api/v1/chats");
const musicSocketIO = io.of("api/v1/music");

// Connection for chat and music socket
chatsSocketIO.on("connection", (socket) => {
  console.log(`New user connected to chat Socket with ID ${socket.id}`);
  chatsSocketConnector(socket, chatsSocketIO);
});

musicSocketIO.on("connection", (socket) => {
  console.log(`New User connted to music Socket with ID ${socket.id}`);
  musicSocketConnector(socket, musicSocketIO);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
