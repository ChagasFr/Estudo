const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')

const Link = require('./models/Link')

// let link = new Link({
//     title: "chagas",
//     description: "Link para o X",
//     url: "https://twitter.com/Chagao",
//     click: 0,
// })
// link.save().then(doc => {
//     console.log(doc)
// }).catch(err => {console.log(err)})

// conexao com o mongo pelo link
mongoose.connect('mongodb://localhost/newlinks', { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => { console.log("Banco carregado"); })


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))