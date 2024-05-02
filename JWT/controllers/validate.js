const Joi = require('@hapi/joi');

const registerValidate = (data) => {
    const schema = Joi.object ({
        name: Join.string().required().min(3).max(50),
        email: Join.string().required().min(3).max(50),
        password: Join.string().required().min(6).max(500)
    })

    return schema.validade(data)
}

const loginValidate = (data) => {
    const schema = Joi.object ({
        email: Join.string().required().min(3).max(50),
        password: Join.string().required().min(6).max(500)
    })

    return schema.validade(data)
}

module.exports.loginValidate = loginValidate
module.exports.registerValidate = registerValidate