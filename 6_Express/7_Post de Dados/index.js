const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname); // posso passar um segundo parametro depois do __dirname, que seria o caminho para o arquivo que será chamado

app.use(express.urlencoded({ extended: true })); // está dizendo que pode ler dados ,ais complexos como objetos json, que são passados no código a baixo. Se por um lado for false, só será lido lido dados simples como strings e arrays.

app.use(express.json()); // convertendo o que foi enviado no post para json

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/useForm.html`);
});

app.post('/users/save', (req, res) => {
  console.log(req.body); // como o banco vai receber

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome é ${name} e ele tem ${age} anos`);

  res.sendFile(`${basePath}/useForm.html`);
});

app.get('/users/:name', (req, res) => {
  // todos as requisições de url tem que ser escrita antes da url padrão '/'

  const name = req.params.name; // esse req.params.id se refere ao id da url

  console.log(`Estamos buscando pelo usuário com o nome de: ${name}`);

  res.sendFile(`${basePath}/name.html`);

  res.send(`<h1>Bem vindo!</h1>`);
});

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log('🚀 O servidor foi iniciado!');
});
