const fs = require('fs');

fs.rename('arquivo.txt', 'arquivoNovo.txt', function (error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Nome alterado com sucesso!');
});
