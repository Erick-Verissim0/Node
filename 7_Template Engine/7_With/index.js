const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const post = {
    title: 'Aprender Node.Js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.Js...',
    comments: 4,
  };

  res.render('layouts/blogPost', { post });
});

app.listen(3000, () => {
  console.log('🚀Servidor funcionando!');
});
