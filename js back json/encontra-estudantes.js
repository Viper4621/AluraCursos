const estudantes = require("./estudantes.json");

//função para buscar na lista / a chave e o valor
//e retornar usando metodo find para buscar estudante => estudante[chave] === entregar o valor da chave

function buscaInformacao(lista, chave, valor) {
  //refatorado codigo usando includes
  return lista.find((estudante) => estudante[chave].includes(valor));
}
//agora passamos na função para buscar na lista do json o dado tipo string "nome" e o nome
//se nao tiver na lista retorna undefinned
const estudanteEncontrado = buscaInformacao(estudantes, "nome", "Juliet");
console.log(estudanteEncontrado);
//abaixo vai dar undefined pois telefone é array e nao string
//entao vamos refatorar tanto rpa string como array
const telefoneEncontrado = buscaInformacao(
  estudantes,
  "telefone",
  "1918820860"
);
console.log(telefoneEncontrado);
