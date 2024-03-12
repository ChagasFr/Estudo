const express  = require('express')
const app  = require('app')
const socketIO  = require('socket.io')
const path  = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, () => {
    console.log("runing")
})

const messages = []

const io = socketIO(server)

io.on('connection', (socket) => {
    console.log("new connection")

    socket.on('hello_client_response', (data) => {
        messages.push(data.msg)
        console.log(data.msg)
        io.emit('update_messages', messages)
        
    })

})