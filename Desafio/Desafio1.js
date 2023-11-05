function apresetacao() {
    console.log(`Olá, mundo!`);
}
apresetacao();

function apresetacaoUsuario(nome) {
    console.log(`Olá, ${nome}`);
}
apresetacaoUsuario();

function calcularDobro(numero) {
    return numero * 2;
  }
  
let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

function calcularMedia(a, b, c) {
   return (a + b + c) / 3;
}
  
let media = calcularMedia(4, 7, 10);
console.log(media);

function encontrarMaior(a, b) {
  return a > b ? a : b;
}
  
let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 