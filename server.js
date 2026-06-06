// Importa a aplicação criada no arquivo app.js
const app = require('./src/app');

// Define a porta em que o servidor irá funcionar
const PORT = 3000;

// Inicia o servidor na porta definida
app.listen(PORT, () => {

    // Exibe uma mensagem no terminal informando que o servidor foi iniciado
    console.log(`Servidor rodando na porta ${PORT}`);

});