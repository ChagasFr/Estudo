require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')

app.user('/user', userRouter);
app.listen(process.env.PORT, () => {
    console.log("Server Running")
})