//1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro.
// O objeto deve conter as seguintes propriedades:

// const livro = {
//   titulo: "Qualquer coisa",
//   autor: "Alguem",
//   anoPublicacao: new Date(2020, 11, 12).getTime(),
//   genero: "ação",
// };

// console.log(
//   `Detalhes do livro:
//     Nome do livro: ${livro["titulo"]}
//     Autor: ${livro.autor}
//     Publicado em ${new Date(livro.anoPublicacao).toLocaleDateString()}
//     Genero do livro: ${livro.genero}`
// );
//2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()).
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

const anoAtual = new Date().getFullYear();

const livro2 = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoDePublicacao2: 1954,
  genero: "Fantasia",
};

livro2.idade = anoAtual - livro2.anoDePublicacao2;

console.log(livro2);

//3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero,
// idade de publicação. Depois, utilize colchetes para acessar
// diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const livro3 = {
  titulo: "O Senhor dos Anéis o retorno do rei",
  autor: "J.R.R. Tolkien",
  anoDePublicacao3: 1960,
  genero: "Fantasia",
  idadePublicacao: anoAtual - 1960,
};

console.log("Detalhes do livro:");
console.log("Autor:", livro3["autor"]);
console.log("Ano de publicação:", livro3["anoDePublicacao3"]);
console.log("Genero:", livro3["genero"]);
console.log("Ano de publicação:", livro3["idadePublicacao"]);

//4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
// Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

const livro4 = {
  titulo: "O Senhor dos Anéis e as duas torres",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1964,
  genero: "Fantasia",
  idadePublicacao: anoAtual - 1964,
};

livro4.avaliacao = null;

//add nova avaliação
const novaAvaliacao = { nota: 4.5, comentario: "Otimo Livro" };
if (livro4.avaliacao === undefined || livro4.avaliacao === null) {
  livro4.avaliacao = novaAvaliacao;
} else {
  console.log("O livro ja tem avaliação");
}

console.log(livro4.avaliacao);

// alterar genero para aventura
livro4.genero = "Aventura";
console.log(livro4["genero"]);

delete livro4.avaliacao;

console.log(livro4);
