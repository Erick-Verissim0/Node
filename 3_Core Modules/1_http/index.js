const http = require('http');

port = 3000;

const server = http.createServer((req, res) => {
  res.write('Passei por aqui');
  res.end;
});

server.listen(port, () => {
  console.log('Servidou iniciou!');
});
