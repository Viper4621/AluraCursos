const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312345",
  turma: "JavaScript",
};

estudante.nome; // jose
//notação de colchete atraves dela uma propriedade pode ser passada e receber dado que desejar exemplo estudande, "nome ou cpf ou idade"
function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "cpf"));
console.log(exibeInfoEstudante(estudante, "idade"));

//podemos tbm que funciona porem dentro dos colchetes sempre tem que ser em string o dado pesquisado
console.log(estudante["turma"]);
//tentando acessar propriedade que não existe === undefinned abaixo não recebe erro da undefinned
console.log(estudante["pet"]);
console.log(estudante.pet);

const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};

console.log(pet.nome); // rex
console.log(pet["brinquedoFavorito"]); // bolinha
console.log(pet.brinquedoFavorito); // resulta em mesmo resultado acima porem sintax diferente
