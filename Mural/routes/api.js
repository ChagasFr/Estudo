const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: "http://programadorbr.com"
}

router.unsubscribe(cors(options));

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