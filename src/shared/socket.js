import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000', {
  transports: ['websocket'],
});

export default function subscribeToTimer(callback) {
  socket.on('timer', timestamp => callback(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
