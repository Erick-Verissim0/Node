const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.write('Oi, HTTP!');
  res.end(); // tem que sinalizar quando para o response
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
