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

const listaDeUsuarios = [
  { id: 1, nome: "Alice", idade: 25 },
  { id: 2, nome: "Bob", idade: 30 },
  { id: 3, nome: "Charlie", idade: 22 },
];

function encontrarUsuario(id) {
  return listaDeUsuarios.find((usuario) => usuario.id === id);
}

const usuarioBuscado = encontrarUsuario(3);
console.log(usuarioBuscado);
