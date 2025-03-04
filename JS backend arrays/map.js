const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// });
//abaixo com arrowFunction quando temos apenas 1 linha podemos tirar chaves / return e ; do final
//podemos incluir ternario === >= 10 ? 10 : nota + 1 ou inves que criar um if para o metodo map
//map cria um novo array quando precisamos capturar e guardar em outro array
const notasAtualizadas = notas.map((nota) => (nota + 1 >= 10 ? 10 : nota + 1));

console.log(notasAtualizadas);
