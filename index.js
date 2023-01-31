// event loop é a garantia de que o código vai ser lido de cima para baixo. Tem mais coisas sobre, mas não é para agora.

function a() {
  console.log('Executando a');
}
function b() {
  console.log('Executando b');
  c();
  a();
}
function c() {
  console.log('Executando c');
}

b();

// irá aparecer "executando b, executando c, executando a. Sequencialmente".
