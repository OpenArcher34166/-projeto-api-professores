// Importa o framework Express
const express = require('express');

// Cria a aplicação Express
const app = express();

// Permite que a API receba dados em formato JSON
app.use(express.json());

// Importa as rotas de professores
const professorRoutes =
require('./routes/professorRoutes');

// Usa as rotas de professores na aplicação
app.use(professorRoutes);

// Exporta a aplicação para ser utilizada no server.js
module.exports = app;