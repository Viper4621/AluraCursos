//Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como for … in e métodos como Object.keys().
//  Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis,
// o que significa que elas são visíveis durante a iteração.

const meuObjeto = {
  nome: "ChatGPT",
  linguagem: "Java Script",
  versao: "3.5",
};
//propriedade enumerada
for (let chave in meuObjeto) {
  console.log(chave);
}

//propriedade não enumerada

// const meuObjeto2 = {};

// Object.defineProperty(meuObjeto, "propriedadeNaoEnumeravel", {
//   value: 42,
//   enumerable: false,
// });

// for (let chave in meuObjeto2) {
//   console.log(chave);
// }
//Manipulando enumerabilidade

// Supondo que meuObjeto2 já foi definido em algum lugar do código
const meuObjeto2 = {};

// Agora definimos valor e para enumerar
Object.defineProperty(meuObjeto2, "objetoNaoEnumerado", {
  value: 42,
  enumerable: true, // Esta propriedade será enumerável
});

console.log(meuObjeto2); // Exibe o objeto completo
console.log(Object.keys(meuObjeto2)); // Exibe as chaves do objeto, incluindo "objetoNaoEnumerado"
console.log(meuObjeto2.objetoNaoEnumerado); // Exibe o valor da propriedade "objetoNaoEnumerado"

// Corrigindo o uso de Object.values
const values = Object.values(meuObjeto2); // Obtém os valores das propriedades do objeto

console.log(values); // Exibe os valores do objeto
