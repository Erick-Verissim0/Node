// Com o path conseguimos extrair diversas informações sobre caminhos e arquivos, exemplo: nome do diretório, nome do arquivo, extensão do arquivo e etc.

const path = require('path');

const customPath = '/relatorios/matheus/relatorio1.pdf';

console.log(path.dirname(customPath));
console.log(path.basename(customPath));
console.log(path.extname(customPath));
