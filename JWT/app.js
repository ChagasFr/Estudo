require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')

mongoose.connect(URL, 
    {
        userNewUrlParser: true, 
        useUnifiedTopology: true
    },
    (error) => {
        if (error)
            console.log(error)
        else 
            console.log("mongo connected")
    })

app.use('/user', express.json(), userRouter);

app.use('/admin', (req, res) => {
    res.send('Esse dado so deve ser visto pelo admin')
})

app.listen(process.env.PORT, () => {
    console.log("Server Running")
})