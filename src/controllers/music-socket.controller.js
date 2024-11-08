import { timeStampValidator } from "../utills/validators.utills.js";

const musicSocketConnector = (socket, musicSocketIO) => {
  socket.on("joinRoom", (data) => {
    if (typeof data.roomID !== "string") {
      throw new Error("Room ID must be of type String");
    }
    console.log(`User with ${socket.id} joined room ${data.roomID}`);
    socket.join(data.roomID);
  });
  socket.on("sendMessage", (data) => {
    try {
      if (data.type !== "music")
        throw new Error(`Required type as music but provided ${data.type}`);
      if (!data.roomID) throw new Error("RoomID not provided");
      if (!data.userID) throw new Error("UserID notp provided");
      if (!data.userName) throw new Error("UserName not provided");
      if (!data.timeStamp) throw new Error("Time Stamp not provided");
      if (timeStampValidator(data.timeStamp)) {
        musicSocketIO.to(data.roomID).emit("recieveMessage", data);
      }
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  });
  socket.on("disconnect", () => {
    console.log(`User with Socket ID: ${socket.id} disconnected`);
  });
};

export { musicSocketConnector };
