const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname); // posso passar um segundo parametro depois do __dirname, que seria o caminho para o arquivo que será chamado

const checkAuth = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log('Está logado, pode continuar!');
    next();
  } else {
    console.log('Não está logado, faça o login para continuar!');
  }
};

app.use(checkAuth);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log('🚀 O servidor foi iniciado!');
});
