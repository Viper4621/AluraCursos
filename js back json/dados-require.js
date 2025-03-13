const dadosRequire = require("./dados.json");
console.log(dadosRequire);
console.log("produtos");
console.log(dadosRequire.produtos);
console.log("Usuarios");
console.log(dadosRequire.usuarios);

const produtoAdd = {
  id: 1,
  nome: "Camiseta",
  preco: 39.99,
};
//neste caso como nosso json tem objetos tipo produto e usuarios temos que especificar onde desejamos colocar os novos dados
//por ser um produto .produto
// dadosRequire.produtos.push(produtoAdd);
// console.log(dadosRequire);
//aqui abaixo transformamos em string nosso objeto
const stringJsonProduto = JSON.stringify(produtoAdd);
console.log("String produto");
console.log(stringJsonProduto);

// exercicio de animais
const requireAnimal = require("./animal.json");
console.log(requireAnimal);

const novoAnimal = {
  id: 4,
  nome: "Elefante",
  tipo: "Mamífero",
  habitat: "Savana",
};

requireAnimal.animais.push(novoAnimal);
console.log(requireAnimal);

const animalModificar = requireAnimal.animais.find((animal) => animal.id === 2);
if (animalModificar) {
  animalModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = requireAnimal.animais.findIndex(
  (animal) => animal.id === 1
);
if (indiceAnimalRemover !== -1) {
  requireAnimal.animais.splice(indiceAnimalRemover, 1);
}

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(requireAnimal, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("Objeto JavaScript Resultante das Operações:");
console.log(requireAnimal);
