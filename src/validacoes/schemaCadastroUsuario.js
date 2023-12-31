const joi = require('joi')

const schemaCadastroUsuario = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'É necessário inserir o nome para cadastro.',
        'string.empty': 'É necessário inserir o nome para cadastro.'
    }),
    email: joi.string().required().email().messages({
        'any.required': 'É necessário inserir o email para cadastro.',
        'string.empty': 'É necessário inserir o email para cadastro.',
        'string.email': 'É necessário inserir um email válido para cadastro.'
    }),
    senha: joi.string().required().messages({
        'any.required': 'É necessário inserir a senha para cadastro.',
        'string.empty': 'É necessário inserir a senha para cadastro.'
    })
})

module.exports = schemaCadastroUsuario