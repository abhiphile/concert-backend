const chatsSocketConnector = (socket, chatsSocketIO) => {
  socket.on("joinRoom", (data) => {
    try {
      if (typeof data.roomID !== "string") {
        throw new Error("Room ID must be of type String");
      }
      socket.join(data.roomID);
    } catch (error) {
      console.log(error.message);
    }
  });
  socket.on("sendMessage", (data) => {
    try {
      if (data.type !== "chat")
        throw new Error(
          `Type of data should be chat but provided ${data.type}`,
        );
      if (!data.roomID)
        throw new Error("RoomID not provided while doing the chat");
      if (!data.message) throw new Error("No incoming message provided");
      chatsSocketIO.to(data.roomID).emit("recieveMessage", data);
    } catch (error) {
      console.log(error.message);
    }
  });
};

export { chatsSocketConnector };
