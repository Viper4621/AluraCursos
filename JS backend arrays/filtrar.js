const alunos = ["ana", "marcos", "maria", "mauro"];
const medias = [7, 4.5, 8, 7.5];

//filter e metodo callback não retorna dados string ou numero retorna true ou false
//filter assim como map sempre retorna uma rray com resultados que passar no true ou false

const tamanhoNome = alunos.filter((alunos) => {
  return alunos.length < 4;
});

console.log(tamanhoNome);
//abaixo usamos filtro para buscar no array de alunos e pelo indice de media trazer o valor do aluno com condição <7
//abaixo substituimos o parametro aluno por _ por ser boa pratica já que não estamos usando ele
const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);

const newNotas = [10, 5, 7, 4, 8, 3];

const aprovados = newNotas.filter((nota) => {
  return nota >= 7;
});
//ou encurtando podemos utilizar

// const aprovados = newNotas,filter((nota) => nota >= 7)

console.log(aprovados);
