const express  = require('express')
const path  = require('path')
const socketIO  = require('socket.io')

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, () => {
    console.log("running"); 
})

const randoms = []

const io = socketIO(server)

// conexao entre front - back
io.on('connection', (socket) => {
    console.log("New connection");

    const random = Math.random()
    randoms.push(random)

    socket.emit('hello', { msg: `seja bem vindo ! ${ randoms }` })

    socket.on('hello_client_response', (data) => {
        console.log(data.msg)
    })
})