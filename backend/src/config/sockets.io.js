const { Server } = require('socket.io');
const uuid = require('uuid');

// to store socket connections
const activeSockets = {};

const io = (server) => {
  // socket.io server
  const io = new Server(server);

  // // auth middleware for sockets
  // io.use((socket, next) => {
  //   const { token } = socket.handshake.auth;
  //   if (!token) return next(logger.error('Auth: Invalid or missing token'));
  //   const { _id } = jwt.verify(token, process.env.JWT_KEY);
  //   socket.handshake.auth._id = _id;
  //   next();
  // });

  // socket.io on connection event
  io.on('connection', (socket) => {
    addSocket(socket);
    // console.log('a user connected!', 'SOCKET_ID:',  socket.id , 'SOCKET_ROOMS:',[...socket.rooms]);
    console.log(
      ' %s socket(s) is/are connected',
      Object.values(activeSockets).length
    );
    console.log('%c prueba de css', 'color:red');

    socket.on('disconnect', () => {
      removeSocket(socket);
      console.log('user disconnected');
    });

    // when user emits event 'chat message'
    // server emit the same msg to all sockets
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', { msg: msg, senderId: socket.id });
    });

    // when user create a conection
    // create a new room
    socket.on('create-room-with-user', (otherSocketId) => {
      const roomName = generateRoomName();
      socket.join(roomName);
      console.log(`socket:${socket.id} added to room: ${roomName}`);

      io.in(otherSocketId).socketsJoin(roomName);
      console.log(`socket:${otherSocketId} added to room: ${roomName}`);
    });

    // send msg to user by room id
    socket.on('msg-room', ({ msg, room }) => {
      io.in(room).emit('room-msg', { msg, senderId: socket.id, room });
      console.log(socket.rooms);
    });

    // send active socket rooms
    socket.on('get-active-rooms', () => {
      io.to(socket.id).emit('set-active-rooms', [...socket.rooms]);
    });

    socket.on('get-active-sockets', async () => {
      // const sockets = Object.values(activeSockets);
      const fetchSockets = await io.fetchSockets();
      const socketIds = [];
      fetchSockets.forEach((s) => {
        if (socket.id !== s.id) socketIds.push(s.id);
      });
      console.log(socketIds);
      io.to(socket.id).emit('set-active-sockets', socketIds);
    });

    // TODO: implement typing... functionality for
    //  when auth module & rooms are done
    socket.on('typing', (isTyping, recipients, conversation, sender) => {
      recipients.forEach((recipient) => {
        if (activeSockets[recipient._id]) {
          activeSockets[recipient._id].forEach((r) => {
            socket.to(r).emit('typing', isTyping, conversation, sender);
          });
        }
      });
    });

    // TODO: implement named messages for when
    // auth module & rooms are done
    socket.on('sendMessage', ({ message, recipients, conversation }) => {
      recipients.forEach((recipient) => {
        if (activeSockets[recipient._id]) {
          activeSockets[recipient._id].forEach((r) => {
            socket.to(r).emit('receiveMessage', { message, conversation });
          });
        }
      });
    });
  });

  return io;
};

// fns
function addSocket(socket) {
  console.log(socket.id);
  const { _id } = socket.handshake.auth;
  if (!activeSockets[_id]) activeSockets[_id] = [socket.id];
  else activeSockets[_id] = [...activeSockets[_id], socket.id];
  console.log({ activeSockets });
}

function removeSocket(socket) {
  const { _id } = socket.handshake.auth;
  if (!_id || !activeSockets[_id]) return;
  const index = activeSockets[_id].indexOf(socket.id);
  activeSockets[_id].splice(index, 1);
  if (activeSockets[_id].length < 1) delete activeSockets[_id];
  console.log({ activeSockets });
}

function generateRoomName() {
  return uuid.v4();
}

module.exports = io;
