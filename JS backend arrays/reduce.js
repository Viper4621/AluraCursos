const js = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const java = [6, 5, 8, 9, 5, 6];
const python = [7, 3.5, 8, 9.5];

//reduce tbm é uma função callback vamos executar um função dentro do reduce
//reduce tem sintax um pouco diferente 1 parametro = acumulador
//2 parametro elemento iterado em nosso caso uma nota
//reduce é uma função que reduz todos elementos de um array a um elemento só
//no final das chaves usando reduce precisamos colocar o valor inicial ,0 para começar com valor
//isso pois vamos trabalhar com valores

function calculaMedia(listaDeNotas) {
  //   const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
  //     return acumulador + nota;
  //   }, 0);

  //como temos apenas 1 instrção de reduce segue abaixo em 1 linha o mesmo codigo para simplificar
  const somaDasNotas = listaDeNotas.reduce(
    (acumulador, nota) => acumulador + nota,
    0
  );

  const media = somaDasNotas / listaDeNotas.length;
  return media;
}

console.log(calculaMedia(js));
console.log(calculaMedia(java));
console.log(calculaMedia(python));
