const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const users = require('./users');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); // está dizendo que pode ler dados ,ais complexos como objetos json, que são passados no código a baixo. Se por um lado for false, só será lido lido dados simples como strings e arrays.

app.use(express.json()); // convertendo o que foi enviado no post para json

const basePath = path.join(__dirname); // posso passar um segundo parametro depois do __dirname, que seria o caminho para o arquivo que será chamado

app.use('/users', users);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log('🚀 O servidor foi iniciado!');
});
