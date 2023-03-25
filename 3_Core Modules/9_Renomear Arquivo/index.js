const fs = require('fs');

file = 'arquivo.txt';
newFile = 'novoarquivo.txt';

fs.rename(file, newFile, function (err) {
  if (err) {
    console.log('Deu erro aqui: ', err);
    return;
  }

  console.log(`O arquivo ${file} foi renomeado para ${newFile}`);
});
