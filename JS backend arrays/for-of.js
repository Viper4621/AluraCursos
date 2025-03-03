const notas = [10, 9, 8, 5];

let somaDasNotas = 0;

//aqui nao temos o controle especifico de 3 expressoes
//for of é mais simples casos do 1 indice do array ao ultimo
//cria uma let nota = guarda apenas elemento não indice
for (let nota of notas) {
  somaDasNotas += notas;
}

const media = somaDasNotas / notas.length;

console.log(media);
