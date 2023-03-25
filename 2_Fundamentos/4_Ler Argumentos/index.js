// dar um node index.js nome=Erick

console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

const name = args[0].split('=')[1];
console.log(name);

const age = args[1].split('=')[1]
console.log(age)

console.log(`O nome dele é ${name} e ele tem ${age} anos!`)