const knex = require('../conexao.js');

const listarClientes = async (req, res) => {
    try {
        const clientes = await knex('clientes')

        res.status(200).json(clientes)
    } 
    catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = {
    listarClientes
}