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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/build/index.html', function(error) {
        if(error) {
            res.status(500).send(error)
        }
    }))
})

app.listen(3000, () => {
    console.log('running')
})