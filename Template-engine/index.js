const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();

let user = {
    name: "Felipe Chagas"
}

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('user', {name: "Felipe Chagas", phone: "(11) 321-302"} )
})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})