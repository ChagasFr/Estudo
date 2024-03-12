const express  = require('express')
const app  = require('app')
const path  = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log("runing")
})
