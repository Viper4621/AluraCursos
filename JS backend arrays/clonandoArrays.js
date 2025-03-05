const notas = [7, 7, 8, 9];
//quando queremos clonar um array e alterar apenas novo usamos a estrutura abaixo
//nossa const esta pegando a referencia do array e englobamos em [...nome] assim o array clonado usando operador de espalhamento
//recebe novos valores e podemos ao inves de dar push dentro do operador de espalhamento igual abaixo
const novasNotas = [...notas, 10];

//spread operator
// novasNotas.push(10);

// let nota = 9.75;
// let novaNota = nota;

// nota = 10;

console.log(notas);
console.log(novasNotas);
