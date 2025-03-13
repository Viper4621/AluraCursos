//forma mais utilizada porem precisa de configurações a mais o require e nativo do node
// import estudante from "./estudante.json";

//javascript object notation
const estudante = require("./estudante.json");

// console.log(estudante);
//tipo de dado objeto
// console.log(typeof estudante);

const chaves = Object.keys(estudante);
//para verificar as chaves do array
console.log(chaves);
