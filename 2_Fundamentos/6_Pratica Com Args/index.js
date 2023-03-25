// tem que dar um npm install minimist
// passar node index.js --name=numeroA --work=numeroB

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const sum = require('./sum').sum;

const a = parseInt(args['a']);
const b = parseInt(args['b']);

sum(a, b);
