const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '..'); // posso passar um segundo parametro depois do __dirname, que seria o caminho para o arquivo que será chamado

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/useForm.html`);
});

router.post('/save', (req, res) => {
  console.log(req.body); // como o banco vai receber

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome é ${name} e ele tem ${age} anos`);

  res.sendFile(`${basePath}/useForm.html`);
});

router.get('/:name', (req, res) => {
  // todos as requisições de url tem que ser escrita antes da url padrão '/'

  const name = req.params.name; // esse req.params.id se refere ao id da url

  console.log(`Estamos buscando pelo usuário com o nome de: ${name}`);

  res.sendFile(`${basePath}/name.html`);

  res.send(`<h1>Bem vindo!</h1>`);
});

module.exports = router;
