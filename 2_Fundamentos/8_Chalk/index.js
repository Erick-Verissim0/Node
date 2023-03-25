// Tem que dar npm install chalk

const chalk = require('chalk') // <- Tá dando erro

const nota = 9;

if (nota >= 7) {
  console.log(chalk.green('Parabéns, você está aprovado!'));
} else {
  console.log(chalk.red('Você ficou de recuperação!'));
}
