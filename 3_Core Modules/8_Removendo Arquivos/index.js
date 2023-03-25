const fs = require('fs');

fs.unlink('arquivo.txt', function(err) {
  if (err) {
    console.log('Deu erro aqui: ', err);
    return;
  }

  console.log('Arquivo removido!');
});
