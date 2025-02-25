const boasVindas = "Seja bem vindo";

console.log(boasVindas.toLocaleUpperCase());

var nula = null;
var vazia;

console.log(null);
console.log(vazia);

var numero1 = 1;
var texto1 = "texto1";
var afirmativo = true;

console.log(
  `o numero é ${numero1} o texto procurado é ${texto1} e esta atividade esta ${afirmativo}`
);

var numerica = 123;
var texto = "auei";

var numeroConvertido = String(numerica);
var textoConvertido = Number(texto);

console.log(typeof numeroConvertido);
console.log(typeof textoConvertido);

var stringao = "Aprendendo nas aulas";
var maiusculo = stringao.toUpperCase();
var minusculo = stringao.toLowerCase();
var corte = stringao.slice(0, 10);

console.log(maiusculo);
console.log(minusculo);
console.log(corte);
