const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get('/', (req, res, next) => {
  res.end("<h1>Selamun Aleykum</h1>");
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on("yeni-background", (background) => {
    socket.broadcast.emit("receive-bg", background);
  });
  socket.on("disconnect", () => console.log("user disconnected"));
});



http.listen(process.env.PORT || 3000, () => {
  console.log('3000 portu çalışıyor');
});