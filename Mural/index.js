const PORT = 3000;
const bodyParser = require('body-parser');
const posts = require('./model/posts');
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

