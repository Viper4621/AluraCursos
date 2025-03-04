const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
  console.log(lista[indice]);
}

const lista2 = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista2.length; i++, j++) {
  console.log(lista2[i] + j);
}

//forOf
const lista3 = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista3) {
  soma += elemento;
}

console.log(soma); //15

//forEach()

const lista4 = [1, 2, 3, 4, 5];
let soma2 = 0;

lista.forEach((numero) => (soma2 += numero));
console.log(soma2); //15

//ou acima separado

lista.forEach((numero) => {
  soma += numero;
});

//sem arrowFunction

lista.forEach(function (numero) {
  soma += numero;
});

//Utilização de cada depende arrays muitos grandes
//forEach em conjunto de map() ou filter() e depende tambem da configuração de navegadores
//forOf quando precisamos dar break
//for apenas quando precisamos for mais fina de laço condição inicial / parada / saida
