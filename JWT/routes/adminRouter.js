const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Esse dado so deve ser visto pelo admin')
})

module.exports = router