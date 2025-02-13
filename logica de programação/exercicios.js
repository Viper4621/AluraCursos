let idade = prompt("qual a sua idade");

if (idade >= 18) {
  console.log(`voce pode tirar habilitação sua idade é ${idade}`);
} else {
  console.log(`Voce não pode tirar habilitacação sua idade ainda é ${idade}`);
}

let procentagemDesconto = 0;

let milhas = prompt("quantas milhas voce tem?");

if (milhas >= 30000) {
  procentagemDesconto = procentagemDesconto + 20;
} else {
  if (milhas >= 5000) {
    procentagemDesconto = procentagemDesconto + 10;
  }
}

console.log(procentagemDesconto);

let diaSemana = prompt("qual dia da semana");

if (diaSemana == "sabado") {
  console.log("bom sabado");
} else if (diaSemana == "domingo") {
  console.log("bom domingo");
} else {
  console.log("boa semana");
}

addEventListener;

alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 4;
let chute = prompt("Digite um numero entre 1 e 10");
console.log(numeroSecreto);

if (chute == numeroSecreto) {
  console.log(`Parabens você acertou o numero secreto ${numeroSecreto}`);
} else {
  console.log(
    `Tente novamente você errou seu chute foi ${chute} e o numero secreto era ${numeroSecreto}`
  );
}
