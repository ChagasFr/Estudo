const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {typr: String, required: true, minlength: 3, maxLength: 50},
    email: {typr: String, required: true, minlength: 3, maxLength: 100},
    passwort: {typr: String, required: true, minlength: 6, maxLength: 10},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema);