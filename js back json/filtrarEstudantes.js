const estudantes = require("./estudantes.json");

//função hasOwnProperty se tem a propriedade dentro do objeto que deseja verificar
//com esta função busca em todos dados do json que não tem cep e nos retorna todos objetos que não tem a propriedade
function filtrarPorPropriedade(lista, propriedade) {
  return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade);
  });
}

const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, "cep");
console.log(listaEnderecosIncompletos);
