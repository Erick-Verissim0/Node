const fs = require('fs');

fs.unlink('arquivo.txt', function (error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Erro removido com sucesso!');
});

// se der tudo certo o arquivo com o nome "arquivo.txt" vai ser deletado