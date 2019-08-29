const socketio = require("socket.io");
const Room = require("./models/Room")

module.exports = server => {
  const io = socketio(server);
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on('subscribe', (room) => {
      console.log('joining room', `${room} ${room}`);
      // socket.join(`${room.room} ${room.num}`);
  });
  socket.on('mensajeria', ({room, msg}) => {
      console.log(room)
      console.log('sending room post', `${room} ${room}`);
      // io.sockets.in(`${room.room} ${room.num}`).emit('front!', {
      //     message: msg.message || msg
      // });
  });






    // socket.on("mensajeria", m => {
    //   console.log(`NUEVO MENSAJE: ${m}`);
    //   socket.broadcast.emit("front", m);
    // });
  });
};