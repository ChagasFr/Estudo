const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();

let user = {
    id: 0,
    name: "Felipe",
    phone: "(11) 9321938",

    id: 1,
    name: "Felipe",
    phone: "(11) 9321938",

    id: 2,
    name: "Felipe",
    phone: "(11) 9321938",

    id: 3,
    name: "Felipe",
    phone: "(11) 9321938"
}

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('user', { user } );
})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})