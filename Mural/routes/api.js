const express = require('express');
const router = express.Router()

router.get("./all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});

router.post("./new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPosts(title, description)

    res.send("Post adicinado");
});

module.exports(router)