const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: "Chagas",
    phone: "(11)3214-3545",
}

app.get("/", (req, res) => {
    fs.readFile('./templates/user.html', 'utf8', (err, data) => {
        if(!err) {
            res
        }
    })
})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})