const path = require('path');

console.log(path.resolve('teste.txt')); // mostra o caminho até o arquivo

const midFolder = 'relatorios';
const fileName = 'erick.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName); // forma um path dinâmico, com variáveis e valores fixos

console.log(finalPath);
