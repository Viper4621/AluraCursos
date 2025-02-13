alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
  chute = prompt(`Digite um numero entre 1 e ${numeroMaximo}`);

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`Seu chute ${chute} é maior que o numero secreto`);
    } else {
      alert(`Seu chute ${chute} é menor que o numero secreto`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabens você descobriu o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);
