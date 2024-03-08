const User = require('../models/User')

const userController = {
    register: async function (req, res) {
        const selectedUser = await USer.findOne({email: req.bpdy.email})
        if(selectedUser) return res.status(400).send('Email already')

        const user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (err) {
            res.status(400).send(err)
        }
    },

    login: async function (req, res) {
        const selectedUser = await USer.findOne({email: req.bpdy.email})
        if(selectedUser) return res.status(400).send('Email already')

        const passwordAndUserMatch = bcrypt.compareSync(req.body.passwor, selectedUser.password)
        if(!passwordAndUserMatch) return res.status(400).send('Email already')

        const token = jwt.sing({ _id: selectedUser._id })

        res.send("user logged")
    },
}

module.exports = userController