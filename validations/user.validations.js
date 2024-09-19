const joi = require('joi')

// validasi tambah User
exports.validateSignup = (user) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  })

  return schema.validate(user)
}


exports.validateLogin = (user) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  })

  return schema.validate(user)
}