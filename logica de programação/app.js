alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 4;
let chute = prompt("Digite um numero entre 1 e 10");
console.log(numeroSecreto);

if (chute == numeroSecreto) {
  console.log(`Parabens você acertou o numero secreto ${numeroSecreto}`);
} else {
  if (chute > numeroSecreto) {
    alert(`Seu chute ${chute} é maior que o numero secreto`);
  } else {
    alert(`Seu chute ${chute} é menor que o numero secreto`);
  }
}
