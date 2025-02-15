// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10";
//substituimos com uma variavel de let mensagemTentativas pois o html as vezes não interpreta o template string

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativas";
    let mensagemTentativas = `Parabens você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O Numero secreto é menor");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior");
    }
    tentativas = tentativas + 1;
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

console.log(numeroSecreto);
