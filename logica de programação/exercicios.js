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


let loop = 1;

while (loop <= 10) {
  console.log(loop);
  loop++;
}

console.log("ola");
alert("ola");

while (loop >= 0) {
  console.log(loop);
  loop--;
}

let contagemRegressiva = prompt("Escolha um numero");

while (contagemRegressiva >= 0) {
  console.log(contagemRegressiva);
  contagemRegressiva--;
}

let contagemProgressiva = 0;

while (contagemProgressiva <= 100) {
  console.log(contagemProgressiva);
  contagemProgressiva++;
}
