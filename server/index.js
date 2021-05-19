const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

app.use(cors());
app.use(router)

io.on('connection', (socket) => {
    console.log('new connection');

    socket.on('join', (params, callback) =>{
        const { name, room } = params;

        const { user, error } = addUser({ id: socket.id, name, room });

        if(error) {
            callback(error);
            return;
        }
        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room "${user.room}"` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        callback();
    })

    socket.on('disconnect', () =>{
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` })
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }

        console.log('disconnected');

    })
})


server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
