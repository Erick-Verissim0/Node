const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name; // esse query.name é justamento o nome que o usuario colocar no input

  if (!name) {
    fs.readFile('mensagem.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    fs.writeFile('arquivo.txt', name, function (err, data) {
      res.writeHead(302, {
        Location: '/',
      });
      return res.end();
    });
  }

  fs.readFile('mensagem.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text-html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log('Servidor rodando na porta: ', port);
});
