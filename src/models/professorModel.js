// Importa a conexão com o banco de dados
const conexao = require('../database/conexao');

// Função para listar todos os professores cadastrados
const listarProfessores = async () => {

    // Comando SQL para selecionar todos os professores
    const sql = 'SELECT * FROM professores';

    // Executa o comando SQL no banco
    const [rows] = await conexao.execute(sql);

    // Retorna os professores encontrados
    return rows;
};

// Função para cadastrar um novo professor
const criarProfessor = async (professor) => {

    // Comando SQL para inserir um novo professor
    const sql =
    'INSERT INTO professores (nome, disciplina, email, salario) VALUES (?, ?, ?, ?)';

    // Executa o INSERT enviando os dados recebidos
    const [resultado] = await conexao.execute(sql, [
        professor.nome,
        professor.disciplina,
        professor.email,
        professor.salario
    ]);

    // Retorna o resultado da operação
    return resultado;
};

// Função para buscar um professor pelo ID
const buscarProfessorPorId = async (id) => {

    // Comando SQL para buscar um professor específico
    const sql = 'SELECT * FROM professores WHERE id = ?';

    // Executa a consulta passando o ID
    const [rows] = await conexao.execute(sql, [id]);

    // Retorna apenas o primeiro resultado encontrado
    return rows[0];
};

// Função para atualizar os dados de um professor
const atualizarProfessor = async (id, professor) => {

    // Comando SQL para atualizar os dados do professor
    const sql =
    `UPDATE professores
     SET nome = ?, disciplina = ?, email = ?, salario = ?
     WHERE id = ?`;

    // Executa a atualização enviando os novos dados
    const [resultado] = await conexao.execute(sql, [
        professor.nome,
        professor.disciplina,
        professor.email,
        professor.salario,
        id
    ]);

    // Retorna o resultado da atualização
    return resultado;
};

// Função para excluir um professor pelo ID
const deletarProfessor = async (id) => {

    // Comando SQL para remover um professor
    const sql = 'DELETE FROM professores WHERE id = ?';

    // Executa a exclusão passando o ID
    const [resultado] = await conexao.execute(sql, [id]);

    // Retorna o resultado da exclusão
    return resultado;
};

// Exporta todas as funções para serem utilizadas em outros arquivos
module.exports = {
    listarProfessores,
    criarProfessor,
    buscarProfessorPorId,
    atualizarProfessor,
    deletarProfessor
};