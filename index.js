const fs = require('fs');

fs.stat('novoArquivo.txt', (error, status) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(status.isFile());
  console.log(status.isDirectory());
  console.log(status.isSymbolicLink());
  console.log(status.ctime);
  console.log(status.size);
});
