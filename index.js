const express = require('express'); // them thu vien
const app = express();

const http = require('http'); // them thu vien
const server = http.createServer(app);

const {
    Server
} = require('socket.io') // them thu vien
const io = new Server(server)

// bat dau web = cach hien thi file index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// socket ket noi . lay du lieu
io.on('connection',(socket) => {
    console.log('user connected')
    // lay du lieu tu khung on chat 
    socket.on('on-chat', data => {
        // console.log({
        //     data
        // })
        // gui du lieu cho tat ca nguoi dung
        io.emit('user-chat', data) // gui toi toan bo  nguoi dung
    })
})

server.listen(3000, () => {
    console.log('listening on port 3000 lan');
})