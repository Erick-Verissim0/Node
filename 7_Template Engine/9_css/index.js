const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.Js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.Js...',
    comments: 4,
  };

  res.render('blogPost', { post });
});

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.Js',
      category: 'JavaScript',
      body: 'Este artigo vai te ajudar a aprender Node.Js...',
      comments: 4,
    },
    {
      title: 'Aprender Python',
      category: 'Python',
      body: 'Este artigo vai te ajudar a aprender Python',
      comments: 1,
    },
    {
      title: 'Aprender TypeScript',
      category: 'TypeScript',
      body: 'Este artigo vai te ajudar a aprender TypeScript...',
      comments: 5,
    },
  ];

  res.render('blog', { posts });
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('🚀Servidor funcionando!');
});
