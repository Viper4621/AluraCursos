// const estudante = require("./estudante.json");
// //quando tem comunicação cliente server nao pode ser js ou json sempre em string
// //convertendo os dados em string
// //transforma objeto em string
// const stringEstudante = JSON.stringify(estudante);

// console.log(stringEstudante); // todo objeto
// console.log(typeof stringEstudante); // informando o tipo no caso string

// console.log(stringEstudante.nome); // undefinned js não da erro // neste caso não da para acessar dados diretos do json
// //parse retransforma em objeto
// const objEstudante = JSON.parse(stringEstudante);
// console.log(objEstudante);
// console.log(typeof objEstudante);
// console.log(objEstudante.nome);

const objetoOriginal = { chave: "valor" };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = "novoValor";
// console.log(objetoOriginal.chave); // Saída: novoValor

//clonagem profunda
// neste caso reatribuimos um valor porem cria um novo dado mantendo o original com os dados iniciais
const objetoPrimeiro = { chave: "valor" };
const objetoSegundo = JSON.parse(JSON.stringify(objetoPrimeiro));

objetoSegundo.chave = "novo valor";
console.log(objetoPrimeiro.chave);
console.log(objetoSegundo.chave);
