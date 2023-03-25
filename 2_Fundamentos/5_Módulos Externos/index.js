// tem que dar um npm install minimist
// passar node index.js --name=meuNome --work=meuTrabalho

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args['name'];
const work = args['work'];

console.log(name, work);

console.log(`O nome dele é ${name} e ele trabalha como ${work}!`);
