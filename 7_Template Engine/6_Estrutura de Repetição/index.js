// As estruturas de repetição no handlebars são feitas pelo operador erach
// A sintaxe é {{#each}} e {{/each}}
// Em um array podemos chamar os itens como: {{this}}
// Então cada um dos itens é acessado na view
// Como o handlebars prega um template mais limpo, devemos mandar apenas o necessário para o front-end

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const item = ['item a', 'item b', 'item c'];

  res.render('layouts/home', { item });
});

app.listen(3000, () => {
  console.log('🚀Servidor funcionando!');
});
