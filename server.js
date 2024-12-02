const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Express 애플리케이션 초기화
const app = express();
const server = http.createServer(app);

// Socket.io 초기화 및 CORS 설정
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",  // 모든 클라이언트의 접근 허용 (개발 용도로만)
    methods: ["GET", "POST"]
  }
});

// 클라이언트가 연결할 때의 핸들러
io.on('connection', socket => {
  console.log('A user connected:', socket.id);

  // 클라이언트가 채팅방에 참가할 때
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
    socket.to(room).emit('message', { text: `User ${socket.id} joined the room.` });
  });

  // 클라이언트가 메시지를 보낼 때
  socket.on('chatMessage', (room, message) => {
    io.to(room).emit('message', message); // 방에 있는 모든 클라이언트에게 메시지 전송
  });

  // 클라이언트가 연결 종료할 때
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// 3000번 포트에서 서버 시작
server.listen(4000, '0.0.0.0', () => {
  console.log('Server is running on port 4000');
});