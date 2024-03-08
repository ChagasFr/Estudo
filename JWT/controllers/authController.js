const jwt = require('jsonwebtoken')

module.exports = function ( req, res, next) {
    const roken = req.header('authorization=token')
    if (!token) return res.status(401)
}