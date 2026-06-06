// Importa o model de professores
const professorModel = require('../models/professorModel');

// Função para listar todos os professores
const listarProfessores = async (req, res) => {

    // Chama a função do model para buscar os professores
    const professores = await professorModel.listarProfessores();

    // Retorna os professores em formato JSON
    res.json(professores);
};

// Função para cadastrar um novo professor
const criarProfessor = async (req, res) => {

    // Recebe os dados enviados na requisição
    const professor = req.body;

    // Chama a função do model para salvar no banco
    await professorModel.criarProfessor(professor);

    // Retorna uma mensagem de sucesso
    res.status(201).json({
        mensagem: 'Professor cadastrado com sucesso'
    });
};

// Função para buscar um professor pelo ID
const buscarProfessorPorId = async (req, res) => {

    // Obtém o ID enviado na URL
    const { id } = req.params;

    // Busca o professor no banco de dados
    const professor =
    await professorModel.buscarProfessorPorId(id);

    // Retorna o professor encontrado
    res.json(professor);
};

// Função para atualizar um professor
const atualizarProfessor = async (req, res) => {

    // Obtém o ID enviado na URL
    const { id } = req.params;

    // Recebe os novos dados enviados na requisição
    const professor = req.body;

    // Chama a função do model para atualizar os dados
    await professorModel.atualizarProfessor(
        id,
        professor
    );

    // Retorna uma mensagem de sucesso
    res.json({
        mensagem: 'Professor atualizado com sucesso'
    });
};

// Função para excluir um professor
const deletarProfessor = async (req, res) => {

    // Obtém o ID enviado na URL
    const { id } = req.params;

    // Chama a função do model para remover o professor
    await professorModel.deletarProfessor(id);

    // Retorna uma mensagem de sucesso
    res.json({
        mensagem: 'Professor removido com sucesso'
    });
};

// Exporta todas as funções para serem usadas nas rotas
module.exports = {
    listarProfessores,
    criarProfessor,
    buscarProfessorPorId,
    atualizarProfessor,
    deletarProfessor
};