const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname); // posso passar um segundo parametro depois do __dirname, que seria o caminho para o arquivo que será chamado

app.get('/users/:id', (req, res) => {
  // todos as requisições de url tem que ser escrita antes da url padrão '/'

  const id = req.params.id; // esse req.params.id se refere ao id da url

  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log('🚀 O servidor foi iniciado!');
});
