const fs = require('fs');

if (!fs.existsSync('./minhaPasta')) {
  console.log('Não existe');
}

fs.mkdirSync('./minhaPasta');

if (fs.existsSync('./minhaPasta')) {
  console.log('Existe');
}
