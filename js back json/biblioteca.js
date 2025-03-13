//importamos o json
const biblioteca = require("./biblioteca.json");
//criamos um novo dado em formato json
const novoLivro = {
  titulo: "novo livro",
  autor: "algum",
  genero: "ação",
  ano_publicacao: "ontem",
};
//adicionamos em nosso json
biblioteca.push(novoLivro);

console.log(biblioteca);
//aqui seria para converter em string
const bibliotecaString = JSON.stringify(biblioteca);
//caso temos que acessar e alterar dados só conseguimos fazer da forma abaixo que ira manter em objeto
const bibliotecaStringAlteravel = JSON.parse(JSON.stringify(biblioteca));

console.log(bibliotecaString);
console.log(bibliotecaStringAlteravel);
console.log(typeof bibliotecaStringAlteravel);
