//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

function imprimeElementos(arr) {
  for (let elemento of arr) {
    console.log(elemento); // Imprime cada elemento do array
  }
}

const meuArray = ["a", "b", "c"];
imprimeElementos(meuArray);
//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const lista = ["banana", "gatinho", "pepino"];
//cuidado com ; no fechamento após bloco do for se não da erro
function imprimeLista(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`);
  }
}

imprimeLista(lista);
//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const numerosGeral = [];

for (let i = 0; i <= 100; i++) {
  numerosGeral.push(i);
}

console.log(numerosGeral);
//aqui a função que vai fazer a soma e dar o total
function somaNumerosGeral(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(somaNumerosGeral(numerosGeral));

//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array,
//  no seguinte formato: 'o menor número é X e o maior número é Y'

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimirMaiorMenor(arr) {
  let maior = 0;
  let menor = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }
  return `o maior numero é ${maior} e o menor numero é ${menor}`;
}

console.log(imprimirMaiorMenor(arrMenoresMaiores));
//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e
// exibir no console apenas os números pares contidos nesse array.

const number = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log("valores pares no console");

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log(number[i]);
  }
}

//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const arrayNotas = [10, 8, 6, 9, 7, 5];
let sum = 0;

for (let i = 0; i < arrayNotas.length; i++) {
  sum += arrayNotas[i];
}

const fazMedia = sum / arrayNotas.length;

console.log("Array:", arrayNotas);
console.log("Média dos números:", sum);
