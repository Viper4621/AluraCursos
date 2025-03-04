//1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const lista = [1, 2, 3];

lista.forEach((elemento, indice) => {
  console.log(`Elemento: ${elemento} Indice: ${indice}`);
});
// com metodo for mesmo exercicio
const lista2 = [1, 2, 3];
for (let indice = 0; indice < lista2.length; indice++) {
  console.log(indice, lista2[indice]);
}

//2 Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback
// que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e
// aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
  return array.map(funcaoCallback);
}

function dobraNumero(num) {
  return num * 2;
}

const listaNew = [1, 2, 3];
//quando chamar função dentro dos parametros de uma função não utiliza()
const listaDobrada = executaOperacaoEmArray(listaNew, dobraNumero);

console.log(listaDobrada);

//3 Você recebeu um array numeros contendo valores numéricos.
// Crie um programa que verifique se um número específico está presente nesse array.
// Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário,
//  se o número não estiver presente, o programa deve retornar "-1".

const arrayNumeros = [2, 10, 20, 30];
const numeroProcurado = 2;
let posicao = -1;

for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);

//4 Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
const nomesTurmaA = ["João Silva", "Maria Santos", "Pedro Almeida"];
const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];
//Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
//  Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos.
// Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista,
// retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todasAsTurmas.find((nome) => nome === "Carlos Oliveira");

if (alunoProcurado) {
  console.log("Aluno encontrado:", alunoProcurado);
} else {
  console.log("Aluno não encontrado.");
}

//5 Considere um array de números inteiros.
const numerosArray = [6, 9, 12, 15, 18, 21];
//Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois,
// utilize o método findIndex() para encontrar o índice do número 18 no array.

numerosArray.forEach((numero) => {
  const resultado = numero * 3;
  console.log(resultado);
});

const indiceNumero = numerosArray.indexOf((numero) => numero === 18);

if (indiceNumero !== -1) {
  console.log(`O número 18 está no índice ${indiceNumero}.`);
} else {
  console.log("O número 18 não está presente no array.");
}
