const x = 10;

try {
  x = 2;
} catch (err) {
  console.log('Caiu no Catch');
  console.log(`Error: ${err}`);
}
