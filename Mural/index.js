const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let posts = [
    {
        id: "kaldjhalkjhdslkjas",
        title: "Teste do mural",
        description: "Descricao"
    },
]

app.get("./all", (req, res) => {
    res.json(JSON.stringify(posts))
});

app.post("./new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

function generateID() {
    return Math.random().toString()
}