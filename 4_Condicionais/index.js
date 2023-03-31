const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const user = {
    name: 'Erick',
    surname: 'Veríssimo',
  };

  res.render('layouts/home', { user: user });
});

app.listen(3000, () => {
  console.log('🚀Servidor funcionando!');
});
