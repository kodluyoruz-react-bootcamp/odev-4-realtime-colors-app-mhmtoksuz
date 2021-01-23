const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.end("abc");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(4000, () => {
  console.log('listening on *:3000');
});