// Importa o mysql2...
const mysql = require('mysql2/promise');

// Cria conexão com o banco..
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Valdi123nei@',
    database: 'escola'
});

// Exporta conexão...
module.exports = conexao;