const biblioteca = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
  },
  {
    id: 2,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605,
  },
  { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
];
//encontrando livro por id ou null
function encontraLivroPorId(id) {
  return biblioteca.find((livro) => livro.id === id) || null;
}

const encontrarLivroid = encontraLivroPorId(2);
console.log(encontrarLivroid); //encontra livro 2

const encontrarLivroInexistente = encontraLivroPorId(4);
console.log(encontrarLivroInexistente); // ira dar null não tem

const catalogoFilmes = [
  { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
  {
    id: 2,
    titulo: "Jurassic Park",
    diretor: "Steven Spielberg",
    anoLancamento: 1993,
  },
  {
    id: 3,
    titulo: "Inception",
    diretor: "Christopher Nolan",
    anoLancamento: 2010,
  },
];

function filtrarAno(ano) {
  return catalogoFilmes.filter((filme) => filme.anoLancamento === ano);
}

const filme1999 = filtrarAno(1999);
console.log(filme1999);
const filme2010 = filtrarAno(2010);
console.log(filme2010);

// ordenar lista

const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 },
];

function filtrarPorPreco(maxPreco) {
  const produtosFiltrados = listaProdutos.filter(
    (produto) => produto.preco <= maxPreco
  );
  return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

const produtosAte50 = filtrarPorPreco(26);
console.log("Produtos com preço até 50.00 (ordenados por preço crescente):");
console.log(produtosAte50);

// ordenarAnimais.js

// Array de objetos representando animais
const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 },
];

//para ordenar temos que criar 2 funções
// Função para ordenar animais com base na função de comparação fornecida
function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}

// Função de comparação para ordenar por idade de forma crescente
function compararIdadeCrescente(a, b) {
  return a.idade - b.idade;
}

// Ordena os animais por idade de forma crescente e imprime no console
const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
console.log("Animais Ordenados por Idade (Crescente):");
console.log(animaisOrdenadosCrescente);

// Função de comparação para ordenar por idade de forma decrescente
function compararIdadeDecrescente(a, b) {
  return b.idade - a.idade;
}

// Ordena os animais por idade de forma decrescente e imprime no console
const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log("\nAnimais Ordenados por Idade (Decrescente):");
console.log(animaisOrdenadosDecrescente);
