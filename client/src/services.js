import io from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"]
  });
  console.log("Connecting...");
  socket.on("connect", () => console.log("Connected!"));
};

export const disconnectSocket = () => {
  console.log("Disconnecting...");
  if (socket) socket.disconnect();
};

export const setBackground = (background) => {
  if (socket) socket.emit("yeni-background", background);
};


export const subToBg  = (cb) => {
  if (!socket) return true;

  socket.on("receive-bg", (background) => {
    console.log("bg received: ", background);
    cb(background);
  });
};