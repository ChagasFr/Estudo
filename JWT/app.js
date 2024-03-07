require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')

mongoose.connect(URL, {userNewUrlParser: true, useUnifiedTopology: true})

app.use('/user', express.json(), userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server Running")
})