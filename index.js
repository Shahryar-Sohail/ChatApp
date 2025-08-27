const http = require('http');
const express = require('express');
const {Server} = require('socket.io')

const app = express();
const server = http.createServer(app);
const path = require('path');
const io = new Server(server);

app.use(express.static(path.resolve("./public")))
app.get('/' , (req,res) => {
    res.sendFile('/public/index.html')
})


server.listen(9000 , ()=> console.log("Server is running on port 9000"));


//Socket.Io

io.on("connection", (socket) => {
    console.log("A New user connected ", socket.id);
    
});