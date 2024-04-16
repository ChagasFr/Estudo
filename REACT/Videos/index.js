const express = require ('express')
const app = express();
const path = require("path");

const videos = [
    "k312jh1kj23h",
    "lk76567kl5j6",
    "43hj2g4j23hj",
    "sad904j23kwe",
    "dsa67SDL2345",
]

app.get('/api/videos', (req, res) => {
    res.send(videos);
})

app.use(express.static(path.join(__dirname, 'front/build')))

app.listen(3000, () => {
    console.log('running')
})