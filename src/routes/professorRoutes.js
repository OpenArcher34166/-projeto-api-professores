// Importa o framework Express
const express = require('express');

// Cria um objeto de rotas do Express
const router = express.Router();

// Importa o controller de professores
const professorController =
require('../controllers/professorController');

// Rota para cadastrar um novo professor
// Método: POST
// URL: /professores
router.post(
    '/professores',
    professorController.criarProfessor
);

// Rota para listar todos os professores
// Método: GET
// URL: /professores
router.get(
    '/professores',
    professorController.listarProfessores
);

// Rota para buscar um professor pelo ID
// Método: GET
// URL: /professores/:id
router.get(
    '/professores/:id',
    professorController.buscarProfessorPorId
);

// Rota para atualizar um professor pelo ID
// Método: PUT
// URL: /professores/:id
router.put(
    '/professores/:id',
    professorController.atualizarProfessor
);

// Rota para excluir um professor pelo ID
// Método: DELETE
// URL: /professores/:id
router.delete(
    '/professores/:id',
    professorController.deletarProfessor
);

// Exporta as rotas para serem utilizadas no app.js
module.exports = router;