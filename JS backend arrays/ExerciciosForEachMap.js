const listaDeProdutos = [
  "Poster A4",
  "Poster A5",
  "camiseta lisa",
  "camiseta estampada",
  "pin de metal",
  "cartela de adesivos",
];

//vai dar erro undefinned pois o metodo forEach não retorna um novo array com mudanças
// const listaAtualizada = listaDeProdutos.forEach((produto) => {
//   return `${produto} - unidade`;
// });

// console.log(listaAtualizada);

const listaAtualizada = listaDeProdutos.map((produtos) => {
  return `${produtos} - unidades`;
});
console.log(listaAtualizada);

const numeros = [2, 4, 6, 8];
let soma = 0;

numeros.forEach((numero) => {
  soma += numero;
});

console.log("A soma dos números é:", soma);

//multiplicando array com map separada a função
const arrayNum = [1, 2, 3, 4];

// const arrayAtt = arrayNum.map(multi10);

// function multi10(num) {
//   return num * 10;
// }

//multiplicando array declarando direto no parametro map()

const arrayAtt = arrayNum.map((num) => num * 10);
console.log(arrayAtt);
