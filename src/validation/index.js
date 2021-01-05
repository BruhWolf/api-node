const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})
const postUserValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
})
const delUserValidation = Joi.object({
    id: Joi.string().regex(/^\d+$/,"number").required()
})
const patchUserValidationParams = Joi.object({
    id: Joi.string().regex(/^\d+$/,"number").required()
})
const patchUserValidationBody = Joi.object({
    name: Joi.string(),
    email: Joi.string().email()
})
const putUserValidationParams = Joi.object({
    id: Joi.string().regex(/^\d+$/,"number").required()
})
const putUserValidationBody = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
})


module.exports = {
    validator,
    postUserValidation,
    delUserValidation,
    patchUserValidationBody,
    patchUserValidationParams,
    putUserValidationParams,
    putUserValidationBody
}